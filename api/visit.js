export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const { page, ua } = req.body;

    const userAgent = ua || req.headers["user-agent"] || "";

    // 🚫 BOT FILTER
    if (
      /(bot|crawl|spider|discord|preview|curl|wget|python|axios|headless)/i.test(
        userAgent
      )
    ) {
      return res.status(200).json({ ignored: true });
    }

    const device = /mobile/i.test(userAgent) ? "📱 Mobile" : "💻 Desktop";

    const ip =
      req.headers["x-forwarded-for"] ||
      req.socket?.remoteAddress ||
      "Unknown";

    // 📤 SEND TO YOUR BOT (NOT DISCORD DIRECTLY)
    await fetch(process.env.BOT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page,
        ua: userAgent,
        ip,
        device,
      }),
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: "fail" });
  }
}
