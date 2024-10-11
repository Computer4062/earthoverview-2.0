import React from "react"
import './HackerButton.css'

function HackerButton({text, width, height, borderRadius}){
	const styles = {
		width: width,
		height: height,
		borderRadius: borderRadius
	}

	return (
		<button className="hacker-button" style={styles}>{text}</button>
	);
}

export default HackerButton