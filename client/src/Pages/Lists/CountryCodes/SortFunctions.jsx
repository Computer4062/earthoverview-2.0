// functions for sorting the arrays
let continents = ["East Asia", "South Asia", "South East Asia", "Central Asia", "Western Asia", "Northern Africa", "Western Africa", "Eastern Africa", "Southern Africa", "Central Africa", "Europe", "Southern America", "Northern America", "Oceania"];

function SortArray(tableData, type){
	console.log(type);

	if(type === "asc_names") {
		tableData = sortAscendingNames(tableData);
	} else if(type === "des_names") {
		tableData = sortDescendingNames(tableData);
	} else if(type === "asc_codes") {
		tableData = sortAscendingCodes(tableData);
	} else if(type === "des_codes") {
		tableData = sortDescendingCodes(tableData);
	} else if(type === "conts") {
		tableData = sortToConts(tableData);
	}

	return tableData;
}

function sortAscendingNames(tableData){
	tableData.sort((a, b) => {
		if (a[0] < b[0]) {
			return -1;
		} else if (a[0] > b[0]) {
			return 1;
		} else {
			return 0;
		}
	});

	return tableData;
}

function sortDescendingNames(tableData){
	tableData.sort((a, b) => {
		if (a[0] > b[0]) {
			return -1;
		} else if (a[0] < b[0]) {
			return 1;
		} else {
			return 0;
		}
	});

	return tableData;
}

function sortAscendingCodes(tableData){
	tableData.sort((a, b) => {
		if (a[1] < b[1]) {
			return -1;
		} else if (a[1] > b[1]) {
			return 1;
		} else {
			return 0;
		}
	});

	return tableData;

}

function sortDescendingCodes(tableData){
	tableData.sort((a, b) => {
		if (a[1] > b[1]) {
			return -1;
		} else if (a[1] < b[1]) {
			return 1;
		} else {
			return 0;
		}
	})

	return tableData;

}

function sortToConts(tableData){
	let array = [];

	continents.forEach(continent => {
		tableData.forEach(arr => {
			if(arr[2] === continent)
				array.push(arr);
		});
	});

	return array;
}

export default SortArray;