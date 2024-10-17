import React from "react"
import "./DownloadCard.css"

function DownloadCard(){
	return(
		<div class="download-pannel">
			<p class="options-heading">Download Generated table in CSV format</p>
			<div class="download-btn-holder">
				<button type="button" class="btn btn-primary download-btn">Download</button>
			</div>
		</div>
	);
}

export default DownloadCard;