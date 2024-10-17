import { useState, useEffect } from "react";

import DownloadCard from "../../../Components/InfoTables/Download/DownloadCard.jsx";
import "../../../Components/InfoTables/Sort/Sort.css"
import "../../../Components/InfoTables/Search/Search.css"
import "../../../Components/InfoTables/Filter/FilterContCard.jsx"

import countryCodes from "../../../Assets/TableData/CountryCodes.js"
import countries from "../../../Assets/TableData/Countries.js"

// Initialize data
function initData(){
	let array = [];

	for(const continent in countries){
		countries[continent].forEach(country => {
			array.push([country, countryCodes[country], continent]);
		});
	}

	return array;
}

const completedArray = initData();
let tableArray = completedArray;

// Order of layers
// 1. Filtering to continents
// 2. Filtering to other things
// 3. Sorting

// Filter continents
let continents = ["Asia", "East Asia", "South Asia", "South East Asia", "Central Asia", "Western Asia", "Africa", "Northern Africa", "Western Africa", "Eastern Africa", "Southern Africa", "Central Africa", "Europe", "America", "Southern America", "Northern America", "Oceania"];
let continentsToRender = [];

// Add continent
function addContinent(continent)
{
	if(continent === continents[0])
	{
		continentsToRender.push(continents[1]);
		continentsToRender.push(continents[2]);
		continentsToRender.push(continents[3]);
		continentsToRender.push(continents[4]);
		continentsToRender.push(continents[5]);
	}

	filterToContinent();
}

// Remove continent
function removeContinent(continent)
{
  const index = continentsToRender.indexOf(continent);
  if (index !== -1) continentsToRender.splice(index, 1);

  filterToContinent();
}

function filterToContinent(){
	tableArray = [];

	if(continentsToRender.size !== 0)
	{
		continentsToRender.forEach(continent => {
			completedArray.forEach(subArray => {
				if(subArray[2] === continent)
				{
					tableArray.push(subArray);
				}
			})
		});
	}
	else
	{
		tableArray = initData();
	}

	console.log(tableArray);
}

// Function to update the table

function CountryCodes(){
	
	// Visibility of edit options
	const [sortVisibility, setSortVisibility] = useState(false);
	const [filterVisibility, setFilterVisibility] = useState(false);
	const [downloadCardVisibility, setDownloadCardVisibility] = useState(false);
	const [searchResultsVisibility, setSearchResultsVisibility] = useState(false);

	return(
		<div>
		<section>
			<div class="px-4 py-5 my-5 text-center" id="title-banner">
				<div class="loader-symbol spinner-border hidden my-5" role="status">
					<span class="visually-hidden">Loading...</span>
				</div>

				<h1 class="display-5 title">Country Codes</h1>
				<p>Type in the name of a country or the country code of a country and press search!</p>
				<p>Use the sort and filter options for indepth research; or just to have fun!</p>
			</div>

			<div class="input-group mb-3" data-bs-theme="dark">
				<button id="filter-btn" onClick={() => setFilterVisibility(!filterVisibility)} class="btn btn-outline-light" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16"><path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/></svg></button>
				<button id="sort-btn" onClick={() => setSortVisibility(!sortVisibility)} class="btn btn-outline-light" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-up" viewBox="0 0 16 16"><path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.5.5 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/></svg></button>
				<button id="download-btn" onClick={() => setDownloadCardVisibility(!downloadCardVisibility)} class="btn btn-outline-light download-sec-btn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/></svg></button>
				<input id="search-box" class="form-control border-white" type="search" placeholder="Search by country or calling code..." aria-describedby="search box" aria-label="Upload" />
			</div>
		</section>

		<section class="download-section mt-3 mb-5" style={{display: downloadCardVisibility ? 'block' : 'none'}}>
			<DownloadCard />
		</section>

		<section class="mb-5" id="filter-options-section" style={{display: filterVisibility ? 'block' : 'none'}}>
			<div id="filter-options">
				<p class="options-heading">Filter Country Codes</p>

				<div id="options-section-1">
					<p class="options-subtitle">Filter to Country Code Value</p>

					<div class="input-group" data-bs-theme="dark">
						<input type="text" placeholder="100's digit" aria-label="hundreds value" class="form-control filterHundredsDigit digit-filter" />
						<input type="text" placeholder="10's digit" aria-label="tens value" class="form-control filterTensDigit digit-filter" />
						<input type="text" placeholder="1's digit" aria-label="ones value" class="form-control filterOnesDigit digit-filter" />
					</div>
				</div>

				<div id="options-section-2" class="mt-3">
					<p class="options-subtitle">Filter to Continent</p>
					<div id="options-grid">
						<div class="input-group" id="Asia-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 asiaCheckBox Asia" onChange={() => addContinent(continents[0])} type="checkbox" value="asia" aria-label="Radio button for following text Asia" />
							<label class="form-check-label">Asia</label>
						</div>
						</div>
						
						<div class="input-group" id="South-Asia-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 southAsiaCheckBox Asia" type="checkbox" value="" aria-label="Radio button for following text South Asia" />
							<label class="form-check-label">South Asia</label>
						</div>
						</div>
						
						<div class="input-group" id="SouthEast-Asia-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 southEastAsiaCheckBox Asia" type="checkbox" value="" aria-label="Radio button for following text SouthEast Asia" />
							<label class="form-check-label">SouthEast Asia</label>
						</div>
						</div>
						
						<div class="input-group" id="East-Asia-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 eastAsiaCheckBox Asia" type="checkbox" value="" aria-label="Radio button for following text East Asia" />
							<label class="form-check-label">East Asia</label>
						</div>
						</div>
						
						<div class="input-group" id="Western-Asia-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 westernAsiaCheckBox Asia" type="checkbox" value="" aria-label="Radio button for following text Western Asia" />
							<label class="form-check-label">Western Asia</label>
						</div>
						</div>
						
						<div class="input-group" id="Central-Asia-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 centralAsiaCheckBox Asia" type="checkbox" value="" aria-label="Radio button for following text Central Asia" />
							<label class="form-check-label">Central Asia</label>
						</div>
						</div>

						<div class="input-group" id="Africa-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 africaCheckBox Africa" type="checkbox" value="" aria-label="Radio button for following text Africa" />
							<label class="form-check-label">Africa</label>
						</div>
						</div>
						
						<div class="input-group" id="Northern-Africa-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 northernAfricaCheckBox Africa" type="checkbox" value="" aria-label="Radio button for following text Northern Africa" />
							<label class="form-check-label">Northern Africa</label>
						</div>
						</div>
						
						<div class="input-group" id="Eastern-Africa-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 easternAfricaCheckBox Africa" type="checkbox" value="" aria-label="Radio button for following text Eastern Africa" />
							<label class="form-check-label">Eastern Africa</label>
						</div>
						</div>
						
						<div class="input-group" id="Western-Africa-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 westernAfricaCheckBox Africa" type="checkbox" value="" aria-label="Radio button for following text Western Africa" />
							<label class="form-check-label">Western Africa</label>
						</div>
						</div>
						
						<div class="input-group" id="Southern-Africa-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 southernAfricaCheckBox Africa" type="checkbox" value="" aria-label="Radio button for following text Southern Africa" />
							<label class="form-check-label">Southern Africa</label>
						</div>
						</div>
						
						<div class="input-group" id="Central-Africa-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 centralAfricaCheckBox Africa" type="checkbox" value="" aria-label="Radio button for following text Central Africa" />
							<label class="form-check-label">Central Africa</label>
						</div>
						</div>

						
						<div class="input-group" id="Europe-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 europeCheckBox" type="checkbox" value="" aria-label="Radio button for following text Europe" />
							<label class="form-check-label">Europe</label>
						</div>
						</div>

						
						<div class="input-group" id="America-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 americaCheckBox America" type="checkbox" value="" aria-label="Radio button for following text America" />
							<label class="form-check-label">America</label>
						</div>
						</div>
						
						<div class="input-group" id="Northern-America-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 northernAmericaCheckBox America" type="checkbox" value="" aria-label="Radio button for following text Northern America" />
							<label class="form-check-label">Northern America</label>
						</div>
						</div>
						
						<div class="input-group" id="Southern-America-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 southernAmericaCheckBox America" type="checkbox" value="" aria-label="Radio button for following text Southern America" />
							<label class="form-check-label">Southern America</label>
						</div>
						</div>

						
						<div class="input-group" id="Oceania-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 oceaniaCheckBox Oceania" type="checkbox" value="" aria-label="Radio button for following text Oceania" />
							<label class="form-check-label">Oceania</label>
						</div>
						</div>
					</div>


					<div id="options-selector-grid">
						<div class="dropdown">
						<button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Asia
						</button>
						<ul class="dropdown-menu">
							<li>
								<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 asiaCheckBox Asia" type="checkbox" value="" aria-label="Radio button for following text Asia" />
									<label class="form-check-label">Asia</label>
								</div>
								</div>
							</li>
							
							<li>
							<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 eastAsiaCheckBox Asia" type="checkbox" value="" aria-label="Radio button for following text East Asia" />
									<label class="form-check-label">East Asia</label>
								</div>
								</div>
							</li>
							
							<li>
							<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 southEastAsiaCheckBox Asia" type="checkbox" value="" aria-label="Radio button for following text SouthEast Asia" />
									<label class="form-check-label">SouthEast Asia</label>
								</div>
								</div>
							</li>
							
							<li>
							<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 southAsiaCheckBox Asia" type="checkbox" value="" aria-label="Radio button for following text South Asia" />
									<label class="form-check-label">South Asia</label>
								</div>
								</div>
							</li>
							
							<li>
							<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 westernAsiaCheckBox Asia" type="checkbox" value="" aria-label="Radio button for following text Western Asia" />
									<label class="form-check-label">Western Asia</label>
								</div>
								</div>
							</li>
							
							<li>
							<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 centralAsiaCheckBox Asia" type="checkbox" value="" aria-label="Radio button for following text Central Asia" />
									<label class="form-check-label">Central Asia</label>
								</div>
								</div>
							</li>
						</ul>
						</div>

						<div class="dropdown">
						<button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Africa
						</button>
						<ul class="dropdown-menu">
							<li>
								<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 africaCheckBox Africa" type="checkbox" value="" aria-label="Radio button for following text Africa" />
									<label class="form-check-label">Africa</label>
								</div>
								</div>
							</li>
							
							<li>
							<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 northernAfricaCheckBox Africa" type="checkbox" value="" aria-label="Radio button for following text Northern Africa" />
									<label class="form-check-label">Northern Africa</label>
								</div>
								</div>
							</li>
							
							<li>
							<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 easternAfricaCheckBox Africa" type="checkbox" value="" aria-label="Radio button for following text Eastern Africa" />
									<label class="form-check-label">Eastern Africa</label>
								</div>
								</div>
							</li>
							
							<li>
							<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 southernAfricaCheckBox Africa" type="checkbox" value="" aria-label="Radio button for following text Southern Africa" />
									<label class="form-check-label">Southern Africa</label>
								</div>
								</div>
							</li>
							
							<li>
							<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 westernAfricaCheckBox Africa" type="checkbox" value="" aria-label="Radio button for following text Western Africa" />
									<label class="form-check-label">Western Africa</label>
								</div>
								</div>
							</li>
							
							<li>
							<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 centralAfricaCheckBox Africa" type="checkbox" value="" aria-label="Radio button for following text Central Africa" />
									<label class="form-check-label">Central Africa</label>
								</div>
								</div>
							</li>
						</ul>
						</div>

						<div class="dropdown">
						<button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Europe
						</button>
						<ul class="dropdown-menu">
							<li>
								<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 europeCheckBox" type="checkbox" value="" aria-label="Radio button for following text Europe" />
									<label class="form-check-label">Europe</label>
								</div>
								</div>
							</li>
						</ul>
						</div>

						<div class="dropdown">
						<button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							America
						</button>
						<ul class="dropdown-menu">
							<li>
								<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 americaCheckBox" type="checkbox" value="" aria-label="Radio button for following text America" />
									<label class="form-check-label">America</label>
								</div>
								</div>
							</li>
							<li>
								<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 northernAmericaCheckBox" type="checkbox" value="" aria-label="Radio button for following text Northern America" />
									<label class="form-check-label">Northern America</label>
								</div>
								</div>
							</li>
							<li>
								<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 southernAmericaCheckBox America" type="checkbox" value="" aria-label="Radio button for following text Sourthern America" />
									<label class="form-check-label">Sourthern America</label>
								</div>
								</div>
							</li>
						</ul>
						</div>

						<div class="dropdown">
						<button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Oceania
						</button>
						<ul class="dropdown-menu">
							<li>
								<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 oceaniaCheckBox" type="checkbox" value="" aria-label="Radio button for following text Oceania" />
									<label class="form-check-label">Oceania</label>
								</div>
								</div>
							</li>
						</ul>
						</div>
					</div>
				</div>

			</div>
		</section>

		<section class="mb-5" id="sort-options-section" style={{display: sortVisibility ? 'block' : 'none'}}>
			<div id="sort-options">
				<p class="options-heading">Sort Calling Codes</p>
				<div>
					<p class="options-subtitle">Sort Country names</p>

					<div class="input-group" data-bs-theme="dark">
					<div class="input-group-text">
						<input id="ascendingNamesBtn" class="form-check-input mt-0" type="radio" name="sortBtnGrp-1" value="" aria-label="Radio button for following text: Z to A" />
						<label class="form-check-label">A - Z</label>
					</div>
					</div>

					<div class="input-group" data-bs-theme="dark">
					<div class="input-group-text">
						<input id="descendingNamesBtn" class="form-check-input mt-0" type="radio" name="sortBtnGrp-1" value="" aria-label="Radio button for following text: Z to A" />
						<label class="form-check-label">Z - A</label>
					</div>
					</div>
				</div>

				<div class="mt-3">
					<p class="options-subtitle">Sort Country Codes</p>
					<div class="input-group" data-bs-theme="dark">
					<div class="input-group-text">
						<input id="ascendingCodesBtn" class="form-check-input mt-0" type="radio" name="sortBtnGrp-1" value="true" aria-label="Radio button for following text: Ascending order" />
						<label class="form-check-label">Ascending order</label>
					</div>
					</div>

					<div class="input-group" data-bs-theme="dark">
					<div class="input-group-text">
						<input id="descendingCodesBtn" class="form-check-input mt-0" type="radio" name="sortBtnGrp-1" value="" aria-label="Radio button for following text: Descending order" />
						<label class="form-check-label">Descending order</label>
					</div>
					</div>
				</div>
			</div>
		</section>

		<section id="search-section" class="my-5" style={{display: searchResultsVisibility ? 'block' : 'none'}}>
			<div class="poll-bar">
				<button id="close-button" type="button" class="btn btn-dark"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/></svg></button>
			</div>
			<p class="options-heading">Search Results</p>
			<table class="table table-striped" data-bs-theme="dark">
			<thead>
				<tr>
				<th scope="col" style={{width: "33px"}}>#</th>
				<th scope="col" style={{width: "33px"}}>Country</th>
				<th scope="col" style={{width: "33px"}}>Country Code</th>
				<th scope="col" style={{width: "33px"}}>Continent</th>
				</tr>
			</thead>
			<tbody id="search-table-body">
			</tbody>
			</table>
			<p id="search-section-notifier" class="options-text"><small>* Filter options affect the results *</small></p>
		</section>

		<section>
			<table class="table table-striped" data-bs-theme="dark">
			<thead>
				<tr>
				<th scope="col" style={{width: "33px"}}>#</th>
				<th scope="col" style={{width: "33px"}}>Country</th>
				<th scope="col" style={{width: "33px"}}>Country Code</th>
				<th scope="col" style={{width: "33px"}}>Continent</th>
				</tr>
			</thead>
			<tbody id="countries-list-table-body">
				{tableArray.map((part, index) => (
					<tr key={index}>
						<th scope="row">{index + 1}</th>
						<td>{part[0]}</td>
						<td>{part[1]}</td>
						<td>{part[2]}</td>
					</tr>
				))}
			</tbody>
			</table>
		</section>
		</div>
	);
}

export default CountryCodes;