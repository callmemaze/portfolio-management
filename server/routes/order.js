import express from "express";
import { createOrder, getOrder } from "../controller/order.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/order", auth, getOrder);
router.post("/order", auth, createOrder);

export default router;
