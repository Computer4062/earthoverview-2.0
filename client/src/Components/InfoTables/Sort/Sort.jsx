import React from "react"

function SortCard(props){
	return (
		<>
		<div class="input-group" data-bs-theme="dark">
			<div class="input-group-text">
				<input 
					id={props.id} 
					class="form-check-input mt-0" 
					type="radio" 
					onChange={() => props.func()}
					name="sortBtnGrp-1" 
					value=""
					checked={props.checked}
					aria-label={"Radio button for following text: " + props.label} 
				/>
				<label class="form-check-label">{props.label}</label>
			</div>
		</div>
		</>
	);
}

export default SortCard;