import React, {useEffect, useState} from "react"

import currencies from "../../../Assets/ListData/Currencies.js"
import countries from "../../../Assets/ListData/Countries.js"

import TitleCard from "../../../Components/Lists Components/TitleCard/TitleCard.jsx"
import DownloadCard from "../../../Components/Lists Components/Download/DownloadCard.jsx"
import NavBar from "../../../Components/NavBar/NavBar.jsx"
import Footer from "../../../Components/Footer/Footer.jsx"

import "../../../Components/Lists Components/Table/Table.css"

function Currencies(){
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
					currencies[country].unit,
					currencies[country].currency,
					currencies[country].symbol,
					currencies[country].code,
					continent
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
				<td>${arr[3]}</td>
				<td>${arr[4]}</td>
				<td>${arr[5]}</td>
				</tr>
			`;
		});

		setTableArray(array);
		setTableContent(content);
	}, []);

	return (
		<>
		<NavBar />
		<section className="mt-5">
			<TitleCard
				title="Currencies"
				description="Download list of 196 currencies, currency units and symbols"
			/>

			<DownloadCard array={tableArray} fileName="Currencies" />
		</section>

		<section class="list-table-section mt-5">
			<table class="list-table">
				<thead>
					<tr>
					<th scope="col" style={{width: "33px"}}>#</th>
					<th scope="col" style={{width: "250px"}}>Country</th>
					<th scope="col" style={{width: "250px"}}>Unit</th>
					<th scope="col" style={{width: "250px"}}>Name</th>
					<th scope="col" style={{width: "100px"}}>Symbol</th>
					<th scope="col" style={{width: "100px"}}>Code</th>
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

export default Currencies;