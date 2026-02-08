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

    if (data?.hiddenField) {
      return NextResponse.json({ success: true });
    }

    const now = Date.now();
    if (now - lastSubmissionTime < 3000) {
      return NextResponse.json(
        { error: "Too many submissions" },
        { status: 429 }
      );
    }
    lastSubmissionTime = now;

    const { name, instagram, email, item, otherItem, message } = data;

    if (!name || !instagram || !email || !item || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (item === "Other" && !otherItem) {
      return NextResponse.json(
        { error: "Missing item description" },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Eight Studios <noreply@eightstudios.org>",
      to: notifyEmail,
      subject: "New Ambassador Intake",
      html: `
        <h2>Ambassador Intake</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Instagram:</b> ${instagram}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Item:</b> ${item}</p>
        <p><b>Other Item:</b> ${otherItem || "N/A"}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Ambassador Intake Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
