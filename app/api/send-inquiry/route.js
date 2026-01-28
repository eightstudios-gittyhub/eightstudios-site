import { NextResponse } from "next/server";
import { Resend } from "resend";

let lastSubmissionTime = 0;

export async function POST(request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.MY_EMAIL;

    if (!apiKey || !notifyEmail) {
      console.error("Missing RESEND_API_KEY or MY_EMAIL");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const data = await request.json();

    const now = Date.now();
    if (now - lastSubmissionTime < 3000) {
      return NextResponse.json(
        { error: "Too many submissions" },
        { status: 429 }
      );
    }
    lastSubmissionTime = now;

    const { ref, instagram, email, phone, message } = data;

    if (!instagram || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Eight Studios <noreply@eightstudios.org>",
      to: notifyEmail,
      subject: "New Archive Inquiry",
      html: `
        <h2>Archive Inquiry</h2>
        <p><b>Referenced Item:</b> ${ref || "Archive Garment"}</p>
        <p><b>Instagram:</b> ${instagram}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "Not provided"}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Inquiry Error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
