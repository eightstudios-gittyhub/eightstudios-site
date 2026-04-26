import { Router } from "express";
import { cart } from "../data/db";

const router = Router();

// CHECKOUT
router.post("/", (req, res) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  cart.length = 0; // clear cart

  res.json({
    message: "✅ Order placed!",
    total_paid: total
  });
});

export default router;
