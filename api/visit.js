export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { page, ua } = req.body;

    const ip =
      req.headers["x-forwarded-for"] ||
      req.socket?.remoteAddress ||
      "Unknown";

    await fetch(process.env.DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [
          {
            title: "👀 New Visitor",
            color: 5814783,
            fields: [
              { name: "Page", value: page || "Unknown" },
              { name: "IP", value: ip },
              { name: "Device", value: ua || "Unknown" },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: "Failed" });
  }
}
