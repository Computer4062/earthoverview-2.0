import express from "express"

import timeConverterRouter from "./routes/TimeConverter.js"
import timezonesRouter from "./routes/TimeZones.js";

const router = express.Router();

router.use("/time/converter", timeConverterRouter);
router.use("/time/timezones", timezonesRouter);

export default router;