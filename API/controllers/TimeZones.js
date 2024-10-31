import timezonesJSON from "../models/TimeZones.js";

// Return all the timezones
function getAllTimeZones(req, res) {
	res.status(200).json({error: "false", msg: "Successful", data: {timezones: timezonesJSON}});
}

// Return a single country or timezone
function findTimeZones(req, res) {
	try{
		const { country } = req.query;
		// Return the timezone of a country
		if(country){
			const searchItem = decodeURIComponent(country).replace(/\s/g, '').toLowerCase();
			let found = false;
			for(const countryName in timezonesJSON){
				if(countryName.replace(/\s/g, '').toLowerCase() === searchItem)
				{
					found = true;
					res.status(200).json({
						error: "false",
						msg: "Successful",
						data: {timezones: timezonesJSON[countryName]}
					});
					break;
				}
			}
			if(!found) res.status(404).json({error: "true", msg: "Invalid country name... nothing found"});
		}
	} catch(error) {
		console.error(error);
		res.status(500).json({error: "true", msg: "Something went wrong..."});
	}
};

export default {getAllTimeZones, findTimeZones};