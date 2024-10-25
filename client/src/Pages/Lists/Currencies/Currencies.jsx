// initial table rendering
// table updating
// filtering to continents

import React, {useEffect, useState} from "react"

// Model imports
import currencies from "../../../Assets/ListData/Currencies.js"
import countries from "../../../Assets/ListData/Countries.js"

// Components imports
import TitleCard from "../../../Components/Lists Components/TitleCard/TitleCard";
import EditPanel from "../../../Components/Lists Components/Search/EditPanel.jsx";
import SortCard from "../../../Components/Lists Components/Sort/Sort.jsx";
import DownloadCard from "../../../Components/Lists Components/Download/DownloadCard.jsx";
import FilterContCard from "../../../Components/Lists Components/Filter/FilterContCard.jsx";
import NavBar from "../../../Components/NavBar/NavBar.jsx"

// Additional functionality imports
//import filterToDigitsFunction from "./FilterFunctions.jsx"; // Filtering digits functions
import SortArray from "./sortFunctions.jsx"; // Sorting the table data
import Downloader from "../../../Components/Lists Components/Download/Download.jsx";

// Style imports
import "../../../Components/Lists Components/Filter/FilterContCard.css"
import "../../../Components/Lists Components/Sort/Sort.css"
import "../../../Components/Lists Components/Download/DownloadCard.css"
import "../../../Components/Lists Components/Table/Table.css"
import "./Currencies.css"

// Update params
const UPDATE_CONTINENT = {update_continents: true, filter_units: false, sort: false};
const FILTER_UNITS = {update_continents: true, filter_units: true, sort: false};
const SORT_ASCENDING_NAMES = {update_continents: false, sort: true, type: "asc_names"};
const SORT_DESCENDING_NAMES = {update_continents: false, sort: true, type: "des_names"};
const SORT_ASCENDING_UNITS = {update_continents: false, sort: true, type: "asc_units"};
const SORT_DESCENDING_UNITS = {update_continents: false, sort: true, type: "des_units"};
const SORT_TO_CONTINENTS = {update_continents: false, sort: true, type: "conts"};

let tableData = []; // Global variable that holds the table data
let continents_list = []; // Global variable that holds all the continents that are currently rendered

// parameters that goes to the update function
let filterUnits = false;

function Currencies(){
	const [tableContent, setTableContent] = useState(''); // Content of the table goes in here
	const [continentsList, setContinentsList] = useState([]);

	// Code for updating continents
	// Update continents function also serves as the init function
	function updateContinents(){
		let tableArray = [];
		if(continents_list.length !== 0)
		{
			continents_list.forEach(continent => {
				for(let i = 0; i < countries[continent].length; i++){
					let country = countries[continent][i];
					tableArray.push([
						country, 
						currencies[country].unit, 
						currencies[country].currency,
						currencies[country].symbol,
						currencies[country].code,
						continent
					]);
				}
			});

		tableData = tableArray; // Update the table variable

		// If continents_list is empty render all continents
		} else {

			for(const continent in countries){
				countries[continent].forEach(country => {
					tableArray.push([
						country, 
						currencies[country].unit, 
						currencies[country].currency,
						currencies[country].symbol,
						currencies[country].code,
						continent
					]);
				});
			}

			tableData = tableArray; // Update the table data variable
		}
	}

	// Function for filtering currency units
	function filterToUnit(){
		// Iterate through tableArray and get the elements with a specific currency unit
		let unitToFind = document.querySelector(".filter-units-box").value;
		if(unitToFind !== "")
		{
			let array = [];
			let unit = unitToFind.replace(/\s/g, '').toLowerCase();

			tableData.forEach(item => {
				// item[1] is the currency code
				if(item[1].replace(/\s/g, '').toLowerCase() === unit)
				{
					array.push(item);
				}
			});

			tableData = array;
			filterUnits = true;
		}
		else
		{
			filterUnits = false;
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
		if(params["update_continents"])
		{
			updateContinents();
		}

		// 2. Other filter functionalities
		// Filter units
		if(params["filter_units"] || filterUnits)
		{
			filterToUnit();
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
				<td>${arr[3]}</td>
				<td>${arr[4]}</td>
				<td>${arr[5]}</td>
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
		<NavBar />
		<section class="px-4 py-5 my-2 text-center" id="title-banner">
				<TitleCard
					title="Currencies"
					description={[
						"Download a list of 196 phone codes and their countries"
					]}
				/>

				<EditPanel />
		</section>
		
		<div className="d-flex justify-content-center">
			<section id="download-section" class="mt-3 mb-5 hide">
				<DownloadCard func={() => Downloader(tableData, "CountryCodes")} />
			</section>
		</div>

		<div className="d-flex justify-content-center">
			<section id="filter-options-section" className="hide">
				<div id="filter-options">
					<p class="options-heading">Filter Currencies</p>

					<div>
						<p class="options-subtitle">Filter to units</p>
						<input 
							placeholder="Enter a currency unit..."
							onChange={() => update(FILTER_UNITS)}
							aria-label="hundreds value"
							class="filter-units-box mb-1"
						/>
					</div>

					<div class="mt-3">
						<FilterContCard updateFunc={() => update(UPDATE_CONTINENT)} continentsChosen={continentsList} continentsChosenChanger={setContinentsList} />
					</div>
				</div>
			</section>
		</div>

		<div className="d-flex justify-content-center">
			<section className="mb-5 hide" id="sort-options-section">
				<div id="sort-options">
					<p class="options-heading">Sort country names</p>
					<div>
						<SortCard id="ascending-letters-1" label="A → Z" func={() => update(SORT_ASCENDING_NAMES)} />
						<SortCard id="descending-letters-1" label="Z → A" func={() => update(SORT_DESCENDING_NAMES)} />
					</div>

					<p class="options-heading">Sort currency units</p>
					<div class="mt-3">
						<SortCard id="ascending-letters-2" label="A → Z" func={() => update(SORT_ASCENDING_UNITS)} />
						<SortCard id="descending-letters-2" label="Z → A" func={() => update(SORT_DESCENDING_UNITS)} />
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
					<th scope="col" style={{width: "200px"}}>Unit</th>
					<th scope="col" style={{width: "200px"}}>Name</th>
					<th scope="col" style={{width: "150px"}}>Symbol</th>
					<th scope="col" style={{width: "150px"}}>Code</th>
					<th scope="col" style={{width: "min-content"}}>Continent</th>
					</tr>
				</thead>
				<tbody id="countries-list-table-body" dangerouslySetInnerHTML={{__html: tableContent}}>

				</tbody>
			</table>
		</section>
		</>
	);
}

export default Currencies;