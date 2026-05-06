const express = require("express");
const crypto = require("crypto");

const app = express();
app.use(express.json());

const PORT = 3000;

// store connected clients
const clients = [];

/* ---------------------------
   🔴 LIVE STREAM (SSE)
----------------------------*/
app.get("/events", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  clients.push(res);

  req.on("close", () => {
    const index = clients.indexOf(res);
    if (index !== -1) clients.splice(index, 1);
  });
});

/* ---------------------------
   🔐 VERIFY GITHUB WEBHOOK
----------------------------*/
function verifySignature(req, secret) {
  const signature = req.headers["x-hub-signature-256"];
  if (!signature) return false;

  const hmac = crypto.createHmac("sha256", secret);
  const digest = "sha256=" + hmac.update(JSON.stringify(req.body)).digest("hex");

  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest));
}

/* ---------------------------
   📡 GITHUB WEBHOOK RECEIVER
----------------------------*/
const SECRET = "your_webhook_secret_here";

app.post("/webhook", (req, res) => {
  // optional security check
  // if (!verifySignature(req, SECRET)) return res.status(401).send("Bad signature");

  const event = req.headers["x-github-event"];
  const payload = req.body;

  let message = "";

  if (event === "push") {
    message = `🚀 Push by ${payload.pusher.name} → ${payload.repository.full_name}`;
  }

  if (event === "workflow_run") {
    message = `⚙️ Workflow ${payload.workflow_run.name} → ${payload.workflow_run.status}`;
  }

  if (event === "pull_request") {
    message = `🔀 PR ${payload.action} → #${payload.number}`;
  }

  const data = `data: ${JSON.stringify({
    message,
    time: new Date().toISOString()
  })}\n\n`;

  // broadcast to all clients
  clients.forEach(c => c.write(data));

  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
