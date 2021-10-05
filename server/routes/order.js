import express from "express";
import { createOrder, getOrder } from "../controller/order.js";

const router = express.Router();

router.get("/order", getOrder);
router.post("/order", createOrder);

export default router;
