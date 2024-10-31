import express from "express"
import TimeZones from "../controllers/TimeZones.js"

const router = express.Router();

router.get("/all", TimeZones.getAllTimeZones);
router.get("/find", TimeZones.findTimeZones);

export default router;