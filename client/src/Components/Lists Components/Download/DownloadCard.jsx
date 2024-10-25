import React from "react"
import "./DownloadCard.css"

function DownloadCard(props){
	return(
		<div class="download-pannel">
			<p class="options-heading">Download list in CSV format</p>
			<div class="download-btn-holder">
				<button class="download-btn" onClick={() => props.func()}>Download</button>
			</div>
		</div>
	);
}

export default DownloadCard;