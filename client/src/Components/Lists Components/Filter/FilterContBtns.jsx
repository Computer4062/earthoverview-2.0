import React from "react"

function FilterContBtns(props){
	return(
		<div class="input-group" data-bs-theme="dark" id={props.id}>
		<div class="input-group-text">
				<input 
					class="form-check-input mt-0"
					type="checkbox" 
					onChange={(event) => event.target.checked ? props.func1() : props.func2()} 
					aria-label={"Radio button for following text " + props.label} 
				/>
				<label class="form-check-label">{props.label}</label>
		</div>
		</div>
	);
}

// For mobile version selectors are used
function FilterContSelectors(props){
	return(
		<div>
			<button class="btn btn-dark dropdown-toggle cont-selector-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
				{props.label}
			</button>
			<ul class="dropdown-menu">
				{props.items.map((item, index) => (
					<li key={index}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}

export {FilterContBtns, FilterContSelectors};