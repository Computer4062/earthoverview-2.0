import React from "react";
import "./DownloadCard.css";

function DownloadCard(){
	return(
		<section class="download-section mt-3 mb-5 hidden">
			<div class="download-pannel">
				<p class="options-heading">Download Generated table in CSV format</p>
				<div class="download-btn-holder">
					<button type="button" class="btn btn-primary download-btn">Download</button>
				</div>
			</div>
		</section>
	);
}

export default DownloadCard;