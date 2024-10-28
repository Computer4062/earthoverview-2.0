import React from "react"
import './HackerButton.css'

function HackerButton({text, width, height, borderRadius, onClick}){
	const styles = {
		width: width,
		height: height,
		borderRadius: borderRadius
	}

	if(onClick !== undefined)
	{
	return (
		<button className="hacker-button" style={styles} onClick={() => onClick()}>{text}</button>
	);
	}
	else
	{
	return (
		<button className="hacker-button" style={styles}>{text}</button>
	);
	}
}

export default HackerButton