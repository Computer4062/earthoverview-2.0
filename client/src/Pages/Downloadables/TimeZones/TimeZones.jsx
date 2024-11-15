import React, {useEffect, useState} from "react"
import {Helmet} from "react-helmet"

import timezones from "../../../Assets/ListData/TimeZones.js"
import countries from "../../../Assets/ListData/Countries.js"

import TitleCard from "../../../Components/Lists Components/TitleCard/TitleCard.jsx"
import DownloadCard from "../../../Components/Lists Components/Download/DownloadCard.jsx"
import NavBar from "../../../Components/NavBar/NavBar.jsx"
import Footer from "../../../Components/Footer/Footer.jsx"

import "../../../Components/Lists Components/Table/Table.css"

function MetaData(){
	return (
		<Helmet>
			<title>List of Time Zones - EarthOverView</title>
			<meta name="description" content="Download a list of time zones for 196 countries" />
			<meta name="keywords" content="list of time zones" />
		</Helmet>
	);
}

function TimeZones(){
	const [tableContent, setTableContent] = useState(''); // hold html content of the table
	const [tableArray, setTableArray] = useState([]); // hold array of the table for downloading

	// Initialize the data
	useEffect(() => {
		let array = [];
		let content = "";

		for(const continent in countries){
			countries[continent].forEach(country => {
				if(timezones[country] !== undefined) // The timezones of some countries has not been added
				{
				array.push([
					country,
					timezones[country],
					continent
				]);
				}
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
				title="TimeZones"
				description="Download list of 192 timezones from 192 countries"
			/>

			<DownloadCard array={tableArray} fileName="TimeZones" />
		</section>

		<section class="list-table-section mt-5">
			<table class="list-table">
				<thead>
					<tr>
					<th scope="col" style={{width: "33px"}}>#</th>
					<th scope="col" style={{width: "250px"}}>Country</th>
					<th scope="col" style={{width: "250px"}}>Time Zones</th>
					<th scope="col" style={{width: "200px"}}>Continent</th>
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

export default TimeZones;