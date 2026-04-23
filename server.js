import express from "express";

const app = express();
app.use(express.json());

const DISCORD_WEBHOOK = process.env.DISCORD_WEBHOOK;

app.post("/log", async (req, res) => {
  const payload = {
    content: `New site event: ${req.body.message || "visit"}`
  };

  await fetch(DISCORD_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  res.json({ ok: true });
});

app.listen(3000, () => console.log("Server running"));
