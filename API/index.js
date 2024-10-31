import express from "express"

import timeConverterRouter from "./routes/TimeConverter.js"

const router = express.Router();

router.use("/time", timeConverterRouter);

export default router;