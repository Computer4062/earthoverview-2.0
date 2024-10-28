import React, {useEffect, useState} from "react"

import languages from "../../../Assets/ListData/Languages.js"
import countries from "../../../Assets/ListData/Countries.js"

import TitleCard from "../../../Components/Lists Components/TitleCard/TitleCard.jsx"
import DownloadCard from "../../../Components/Lists Components/Download/DownloadCard.jsx"
import NavBar from "../../../Components/NavBar/NavBar.jsx"
import Footer from "../../../Components/Footer/Footer.jsx"

import "../../../Components/Lists Components/Table/Table.css"

function Languages(){
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
					languages[country].language,
					languages[country].iso639_1,
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
				title="Official Languages"
				description="Obtain the official languages of 196 countries"
			/>

			<DownloadCard array={tableArray} fileName="Languages" />
		</section>

		<section class="list-table-section mt-5">
			<table class="list-table">
				<thead>
					<tr>
					<th scope="col" style={{width: "33px"}}>#</th>
					<th scope="col" style={{width: "250px"}}>Country</th>
					<th scope="col" style={{width: "250px"}}>Language</th>
					<th scope="col" style={{width: "250px"}}>Language Code</th>
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

export default Languages;