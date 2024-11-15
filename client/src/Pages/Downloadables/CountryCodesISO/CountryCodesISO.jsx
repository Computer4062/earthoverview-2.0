import React, {useEffect, useState} from "react"
import { Helmet } from "react-helmet"

import countries from "../../../Assets/ListData/Countries.js"
import isocodes from "../../../Assets/ListData/CountryCodesISO.js"

import TitleCard from "../../../Components/Lists Components/TitleCard/TitleCard.jsx"
import DownloadCard from "../../../Components/Lists Components/Download/DownloadCard.jsx"
import NavBar from "../../../Components/NavBar/NavBar.jsx"
import Footer from "../../../Components/Footer/Footer.jsx"

import "../../../Components/Lists Components/Table/Table.css"

function MetaData(){
	return (
		<Helmet>
			<title>List of ISO2 and ISO3 Country Codes - EarthOverView</title>
			<meta name="description" content="Download list of 196 iso2, iso3 country codes" />
			<meta name="keywords" content="list of iso2 iso3 country codes" />
		</Helmet>
	);
}

function CountryCodesISO(){
	const [tableContent, setTableContent] = useState(''); // hold html content of the table
	const [tableArray, setTableArray] = useState([]); // hold array of the table for downloading

	// Initialize the data
	useEffect(() => {
		let array = [];
		let content = "";

		for(const continent in countries){
			countries[continent].forEach(country => {
				array.push([
					country,
					isocodes[country].iso2,
					isocodes[country].iso3
				]);
			});
		}

		array.forEach((arr, i) => {
			content += `
				<tr>
				<th scope="row">${i+1}</th>
				<td>${arr[0]}</td>
				<td>${arr[1]}</td>
				<td>${arr[2]}</td>
				</tr>
			`;
		});

		setTableArray(array);
		setTableContent(content);
	}, []);

	return (
		<>
		<MetaData />
		<NavBar />
		<section className="mt-5">
			<TitleCard
				title="ISO Country Codes"
				description="Download list of 196 ISO2 and ISO3 country codes"
			/>

			<DownloadCard array={tableArray} fileName="ISOCodes" />
		</section>

		<section class="list-table-section mt-5">
			<table class="list-table">
				<thead>
					<tr>
					<th scope="col" style={{width: "33px"}}>#</th>
					<th scope="col" style={{width: "300px"}}>Country</th>
					<th scope="col" style={{width: "250px"}}>ISO2</th>
					<th scope="col" style={{width: "250px"}}>ISO3</th>
					</tr>
				</thead>
				<tbody dangerouslySetInnerHTML={{__html: tableContent}}>

				</tbody>
			</table>
		</section>
		
		<Footer />
		</>
	);
}

export default CountryCodesISO;