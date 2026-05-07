const express = require("express");
const crypto = require("crypto");
const app = express();

app.use(express.json());

const PORT = 3000;

// connected clients (live dashboard users)
const clients = [];

/* -------------------------
   🔴 LIVE STREAM (SSE)
--------------------------*/
app.get("/events", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  clients.push(res);

  req.on("close", () => {
    const i = clients.indexOf(res);
    if (i !== -1) clients.splice(i, 1);
  });
});

/* -------------------------
   🔐 WEBHOOK (GitHub)
--------------------------*/
const SECRET = "change_this_secret";

function verify(req) {
  const sig = req.headers["x-hub-signature-256"];
  if (!sig) return true; // allow dev mode

  const hmac = crypto.createHmac("sha256", SECRET);
  const digest = "sha256=" + hmac.update(JSON.stringify(req.body)).digest("hex");

  return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(digest));
}

app.post("/webhook", (req, res) => {
  if (!verify(req)) return res.status(401).send("Invalid signature");

  const event = req.headers["x-github-event"];
  const payload = req.body;

  let message = "📡 Unknown event";

  if (event === "push") {
    message = `🚀 Push → ${payload.repository.full_name} by ${payload.pusher.name}`;
  }

  if (event === "workflow_run") {
    message = `⚙️ Workflow → ${payload.workflow_run.name} (${payload.workflow_run.status})`;
  }

  if (event === "pull_request") {
    message = `🔀 PR ${payload.action} #${payload.number}`;
  }

  const data = `data: ${JSON.stringify({
    message,
    time: Date.now()
  })}\n\n`;

  clients.forEach(c => c.write(data));

  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
