export default async function handler(req, res) {
  try {
    const token = process.env.GITHUB_TOKEN;

    const response = await fetch(
      "https://api.github.com/repos/eightstudios-gittyhub/eightstudios-site/events",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json"
        }
      }
    );

    const data = await response.json();

    // Convert GitHub events into dashboard-friendly format
    const formatted = data.map(e => ({
      user: e.actor?.login || "unknown",
      event: e.type,
      time: e.created_at
    }));

    res.status(200).json(formatted);
  } catch (err) {
    res.status(500).json({ error: "Failed to load GitHub data" });
  }
}
