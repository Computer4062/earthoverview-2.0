import React from "react"

function TitleCard(props){
	return(
		<div>
			<h1 class="display-5 ">{props.title}</h1>
			<p>{props.description[0]}</p>
			<p>{props.description[1]}</p>
		</div>
	);
}

export default TitleCard;