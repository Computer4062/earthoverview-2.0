import express from "express"
import TimeConverter from "../controllers/TimeConverter.js"

const router = express.Router();

router.get("/converter/find", TimeConverter.findTimeIn);
router.get("/converter", TimeConverter.convertTime);

export default router;