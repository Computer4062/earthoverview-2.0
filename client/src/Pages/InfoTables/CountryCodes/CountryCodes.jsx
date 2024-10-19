// initial table rendering
// table updating
// filtering to continents

import React, {useEffect, useState} from "react"

// DB imports
import country_codes from "../../../Assets/TableData/CountryCodes.js"
import countries from "../../../Assets/TableData/Countries.js"

// Components imports
import TitleCard from "../../../Components/InfoTables/TitleCard/TitleCard";
import EditPanel from "../../../Components/InfoTables/Search/EditPanel.jsx";
import FilterContBtns from "../../../Components/InfoTables/Filter/FilterContBtns.jsx";
import SortCard from "../../../Components/InfoTables/Sort/Sort.jsx";
import DownloadCard from "../../../Components/InfoTables/Download/DownloadCard.jsx";

// Additional functionality imports
import { addContinentFunc, removeContinentFunc } from "../../../Components/InfoTables/Filter/FilterFunctions.jsx"; // Filtering continents functions
import filterToDigitsFunction from "./FilterFunctions.jsx"; // Filtering digits functions
import SortArray from "./sortFunctions.jsx"; // Sorting the table data
import Downloader from "../../../Components/InfoTables/Download/Download.jsx";

// Style imports
import "../../../Components/InfoTables/Filter/FilterContCard.css"
import "../../../Components/InfoTables/Sort/Sort.css"
import "../../../Components/InfoTables/Download/DownloadCard.css"

// Update params
const UPDATE_CONTINENT = {update_continents: true, filter_digits: false, sort: false};
const FILTER_DIGITS = {update_continents: false, filter_digits: true, sort: false};
const SORT_ASCENDING_NAMES = {update_continents: false, filter_digits: false, sort: true, type: "asc_names"};
const SORT_DESCENDING_NAMES = {update_continents: false, filter_digits: false, sort: true, type: "des_names"};
const SORT_ASCENDING_CODES = {update_continents: false, filter_digits: false, sort: true, type: "asc_codes"};
const SORT_DESCENDING_CODES = {update_continents: false, filter_digits: false, sort: true, type: "des_codes"};
const SORT_TO_CONTINENTS = {update_continents: false, filter_digits: false, sort: true, type: "conts"};

let tableData = []; // Global variable that holds the table data
let continents_list = []; // Global variable that holds all the continents that are currently rendered

function CountryCodes(){
	const [tableContent, setTableContent] = useState(''); // Content of the table goes in here

	// Functionality for adding a continent to filter list
	const addCont = (cont) => {
		addContinentFunc(cont, continents_list);
		update(UPDATE_CONTINENT);
	}

	// Functionality for removing a continent from the filter list
	const removeCont = (cont) => {
		removeContinentFunc(cont, continents_list);
		update(UPDATE_CONTINENT);
	}

	// Code for updating continents
	function updateContinents(){
		let tableArray = [];
		if(continents_list.length !== 0)
		{
			continents_list.forEach(continent => {
				for(let i = 0; i < countries[continent].length; i++){
					tableArray.push([countries[continent][i], country_codes[countries[continent][i]], continent]);
				}
			});

		tableData = tableArray; // Update the table variable

		// If continents_list is empty render all continents
		} else {

			for(const continent in countries){
				countries[continent].forEach(country => {
					tableArray.push([country, country_codes[country], continent]);
				});
			}

			tableData = tableArray; // Update the table data variable
		}
	}

	// Code for filtering digits
	function updateFilterDigits(){
		const h_digit = document.querySelector("#filter-hundreds-digit-box").value;
		const t_digit = document.querySelector("#filter-tens-digit-box").value;
		const o_digit = document.querySelector("#filter-ones-digit-box").value;

		if(!((h_digit === "" || h_digit === "0") && (t_digit === "") && (o_digit === ""))){
			tableData = filterToDigitsFunction(
				tableData, 
				(h_digit !== "") ? h_digit : "-1",
				(t_digit !== "") ? t_digit : "-1", 
				(o_digit !== "") ? o_digit : "-1"
			);
		} else {
			update(UPDATE_CONTINENT);
		}
	}

	// Update the table when changes are made
	function update(params){
		// Update in this order:
		// 1. Filter to continents
		// 2. Add other filter styles
		// 3. Sort
		// 4. Render

		// 1. Filter to continents
		// Update continents even before filtering digits
		if(params["update_continents"] || params["filter_digits"])
		{
			updateContinents();
		}

		// 2. Other filter functionalities
		// Filter digits functionality
		if(params["filter_digits"])
		{
			updateFilterDigits();
		}

		// 3. Sorting the table
		if(params["sort"])
		{
			tableData = SortArray(tableData, params["type"]);
		}

		// 4. Render the table
		let i = 0;
		let htmlContent = "";
		tableData.forEach(arr => {
			i++;
			htmlContent += `
				<tr>
				<th scope="row">${i}</th>
				<td>${arr[0]}</td>
				<td>${arr[1]}</td>
				<td>${arr[2]}</td>
				</tr>
			`;
		});
		setTableContent(htmlContent);
	}

	// Initialize the table
	useEffect(() => {
		update(UPDATE_CONTINENT); // Write the table
		document.querySelector("#sort-to-conts-btn").checked = true; // Set the sorting mode as sort to continents
	}, []);

	return(
		<>
		<section class="px-4 py-5 my-5 text-center d-flex justify-content-center" id="title-banner">
				<TitleCard
					title="CountryCodes"
					description={[
						"Type in the name of a country or the country code of a country and press search!",
						"Use the sort and filter options for indepth research; or just to have fun!"
					]}
				/>

				<EditPanel />

			<section id="download-section" class="mt-3 mb-5 hide">
				<DownloadCard func={() => Downloader(tableData, "CountryCodes")} />
			</section>

			<section id="filter-options-section" className="hide">
				<div id="filter-options">
					<p class="options-heading">Filter Country Codes</p>

					<div id="options-section-1">
						<p class="options-subtitle">Filter to Country Code Value</p>

						<div class="input-group" data-bs-theme="dark">
							<input 
								type="number"
								min="0"
								max="9"
								placeholder="100's digit" 
								onChange={() => update(FILTER_DIGITS)}
								aria-label="hundreds value"
								class="form-control filterHundredsDigit digit-filter" 
								id="filter-hundreds-digit-box"
							/>
							<input 
								type="number" 
								min="0"
								max="9"
								placeholder="10's digit" 
								onChange={() => update(FILTER_DIGITS)}
								aria-label="tens value" 
								class="form-control filterTensDigit digit-filter" 
								id="filter-tens-digit-box"
							/>
							<input 
								type="number" 
								min="0"
								max="9"
								placeholder="1's digit" 
								onChange={() => update(FILTER_DIGITS)}
								aria-label="ones value" 
								class="form-control filterOnesDigit digit-filter" 
								id="filter-ones-digit-box"
							/>
						</div>
					</div>

					<div id="options-section-2" class="mt-3">
						<p class="options-subtitle">Filter to Continent</p>
						<div id="options-grid">
							<FilterContBtns label="South Asia" func1={() => addCont("South Asia")} func2={() => removeCont("South Asia")} id="South-Asia-selector" />
							<FilterContBtns label="SouthEast Asia" func1={() => addCont("South East Asia")} func2={() => removeCont("South East Asia")} id="SouthEast-Asia-selector" />
							<FilterContBtns label="East Asia" func1={() => addCont("East Asia")} func2={() => removeCont("East Asia")} id="East-Asia-selector" />
							<FilterContBtns label="Western Asia" func1={() => addCont("Western Asia")} func2={() => removeCont("Western Asia")} id="Western-Asia-selector" />
							<FilterContBtns label="Central Asia" func1={() => addCont("Central Asia")} func2={() => removeCont("Central Asia")} id="Central-Asia-selector" />

							<FilterContBtns label="Northern Africa" func1={() => addCont("Northern Africa")} func2={() => removeCont("Northern Africa")} id="Northern-Africa-selector" />
							<FilterContBtns label="Eastern Africa" func1={() => addCont("Eastern Africa")} func2={() => removeCont("Eastern Africa")} id="Eastern-Africa-selector" />
							<FilterContBtns label="Western Africa" func1={() => addCont("Western Africa")} func2={() => removeCont("Western Africa")} id="Western-Africa-selector" />
							<FilterContBtns label="Southern Africa" func1={() => addCont("Southern Africa")} func2={() => removeCont("Southern Africa")} id="Southern-Africa-selector" />
							<FilterContBtns label="Central Africa" func1={() => addCont("Central Africa")} func2={() => removeCont("Central Africa")} id="Central-Africa-selector" />

							<FilterContBtns label="Europe" func1={() => addCont("Europe")} func2={() => removeCont("Europe")} id="Europe-selector" />

							<FilterContBtns label="Nothern America" func1={() => addCont("Northern America")} func2={() => removeCont("Northern America")} id="Northern-America-selector" />
							<FilterContBtns label="Southern America" func1={() => addCont("Southern America")} func2={() => removeCont("Southern America")} id="Southern-America-selector" />
							
							<FilterContBtns label="Oceania" func1={() => addCont("Oceania")} func2={() => removeCont("Oceania")} id="Oceania-selector" />
						</div>
					</div>
				</div>
			</section>

			<section className="mb-5 hide" id="sort-options-section">
				<div id="sort-options">
					<p class="options-heading">Sort country names</p>
					<div>
						<SortCard id="ascending-names-btn" label="A → Z" func={() => update(SORT_ASCENDING_NAMES)} />
						<SortCard id="descending-names-btn" label="Z → A" func={() => update(SORT_DESCENDING_NAMES)} />
					</div>

					<p class="options-heading">Sort country codes</p>
					<div class="mt-3">
						<SortCard id="ascending-codes-btn" label="1 → 9" func={() => update(SORT_ASCENDING_CODES)} />
						<SortCard id="descending-codes-btn" label="9 → 1" func={() => update(SORT_DESCENDING_CODES)} />
					</div>

					<div class="mt-3">
						<SortCard id="sort-to-conts-btn" label="to continents" func={() => update(SORT_TO_CONTINENTS)} />
					</div>
				</div>
			</section>
		</section>

		<section>
			<table class="table table-striped" data-bs-theme="dark">
				<thead>
					<tr>
					<th scope="col">#</th>
					<th scope="col">Country</th>
					<th scope="col">Country Code</th>
					<th scope="col">Continent</th>
					</tr>
				</thead>
				<tbody id="countries-list-table-body" dangerouslySetInnerHTML={{__html: tableContent}}>

				</tbody>
			</table>
		</section>
		</>
	);
}

export default CountryCodes;