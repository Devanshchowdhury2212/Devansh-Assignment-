import { Router } from "express";
import { getLatestData } from "../controllers/stats.controller.js";

const router = Router()

router.route("/").get(getLatestData)
export default router