const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

const DB = path.join(__dirname, "visits.json");

// load visits
function getVisits() {
  if (!fs.existsSync(DB)) return [];
  return JSON.parse(fs.readFileSync(DB));
}

// save visits
function saveVisits(data) {
  fs.writeFileSync(DB, JSON.stringify(data, null, 2));
}

// 📡 TRACK VISITOR
app.get("/track", (req, res) => {
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  const visit = {
    ip,
    time: new Date().toISOString(),
    userAgent: req.headers["user-agent"]
  };

  const visits = getVisits();
  visits.push(visit);
  saveVisits(visits);

  res.json({ success: true });
});

// 📊 GET ALL VISITS (ADMIN API)
app.get("/api/visits", (req, res) => {
  res.json(getVisits().reverse());
});

app.listen(PORT, () => {
  console.log(`🔥 Tracker running on https://eightstudios.org:${PORT}`);
});
