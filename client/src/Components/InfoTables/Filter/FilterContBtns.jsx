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

export default FilterContBtns;