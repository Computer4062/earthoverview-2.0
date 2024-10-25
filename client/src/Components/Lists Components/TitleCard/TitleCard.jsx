import React from "react"
import "./TitleCard.css"

function TitleCard(props){
	return(
		<div class="list-title-holder">
			<h1 class="list-title inv-title mb-2">{props.title}</h1>
			<p>{props.description[0]}</p>
			<p>{props.description[1]}</p>
		</div>
	);
}

export default TitleCard;