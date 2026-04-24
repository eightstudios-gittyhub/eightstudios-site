const { Client, GatewayIntentBits } = require("discord.js");
const express = require("express");

const app = express();
app.use(express.json());

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

const TOKEN = process.env.DISCORD_BOT_TOKEN;
const CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;

// 🤖 Login bot
client.login(TOKEN);

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// 🌐 Receive logs from Vercel
app.post("/visit", async (req, res) => {
  try {
    const { page, ua, ip, device } = req.body;

    const channel = await client.channels.fetch(CHANNEL_ID);

    channel.send({
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
          timestamp: new Date(),
        },
      ],
    });

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(500).send("error");
  }
});

app.listen(3001, () => {
  console.log("Bot API running on port 3001");
});
