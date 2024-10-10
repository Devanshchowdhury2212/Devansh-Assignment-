import { Router } from "express";
import { getStandardDeviation } from "../controllers/deviation.controller.js";


const router = Router()

router.route("/").get(getStandardDeviation)
export default router