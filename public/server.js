const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(express.static("public"));

const DB = "visits.json";

function load() {
  if (!fs.existsSync(DB)) return [];
  return JSON.parse(fs.readFileSync(DB));
}

function save(data) {
  fs.writeFileSync(DB, JSON.stringify(data, null, 2));
}

// 📡 TRACK VISITS
app.post("/track", (req, res) => {
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  const visit = {
    ip,
    time: new Date().toISOString(),
    userAgent: req.headers["user-agent"],
    page: req.body?.page || "unknown",
    event: req.body?.event || "open"
  };

  const data = load();
  data.push(visit);
  save(data);

  res.json({ ok: true });
});

// 📊 ADMIN API
app.get("/api/visits", (req, res) => {
  res.json(load());
});

app.listen(3000, () => {
  console.log("Eight Studios running");
});
