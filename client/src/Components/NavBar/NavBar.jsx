import React from "react"

function NavBar(){
	return(
		<nav class="navbar border-bottom border-body" style={{backgroundColor: "#0D0C0C"}} data-bs-theme="dark">
		<div className="container-fluid">
			<a className="navbar-brand" href="/">EarthOverView</a>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNavDropdown">
			<ul className="navbar-nav">
				<li className="nav-item dropdown">
				<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					Downloadables
				</a>
				<ul className="dropdown-menu">
					<li><a className="dropdown-item" href="/downloadables/countrycodes">Country Codes</a></li>
					<li><a className="dropdown-item" href="/downloadables/currencies">Currencies</a></li>
					<li><a className="dropdown-item" href="/downloadables/demonyms">Demonyms</a></li>
					<li><a className="dropdown-item" href="/downloadables/timezones">Time Zones</a></li>
					<li><a className="dropdown-item" href="/downloadables/officiallanguages">Official Languages</a></li>
					<li><a className="dropdown-item" href="/downloadables/capitalcities">Capital Cities</a></li>
				</ul>
				</li>
				<li className="nav-item">
				<a class="nav-link" href="#">Time Converter - COMMING SOON</a>
				<a class="nav-link" href="https://rapidapi.com/user/mihanedirisinghe">API Docs</a>
				</li>
			</ul>
			</div>
		</div>
		</nav>
	);
}

export default NavBar;