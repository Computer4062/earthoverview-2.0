function sortAscending(tableData, index){
	tableData.sort((a, b) => {
		if (a[index] < b[index]) {
			return -1;
		} else if (a[index] > b[index]) {
			return 1;
		} else {
			return 0;
		}
	});

	return tableData;
}

function sortDescending(tableData, index){
	tableData.sort((a, b) => {
		if (a[index] > b[index]) {
			return -1;
		} else if (a[index] < b[index]) {
			return 1;
		} else {
			return 0;
		}
	});

	return tableData;
}

export {sortAscending, sortDescending};