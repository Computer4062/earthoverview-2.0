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
					CSV file generator
				</a>
				<ul className="dropdown-menu">
					<li><a className="dropdown-item" href="#">Country Codes</a></li>
					<li><a className="dropdown-item" href="#">Currencies</a></li>
					<li><a className="dropdown-item" href="#">Demonyms</a></li>
					<li><a className="dropdown-item" href="#">Time Conversions</a></li>
					<li><a className="dropdown-item" href="#">Languages</a></li>
					<li><a className="dropdown-item" href="#">Country Flags</a></li>
					<li><a className="dropdown-item" href="#">Capital Cities</a></li>
				</ul>
				</li>
				<li className="nav-item">
				<a class="nav-link" href="#">Time Converter</a>
				<a class="nav-link" href="#">API Docs</a>
				</li>
			</ul>
			</div>
		</div>
		</nav>
	);
}

export default NavBar;