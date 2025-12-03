import { NextResponse } from "next/server";
import { Resend } from "resend";

// 🔐 INIT RESEND
const resend = new Resend(process.env.RESEND_API_KEY);

// 🔐 DISCORD WEBHOOK
const DISCORD_WEBHOOK = process.env.DISCORD_WEBHOOK_URL;

// 🔐 RATE LIMIT (simple)
let lastSubmissionTime = 0;

// SERVER ROUTE
export async function POST(request) {
  try {
    const data = await request.json();

    // 🛑 1 — Honeypot (bot check)
    if (data.hiddenField) {
      return NextResponse.json({ error: "Bot detected" }, { status: 400 });
    }

    // 🛑 2 — Rate limit (3 sec)
    const now = Date.now();
    if (now - lastSubmissionTime < 3000) {
      return NextResponse.json({ error: "Too many submissions" }, { status: 429 });
    }
    lastSubmissionTime = now;

    // 🧼 3 — Validation
    if (!data.name || !data.email || !data.instagram || !data.message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // 📧 4 — SEND EMAIL
    await resend.emails.send({
      from: "Eight Studios <noreply@eightstudios.org>",
      to: process.env.MY_EMAIL,
      subject: "New Ambassador Application",
      html: `
        <h2>Ambassador Form Submission</h2>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Instagram:</b> ${data.instagram}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Message:</b> ${data.message}</p>
      `,
    });

    // 📢 5 — DISCORD NOTIFICATION
    await fetch(DISCORD_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [
          {
            title: "New Ambassador Application",
            color: 11141290,
            fields: [
              { name: "Name", value: data.name },
              { name: "Instagram", value: data.instagram },
              { name: "Email", value: data.email },
              { name: "Message", value: data.message },
            ],
          },
        ],
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Ambassador Error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}