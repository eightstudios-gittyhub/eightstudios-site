export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { page, ua } = req.body;

    const userAgent = ua || req.headers["user-agent"] || "";

    // 🚫 BOT DETECTION (stronger)
    const botRegex =
      /(bot|crawl|spider|preview|facebook|discord|embed|whatsapp|curl|wget|python|axios|headless|node)/i;

    if (botRegex.test(userAgent)) {
      return res.status(200).json({ ignored: "bot" });
    }

    // 📱 DEVICE DETECTION
    const isMobile = /mobile|android|iphone|ipad/i.test(userAgent);
    const device = isMobile ? "📱 Mobile" : "💻 Desktop";

    // 🍪 UNIQUE VISITOR ID (cookie)
    let visitorId = req.cookies?.vid;

    if (!visitorId) {
      visitorId = crypto.randomUUID();
      res.setHeader(
        "Set-Cookie",
        `vid=${visitorId}; Path=/; HttpOnly; Max-Age=31536000`
      );
    }

    // ⏱️ RATE LIMIT (simple in-memory)
    global.visits = global.visits || {};

    const now = Date.now();
    const lastVisit = global.visits[visitorId] || 0;

    // Ignore if visited within last 60 seconds
    if (now - lastVisit < 60000) {
      return res.status(200).json({ ignored: "rate limit" });
    }

    global.visits[visitorId] = now;

    // 🔁 NEW OR RETURNING
    const isReturning = req.cookies?.returning === "true";

    if (!isReturning) {
      res.setHeader(
        "Set-Cookie",
        `returning=true; Path=/; Max-Age=31536000`
      );
    }

    const visitType = isReturning ? "🔁 Returning Visitor" : "🆕 New Visitor";

    // 🌐 IP (optional)
    const ip =
      req.headers["x-forwarded-for"] ||
      req.socket?.remoteAddress ||
      "Unknown";

    // 📤 SEND TO DISCORD
    await fetch(process.env.DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [
          {
            title: visitType,
            color: isReturning ? 15844367 : 5763719,
            fields: [
              { name: "Page", value: page || "Unknown" },
              { name: "Device", value: device },
              { name: "IP", value: ip },
              { name: "Visitor ID", value: visitorId }
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });

    return res.status(200).json({ success: true });

  } catch (err) {
    return res.status(500).json({ error: "fail" });
  }
}
