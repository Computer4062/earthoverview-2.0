// functions for sorting the arrays
let continents = ["East Asia", "South Asia", "South East Asia", "Central Asia", "Western Asia", "Northern Africa", "Western Africa", "Eastern Africa", "Southern Africa", "Central Africa", "Europe", "Southern America", "Northern America", "Oceania"];

function SortArray(tableData, type){
	if(type === "asc_names") {
		tableData = sortAscendingLetters(tableData, 0);
	} else if(type === "des_names") {
		tableData = sortDescendingLetters(tableData, 0);
	} else if(type === "asc_units") {
		tableData = sortAscendingLetters(tableData, 1);
	} else if(type === "des_units") {
		tableData = sortDescendingLetters(tableData, 1);
	} else if(type === "conts") {
		tableData = sortToConts(tableData, 5);
	}

	return tableData;
}

// Index is the point in the array where the element to sort is at



function sortToConts(tableData, index){
	let array = [];

	continents.forEach(continent => {
		tableData.forEach(arr => {
			if(arr[index] === continent)
				array.push(arr);
		});
	});

	return array;
}

export default SortArray;