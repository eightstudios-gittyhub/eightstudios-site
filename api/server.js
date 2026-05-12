const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const PORT = 3000;

// Trust proxy (important if hosted behind Cloudflare / hosting providers)
app.set("trust proxy", true);

// Serve your HTML site
app.use(express.static("public"));

// IP logging endpoint
app.get("/log-ip", (req, res) => {
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress;

  const userAgent = req.headers["user-agent"] || "unknown";
  const time = new Date().toISOString();

  const logEntry = `[${time}] IP: ${ip} | UA: ${userAgent}\n`;

  fs.appendFileSync(path.join(__dirname, "ip-log.txt"), logEntry);

  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});