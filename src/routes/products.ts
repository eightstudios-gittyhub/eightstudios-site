import { Router } from "express";
import { products } from "../data/db";

const router = Router();

// GET PRODUCTS
router.get("/", (req, res) => {
  res.json(products);
});

export default router;
