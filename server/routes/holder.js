import express from "express";
import { getShare, createShare } from "../controller/holder.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/", auth, getShare);
router.post("/", auth, createShare);

export default router;
