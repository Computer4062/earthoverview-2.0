import express from "express"
import TimeConverter from "../controllers/TimeConverter.js"

const router = express.Router();

router.get("/", TimeConverter.convertTime);
router.get("/find", TimeConverter.findTimeIn);

export default router;