import React, {useEffect, useState} from "react"
import { Helmet } from "react-helmet"

import isocodes from "../../../Assets/ListData/ISOCountryCodes.js"
import {arrayOfImages, codes} from "../../../Assets/ListData/CountryFlags.js"

import TitleCard from "../../../Components/Lists Components/TitleCard/TitleCard.jsx"
import DownloadToZipCard from "../../../Components/Lists Components/Download/DownloadToZip.jsx"
import NavBar from "../../../Components/NavBar/NavBar.jsx"
import Footer from "../../../Components/Footer/Footer.jsx"

import "../../../Components/Lists Components/Table/Table.css"

function MetaData(){
	return (
		<Helmet>
			<title>Country Flags Zip file - EarthOverView</title>
			<meta name="description" content="Download a zip file with images of country flags" />
			<meta name="keywords" content="zip file country flags" />
		</Helmet>
	);
}

function CountryFlags(){
	const [downloadArray, setDownloadArray] = useState([]); // hold array of the table for downloading

	// Initialize the data
	useEffect(() => {
		let download_array = [];

		codes.forEach(codeIncluded => {
			download_array.push(`${codeIncluded}.svg`);
		});

		setDownloadArray(download_array);
	}, []);

	return (
		<>
		<MetaData />
		<NavBar />
		<section className="mt-5">
			<TitleCard
				title="Country Flags"
				description="Download list of 153 country flags, image names will be iso codes"
			/>

			<DownloadToZipCard array={downloadArray} fileName="Flags" path="../../../../public/Images/flags/" />
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
				<tbody>
					{
						arrayOfImages.map( (img, i) => (
							<tr key={i}>
							<th scope="row">{i+1}</th>
							<td>{isocodes[`${codes[i]}`]}</td>
							<td><img src={img} width="150" height="75" /></td>
							</tr>
						))
					}
				</tbody>
			</table>
		</section>
		
		<Footer />
		</>
	);
}

export default CountryFlags;