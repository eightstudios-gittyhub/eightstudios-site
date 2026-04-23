export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body || {};

  const webhook = process.env.DISCORD_WEBHOOK;

  if (!webhook) {
    return res.status(500).json({ error: "Missing webhook" });
  }

  try {
    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: `🌐 Site Log: ${message || "unknown event"}`
      })
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "Failed to send" });
  }
}
