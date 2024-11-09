import React, {useEffect, useState} from "react"

import isocodes from "../../../Assets/ListData/ISOCountryCodes.js"
import countryflags from "../../../Assets/ListData/CountryFlags.js"

import TitleCard from "../../../Components/Lists Components/TitleCard/TitleCard.jsx"
import DownloadToZipCard from "../../../Components/Lists Components/Download/DonwloadImgToZip.jsx"
import NavBar from "../../../Components/NavBar/NavBar.jsx"
import Footer from "../../../Components/Footer/Footer.jsx"

import "../../../Components/Lists Components/Table/Table.css"

const path = "../../../../public/Images/Country Flags/";
const downloadArray = [];

function CountryFlags(){
	const [tableContent, setTableContent] = useState(''); // hold html content of the table
	const [tableArray, setTableArray] = useState([]); // hold array of the table for downloading

	// Initialize the data
	useEffect(() => {
		let array = [];
		let content = "";

		countryflags.forEach(codeIncluded => {
			array.push([isocodes[codeIncluded], `${codeIncluded}.svg`]);
			downloadArray.push(`${codeIncluded}.svg`);
		});

		array.forEach((arr, i) => {
			content += `
				<tr>
				<th scope="row">${i+1}</th>
				<td>${arr[0]}</td>
				<td><img src="${path}${arr[1]}" alt=${arr[0]} width=150 height=75 /></td>
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
				title="Country Flags"
				description="Download list of 153 country flags, image names will be iso codes"
			/>

			<DownloadToZipCard array={downloadArray} fileName="Flags" />
		</section>

		<section class="list-table-section mt-5">
			<table class="list-table">
				<thead>
					<tr>
					<th scope="col" style={{width: "33px"}}>#</th>
					<th scope="col" style={{width: "300px"}}>Country</th>
					<th scope="col" style={{width: "300px"}}>Flag</th>
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

export default CountryFlags;