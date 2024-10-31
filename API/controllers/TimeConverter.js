import express from "express"
import moment_timezone from "moment-timezone"
import moment from "moment"
import timezonesJSON from "../models/TimeZones.js"

const router = express.Router();

// Find the time of another country
function findTimeIn(req, res) {
	try
	{
		const { timezone, format } = req.query;

		if(timezone) {
				// Check if timezone is valid
				let valid = false;
				const inputTimeZone = decodeURIComponent(timezone).replace(/\s/g, '').toLowerCase();
				let timezoneEdit = "";

				for(const countryName in timezonesJSON)
				{
					for(let i = 0; i < timezonesJSON[countryName].length; i++)
					{
						if(timezonesJSON[countryName][i].replace(/\s/g, '').toLowerCase() === inputTimeZone)
						{
							timezoneEdit = timezonesJSON[countryName][i];
							valid = true;
							break;
						}
					}

					if(valid) break;
				}

				if(valid)
				{
					if(format === "12hour")
					{
						const time = moment().tz(timezoneEdit).format('hh:mmA');

						res.status(200).json({
							error: "false", 
							msg: "Successful", 
							data: {time: time}
						});

					} else if(format === "24hour") {
						const time = moment().tz(timezoneEdit).format('HH:mm');

						res.status(200).json({
							error: "false",
							msg: "Successful",
							data: {time: time}
						});

					} else {
						res.status(404).json({error: "true", msg: "Invalid format... specify 12hour or 24hour format query paramter(format=12hour)"});
					}
				}
				else
				{
					res.status(404).json({error: "true", msg: "Unrecognized timezone..."});
				}
		}

	} catch(error) {
		console.error(error);
		res.status(500).json({error: "true", msg: "Something went wrong..."});
	}
}

// Converting time between 2 countries
function convertTime(req, res) {
	const {timezone1, timezone2, time1, format } = req.query;

	// Check if timezones are valid
	const inputTimeZone1 = decodeURIComponent(timezone1).replace(/\s/g, '').toLowerCase();
	const inputTimeZone2 = decodeURIComponent(timezone2).replace(/\s/g, '').toLowerCase();

	let timezone1found = false;
	let timezone2found = false;

	let timezone1edit = "";
	let timezone2edit = "";

	for(const countryName in timezonesJSON)
	{
		for(let i = 0; i < timezonesJSON[countryName].length; i++)
		{
			if(timezonesJSON[countryName][i].replace(/\s/g, '').toLowerCase() === inputTimeZone1)
			{
				timezone1edit = timezonesJSON[countryName][i];
				timezone1found = true;
				break;
			}
			else if(timezonesJSON[countryName][i].replace(/\s/g, '').toLowerCase() === inputTimeZone2)
			{
				timezone2edit = timezonesJSON[countryName][i];
				timezone2found = true;
				break;
			}

			if(timezone1found && timezone2found) break;
		}
	}

	if(!timezone1found && !timezone2found) res.status(404).json({error: "true", msg: "Unrecognized timezone1 and timezone2..."});
	else if(!timezone1found) res.status(404).json({error: "true", msg: "Unrecognized timezone1..."});
	else if(!timezone2found) res.status(404).json({error: "true", msg: "Unrecognized timezone2..."});

	if(timezone1found && timezone2found)
	{
		if(format === "12hour")
		{
			const timeMoment = moment.tz(time1, 'hh:mmA', timezone1edit);
			const convertedTime = timeMoment.tz(timezone2edit).format('hh:mmA');

			if(convertedTime !== "Invalid date")
				res.status(200).json({error: "false", msg: "Successful", data: {time: convertedTime}});
			else
				res.status(404).json({error: "true", msg: "Invalid time..."});
		}
		else if(format === "24hour")
		{
			const timeMoment = moment.tz(time1, 'hh:mm', timezone1edit);
			const convertedTime = timeMoment.tz(timezone2edit).format('hh:mm');

			if(convertedTime !== "Invalid date")
				res.status(200).json({error: "false", msg: "Successful", data: {time: convertedTime}});
			else
				res.status(404).json({error: "true", msg: "Invalid time..."});
		}
		else
		{
			res.status(404).json({error: "true", msg: "Invalid format... specify 12hour or 24hour format query paramter(format=12hour)"});
		}
	}
}

export default {findTimeIn, convertTime};