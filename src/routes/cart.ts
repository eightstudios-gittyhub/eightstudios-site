import { Router } from "express";
import { products, cart } from "../data/db";

const router = Router();

// ADD TO CART
router.post("/", (req, res) => {
  const { id } = req.body;

  const product = products.find(p => p.id === id);

  if (product) {
    cart.push(product);
    res.json({ message: "Added to cart", cart });
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

// VIEW CART
router.get("/", (req, res) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  res.json({ cart, total });
});

export default router;
