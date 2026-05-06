const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let clients = [];

/* WebSocket connections */
wss.on("connection", (ws) => {
  clients.push(ws);
  ws.on("close", () => {
    clients = clients.filter(c => c !== ws);
  });
});

/* GitHub webhook */
app.post("/webhook", (req, res) => {
  const body = req.body;

  if (body?.pusher) {
    const update = {
      user: body.pusher.name,
      message: body.head_commit.message,
      time: new Date().toISOString()
    };

    clients.forEach(ws => {
      if (ws.readyState === 1) {
        ws.send(JSON.stringify(update));
      }
    });
  }

  res.sendStatus(200);
});

server.listen(3000, () => {
  console.log("🔥 Live server running");
});
