import express from "express";
import { getName } from "../controller/name.js";

const router = express.Router();

router.get("/", getName);

export default router;
