import React from "react"
import "./EditPanel.css"

let filterBtn = false;
let sortBtn = false;
let downloadBtn = false;

function handleFilterBtn(){
	filterBtn = !filterBtn;
	if(!filterBtn) document.querySelector("#filter-options-section").classList.add("hide");
	else document.querySelector("#filter-options-section").classList.remove("hide");
}

function handleSortBtn(){
	sortBtn = !sortBtn;
	if(!sortBtn) document.querySelector("#sort-options-section").classList.add("hide");
	else document.querySelector("#sort-options-section").classList.remove("hide");
}

function handleDownloadBtn(){
	downloadBtn = !downloadBtn;
	if(!downloadBtn) document.querySelector("#download-section").classList.add("hide");
	else document.querySelector("#download-section").classList.remove("hide");
}

function EditPanel(){
	return(
		<div class="input-group d-flex justify-content-center" id="edit-panel" data-bs-theme="dark">
			<button id="filter-btn" onClick={handleFilterBtn} class="btn btn-outline-light" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16"><path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z"/></svg></button>
			<button id="sort-btn" onClick={handleSortBtn} class="btn btn-outline-light" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-up" viewBox="0 0 16 16"><path d="M3.5 12.5a.5.5 0 0 1-1 0V3.707L1.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.5.5 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 3.707zm3.5-9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/></svg></button>
			<button class="btn btn-outline-light download-sec-btn" onClick={handleDownloadBtn} type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/></svg></button>
		</div>
	);
}

export default EditPanel;