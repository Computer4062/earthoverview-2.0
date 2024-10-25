import React, {useState} from "react"

import {FilterContBtns, FilterContSelectors} from "./FilterContBtns.jsx";
import { addContinentFunc, removeContinentFunc } from "./FilterFunctions.jsx";
import "./FilterContCard.css"

function FilterContCard(props){

	// Functionality for adding a continent to filter list
	const addCont = (cont) => {
		addContinentFunc(cont, props.continentsChosen, props.continentsChosenChanger);
		props.updateFunc();
	}

	// Functionality for removing a continent from the filter list
	const removeCont = (cont) => {
		removeContinentFunc(cont, props.continentsChosen, props.continentsChosenChanger);
		props.updateFunc();
	}

	return (
		<>
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

						<div id="options-selector-grid">
							<FilterContSelectors 
								label="Asia" 
								items={[
									<FilterContBtns label="South Asia" func1={() => addCont("South Asia")} func2={() => removeCont("South Asia")} id="South-Asia-selector" />,
									<FilterContBtns label="SouthEast Asia" func1={() => addCont("South East Asia")} func2={() => removeCont("South East Asia")} id="SouthEast-Asia-selector" />,
									<FilterContBtns label="East Asia" func1={() => addCont("East Asia")} func2={() => removeCont("East Asia")} id="East-Asia-selector" />,
									<FilterContBtns label="Western Asia" func1={() => addCont("Western Asia")} func2={() => removeCont("Western Asia")} id="Western-Asia-selector" />,
									<FilterContBtns label="Central Asia" func1={() => addCont("Central Asia")} func2={() => removeCont("Central Asia")} id="Central-Asia-selector" />
								]} 
							/>
							<FilterContSelectors
								label="Africa"
								items={[
									<FilterContBtns label="Northern Africa" func1={() => addCont("Northern Africa")} func2={() => removeCont("Northern Africa")} id="Northern-Africa-selector" />,
									<FilterContBtns label="Eastern Africa" func1={() => addCont("Eastern Africa")} func2={() => removeCont("Eastern Africa")} id="Eastern-Africa-selector" />,
									<FilterContBtns label="Western Africa" func1={() => addCont("Western Africa")} func2={() => removeCont("Western Africa")} id="Western-Africa-selector" />,
									<FilterContBtns label="Southern Africa" func1={() => addCont("Southern Africa")} func2={() => removeCont("Southern Africa")} id="Southern-Africa-selector" />,
									<FilterContBtns label="Central Africa" func1={() => addCont("Central Africa")} func2={() => removeCont("Central Africa")} id="Central-Africa-selector" />
								]}
							/>
							<FilterContSelectors
								label="Europe"
								items={[
									<FilterContBtns label="Europe" func1={() => addCont("Europe")} func2={() => removeCont("Europe")} id="Europe-selector" />
								]}
							/>
							<FilterContSelectors
								label="America"
								items={[
									<FilterContBtns label="Nothern America" func1={() => addCont("Northern America")} func2={() => removeCont("Northern America")} id="Northern-America-selector" />,
									<FilterContBtns label="Southern America" func1={() => addCont("Southern America")} func2={() => removeCont("Southern America")} id="Southern-America-selector" />
								]}
							/>
							<FilterContSelectors
								label="Oceania"
								items={[
									<FilterContBtns label="Oceania" func1={() => addCont("Oceania")} func2={() => removeCont("Oceania")} id="Oceania-selector" />									
								]}
							/>
						</div>
		</>
	);
}

export default FilterContCard;