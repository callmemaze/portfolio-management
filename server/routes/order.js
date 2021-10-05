import express from "express";
import { createOrder } from "../controller/name.js";

const router = express.Router();

router.post("/order", createOrder);

export default router;
