// Additional filter functionalities

function filterToDigitsFunction(tableData, h_digit, t_digit, o_digit){
	let array = [];

	if((h_digit !== "-1") && (t_digit === "-1") && (o_digit === "-1"))
	{
		for(let i = 0; i < tableData.length; i++)
		{
			let code = tableData[i][1].toString().padStart(3, '0');

			if(code[0] === h_digit)
				array.push(tableData[i]);
		}
	}
	else if((h_digit === "-1") && (t_digit !== "-1") && (o_digit === "-1"))
	{
		for(let i = 0; i < tableData.length; i++)
		{
			let code = tableData[i][1].toString().padStart(3, '0');

			if(code[1] === t_digit)
				array.push(tableData[i]);
		}
	}
	else if((h_digit === "-1") && (t_digit === "-1") && (o_digit !== "-1"))
	{
		for(let i = 0; i < tableData.length; i++)
		{
			let code = tableData[i][1].toString().padStart(3, '0');

			if(code[2] === o_digit)
				array.push(tableData[i]);
		}
	}
	else if((h_digit === "-1") && (t_digit !== "-1") && (o_digit !== "-1"))
	{
		for(let i = 0; i < tableData.length; i++)
		{
			let code = tableData[i][1].toString().padStart(3, '0');

			if((code[1] === t_digit) && (code[2] === o_digit))
				array.push(tableData[i]);
		}
	}
	else if((h_digit !== "-1") && (t_digit !== "-1") && (o_digit === "-1"))
	{
		for(let i = 0; i < tableData.length; i++)
		{
			let code = tableData[i][1].toString().padStart(3, '0');

			if((code[0] === h_digit) && (code[1] === t_digit))
				array.push(tableData[i]);
		}
	}
	else if((h_digit !== "-1") && (t_digit !== "-1") && (o_digit !== "-1"))
	{
		for(let i = 0; i < tableData.length; i++)
		{
			let code = tableData[i][1].toString().padStart(3, '0');

			if((code[0] === h_digit) && (code[1] === t_digit) && (code[2] === o_digit))
				array.push(tableData[i]);
		}
	}

	return array;
}

export default filterToDigitsFunction;