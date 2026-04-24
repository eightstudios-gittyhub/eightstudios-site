const express = require("express");
const fetch = require("node-fetch");

const app = express();
app.use(express.json());

const TOKEN = process.env.DISCORD_BOT_TOKEN;
const CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;

// 🧠 Receive logs from Vercel
app.post("/log", async (req, res) => {
  try {
    const { page, ua, ip, device } = req.body;

    await fetch(`https://discord.com/api/v10/channels/${CHANNEL_ID}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bot ${TOKEN}`,
      },
      body: JSON.stringify({
        embeds: [
          {
            title: "👀 Website Visit",
            color: 3447003,
            fields: [
              { name: "Page", value: page || "Unknown" },
              { name: "Device", value: device || "Unknown" },
              { name: "IP", value: ip || "Unknown" },
              { name: "User Agent", value: ua || "Unknown" },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });

    res.sendStatus(200);
  } catch (e) {
    res.status(500).send("error");
  }
});

app.listen(3001, () => console.log("Bot running on port 3001"));
