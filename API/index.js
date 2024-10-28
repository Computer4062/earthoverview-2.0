import express from "express"

import countryCodesRouter from "./routes/CountryCodes.js"
import demonymsRouter from "./routes/Demonyms.js"
import isoCountryCodesRouter from "./routes/ISOCodes.js"
import countriesRouter from "./routes/Countries.js"
import currenciesRouter from "./routes/Currencies.js"
import capitalCitiesRouter from "./routes/CapitalCities.js"
import timezonesRouter from "./routes/Time.js"
import languagesRouter from "./routes/Languages.js"

const router = express.Router();

router.use("/countrycodes", countryCodesRouter);
router.use("/demonyms", demonymsRouter);
router.use("/isocodes", isoCountryCodesRouter);
router.use("/countries", countriesRouter);
router.use("/currencies", currenciesRouter);
router.use("/capitalcities", capitalCitiesRouter);
router.use("/time", timezonesRouter);
router.use("/languages", languagesRouter);

export default router;