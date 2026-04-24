const http = require("http");

const WEBHOOK_URL = "https://discord.com/api/webhooks/1496959959529816274/DcR8uqlxQkHGPmVJL48q8yd665vUCACgwkP_xLFVw7uAURmnKPlkHAEAku452sBb3I7l";

const server = http.createServer(async (req, res) => {
  if (req.method === "POST" && req.url === "/visit") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      try {
        const data = JSON.parse(body);

        const payload = {
          content: `🌐 New Visitor!\nIP: ${req.socket.remoteAddress}\nPage: ${data.page}\nUser Agent: ${data.ua}`
        };

        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });

        res.writeHead(200);
        res.end("Logged");
      } catch (err) {
        res.writeHead(500);
        res.end("Error");
      }
    });

  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
