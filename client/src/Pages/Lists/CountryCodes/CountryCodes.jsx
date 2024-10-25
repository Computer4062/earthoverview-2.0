// initial table rendering
// table updating
// filtering to continents

import React, {useEffect, useState} from "react"

// Model imports
import country_codes from "../../../Assets/ListData/CountryCodes.js"
import countries from "../../../Assets/ListData/Countries.js"

// Components imports
import TitleCard from "../../../Components/Lists Components/TitleCard/TitleCard";
import EditPanel from "../../../Components/Lists Components/Search/EditPanel.jsx";
import SortCard from "../../../Components/Lists Components/Sort/Sort.jsx";
import DownloadCard from "../../../Components/Lists Components/Download/DownloadCard.jsx";
import FilterContCard from "../../../Components/Lists Components/Filter/FilterContCard.jsx";
import NavBar from "../../../Components/NavBar/NavBar.jsx"

// Additional functionality imports
import filterToDigitsFunction from "./FilterFunctions.jsx"; // Filtering digits functions
import SortArray from "./sortFunctions.jsx"; // Sorting the table data
import Downloader from "../../../Components/Lists Components/Download/Download.jsx";

// Style imports
import "../../../Components/Lists Components/Filter/FilterContCard.css"
import "../../../Components/Lists Components/Sort/Sort.css"
import "../../../Components/Lists Components/Download/DownloadCard.css"
import "../../../Components/Lists Components/Table/Table.css"
import "./CountryCodes.css"

// Update params
const UPDATE_CONTINENT = {update_continents: true, filter_digits: false, sort: false};
const FILTER_DIGITS = {update_continents: false, filter_digits: true, sort: false};
const SORT_ASCENDING_NAMES = {update_continents: false, filter_digits: false, sort: true, type: "asc_names"};
const SORT_DESCENDING_NAMES = {update_continents: false, filter_digits: false, sort: true, type: "des_names"};
const SORT_ASCENDING_CODES = {update_continents: false, filter_digits: false, sort: true, type: "asc_codes"};
const SORT_DESCENDING_CODES = {update_continents: false, filter_digits: false, sort: true, type: "des_codes"};
const SORT_TO_CONTINENTS = {update_continents: false, filter_digits: false, sort: true, type: "conts"};

function CountryCodes(){
	const [tableContent, setTableContent] = useState(''); // Content of the table goes in here
	const [tableArray, setTableArray] = useState([]); // variable that holds the table data
	const [continentsList, setContinentsList] = useState([]); // variable that holds all the continents that are currently rendered

	// List updates
	const [sortToCountryName, setSortToCountryName] = useState(false);
	const [sortToCodes, setSortToCodes] = useState(false);
	const [filterToContinents, setFilterToContinents] = useState(false);
	const [filterToDigits, setFilterToDigits] = useState(false);

	// Code for updating continents
	function filterContinents(){
		let tableArray = [];
		if(continentsList.length !== 0)
		{
			continentsList.forEach(continent => {
				for(let i = 0; i < countries[continent].length; i++){
					tableArray.push([countries[continent][i], country_codes[countries[continent][i]], continent]);
				}
			});

		return tableArray; // Update the table variable

		// If continents_list is empty render all continents
		} else {

			for(const continent in countries){
				countries[continent].forEach(country => {
					tableArray.push([country, country_codes[country], continent]);
				});
			}

			return tableArray; // Update the table data variable
		}
	}

	// Code for filtering digits
	function updateFilterDigits(){
		const h_digit = document.querySelector("#filter-hundreds-digit-box").value;
		const t_digit = document.querySelector("#filter-tens-digit-box").value;
		const o_digit = document.querySelector("#filter-ones-digit-box").value;

		if(!((h_digit === "" || h_digit === "0") && (t_digit === "") && (o_digit === ""))){
			let array = filterToDigitsFunction(
				tableArray, 
				(h_digit !== "") ? h_digit : "-1",
				(t_digit !== "") ? t_digit : "-1", 
				(o_digit !== "") ? o_digit : "-1"
			);

			return array;
		// If no input then just refresh
		} else {
			return "refresh";
		}
	}

	// Update the table when changes are made
	function update(){
		// 1. Filter to continents
		if(filterToContinents){
			setTableArray(filterContinents());
		}

		// 2. Apply other filter options
		// Filtering to country code digits
		if(filterToDigits){
			let array = updateFilterDigits();
			if(array !== "refresh")
			{
				setTableArray(array);
			}
		}

		// 4. Render the table
		let i = 0;
		let htmlContent = "";
		tableArray.forEach(arr => {
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
		setFilterToContinents(true);
		update(); // Write the table
		document.querySelector("#sort-to-conts-btn").checked = true; // Set the sorting mode as sort to continents
	}, []);

	return(
		<>
		<NavBar />

		<section class="px-4 py-5 my-2 text-center" id="title-banner">
				<TitleCard
					title="Country Codes"
					description={[
						"Download a list of 196 phone codes and their countries"
					]}
				/>

				<EditPanel />
		</section>

		<div className="d-flex justify-content-center">
			<section id="download-section" class="mt-3 mb-5 hide">
				<DownloadCard func={() => Downloader(tableArray, "CountryCodes")} />
			</section>
		</div>

		<div className="d-flex justify-content-center">
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
								class="filterHundredsDigit digit-filter filter-text-box mb-1"
								id="filter-hundreds-digit-box"
							/>
							<input 
								type="number" 
								min="0"
								max="9"
								placeholder="10's digit" 
								onChange={() => update(FILTER_DIGITS)}
								aria-label="tens value" 
								class="filterTensDigit digit-filter filter-text-box mb-1"
								id="filter-tens-digit-box"
							/>
							<input 
								type="number" 
								min="0"
								max="9"
								placeholder="1's digit" 
								onChange={() => update(FILTER_DIGITS)}
								aria-label="ones value" 
								class="filterOnesDigit digit-filter filter-text-box mb-1"
								id="filter-ones-digit-box"
							/>
						</div>
					</div>

					<div id="options-section-2" class="mt-3">
					</div>
				</div>
			</section>
		</div>

		<div className="d-flex justify-content-center">
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

					<div class="mt-4">
						<SortCard id="sort-to-conts-btn" label="to continents" func={() => update(SORT_TO_CONTINENTS)} />
					</div>
				</div>
			</section>
		</div>

		<section class="list-table-section">
			<table class="list-table" data-bs-theme="dark">
				<thead>
					<tr>
					<th scope="col" style={{width: "33px"}}>#</th>
					<th scope="col" style={{width: "250px"}}>Country</th>
					<th scope="col" style={{width: "200px"}}>Country Code</th>
					<th scope="col" style={{width: "200px"}}>Continent</th>
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