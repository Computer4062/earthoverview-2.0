function addContinentFunc (continent, set_continents_list) {
	continents_list.push(continent);
	set_continents_list(array)
}

function removeContinentFunc (continent, set_continents_list) {
	let updated_cont_list = [];
	updated_cont_list = removeItem(continent, continents_list);
	return updated_cont_list;
}

function removeItem(continent, set_continents_list) {
	const index = continents_list.indexOf(continent);
	if (index !== -1) continents_list.splice(index, 1);

	return continents_list;
}

export {addContinentFunc, removeContinentFunc}