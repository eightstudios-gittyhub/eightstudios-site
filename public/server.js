const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

const DB = path.join(__dirname, "visits.json");

function load() {
  if (!fs.existsSync(DB)) return [];
  return JSON.parse(fs.readFileSync(DB));
}

function save(data) {
  fs.writeFileSync(DB, JSON.stringify(data, null, 2));
}

// 📡 TRACK VISITORS
app.get("/track", (req, res) => {
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  const visit = {
    ip,
    time: new Date().toISOString(),
    userAgent: req.headers["user-agent"]
  };

  const data = load();
  data.push(visit);
  save(data);

  res.json({ ok: true });
});

// 📊 ADMIN API
app.get("/api/visits", (req, res) => {
  res.json(load().reverse());
});

app.listen(PORT, () => {
  console.log("Eight Studios running on port " + PORT);
});
