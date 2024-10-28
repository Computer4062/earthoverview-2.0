import React from "react"
import "./Footer.css"

function Footer(){
	return (
		<footer>
			<hr />
			<div className="footer-elements">
				<div>
					<p>&copy; EarthOverView 2024</p>
					<p>Contact: mihan.edirisinghe@gmail.com</p>
				</div>
				<div>
					<br />
					<a href="/credits">Credits</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;