import express from "express";
import cors from "cors";

import productsRoute from "./routes/products";
import cartRoute from "./routes/cart";
import checkoutRoute from "./routes/checkout";

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/products", productsRoute);
app.use("/api/cart", cartRoute);
app.use("/api/checkout", checkoutRoute);

// HOME
app.get("/", (req, res) => {
  res.send("🔥 TypeScript Store API Running");
});

// START SERVER
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
