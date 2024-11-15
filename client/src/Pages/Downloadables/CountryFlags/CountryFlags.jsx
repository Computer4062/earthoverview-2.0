import React, {useEffect, useState} from "react"
import { Helmet } from "react-helmet"

import isocodes from "../../../Assets/ListData/ISOCountryCodes.js"
import {arrayOfImages, codes} from "../../../Assets/ListData/CountryFlags.js"

import TitleCard from "../../../Components/Lists Components/TitleCard/TitleCard.jsx"
import NavBar from "../../../Components/NavBar/NavBar.jsx"
import Footer from "../../../Components/Footer/Footer.jsx"

import "../../../Components/Lists Components/Table/Table.css"

function MetaData(){
	return (
		<Helmet>
			<title>Country Flags Zip file - EarthOverView</title>
			<meta name="description" content="Download a zip file with images of 178 country flags" />
			<meta name="keywords" content="zip file country flags" />
		</Helmet>
	);
}

function CountryFlags(){
	return (
		<>
		<MetaData />
		<NavBar />
		<section className="mt-5">
			<TitleCard
				title="Country Flags"
				description="Download zip file of 178 country flags, image names will be iso codes, all images are free for commercial use."
			/>

			<div class="w-100 d-flex justify-content-center">
			<div class="download-to-csv-card">
				<a class="download-btn" href="https://www.earthoverview.info/Downloads/Country Flags/CountryFlags.zip"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/></svg></a>
				<label>Download to ZIP</label>
			</div>
			</div>
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