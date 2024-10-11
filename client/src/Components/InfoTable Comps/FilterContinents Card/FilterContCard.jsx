import React from "react"

function FilterContinentsCard(){
	return(
				<div id="options-section-2" class="mt-3">
					<p class="options-subtitle">Filter to Continent</p>
					<div id="options-grid">
						<div class="input-group" id="Asia-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 asiaCheckBox Asia" type="checkbox" value="" aria-label="Radio button for following text Asia" />
							<label class="form-check-label">Asia</label>
						</div>
						</div>
						
						<div class="input-group" id="South-Asia-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 southAsiaCheckBox Asia" type="checkbox" value="" aria-label="Radio button for following text South Asia" />
							<label class="form-check-label">South Asia</label>
						</div>
						</div>
						
						<div class="input-group" id="SouthEast-Asia-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 southEastAsiaCheckBox Asia" type="checkbox" value="" aria-label="Radio button for following text SouthEast Asia" />
							<label class="form-check-label">SouthEast Asia</label>
						</div>
						</div>
						
						<div class="input-group" id="East-Asia-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 eastAsiaCheckBox Asia" type="checkbox" value="" aria-label="Radio button for following text East Asia" />
							<label class="form-check-label">East Asia</label>
						</div>
						</div>
						
						<div class="input-group" id="Western-Asia-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 westernAsiaCheckBox Asia" type="checkbox" value="" aria-label="Radio button for following text Western Asia" />
							<label class="form-check-label">Western Asia</label>
						</div>
						</div>

						<div class="input-group" id="Central-Asia-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 centralAsiaCheckBox Asia" type="checkbox" value="" aria-label="Radio button for following text Central Asia" />
							<label class="form-check-label">Central Asia</label>
						</div>
						</div>

						<div class="input-group" id="Africa-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 africaCheckBox Africa" type="checkbox" value="" aria-label="Radio button for following text Africa" />
							<label class="form-check-label">Africa</label>
						</div>
						</div>
						
						<div class="input-group" id="Northern-Africa-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 northernAfricaCheckBox Africa" type="checkbox" value="" aria-label="Radio button for following text Northern Africa" />
							<label class="form-check-label">Northern Africa</label>
						</div>
						</div>

						<div class="input-group" id="Eastern-Africa-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 easternAfricaCheckBox Africa" type="checkbox" value="" aria-label="Radio button for following text Eastern Africa" />
							<label class="form-check-label">Eastern Africa</label>
						</div>
						</div>
						
						<div class="input-group" id="Western-Africa-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 westernAfricaCheckBox Africa" type="checkbox" value="" aria-label="Radio button for following text Western Africa" />
							<label class="form-check-label">Western Africa</label>
						</div>
						</div>
						
						<div class="input-group" id="Southern-Africa-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 southernAfricaCheckBox Africa" type="checkbox" value="" aria-label="Radio button for following text Southern Africa" />
							<label class="form-check-label">Southern Africa</label>
						</div>
						</div>
						
						<div class="input-group" id="Central-Africa-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 centralAfricaCheckBox Africa" type="checkbox" value="" aria-label="Radio button for following text Central Africa" />
							<label class="form-check-label">Central Africa</label>
						</div>
						</div>

						<div class="input-group" id="Europe-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 europeCheckBox" type="checkbox" value="" aria-label="Radio button for following text Europe" />
							<label class="form-check-label">Europe</label>
						</div>
						</div>

						<div class="input-group" id="America-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 americaCheckBox America" type="checkbox" value="" aria-label="Radio button for following text America" />
							<label class="form-check-label">America</label>
						</div>
						</div>
					
						<div class="input-group" id="Northern-America-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 northernAmericaCheckBox America" type="checkbox" value="" aria-label="Radio button for following text Northern America" />
							<label class="form-check-label">Northern America</label>
						</div>
						</div>
						
						<div class="input-group" id="Southern-America-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 southernAmericaCheckBox America" type="checkbox" value="" aria-label="Radio button for following text Southern America" />
							<label class="form-check-label">Southern America</label>
						</div>
						</div>

						<div class="input-group" id="Oceania-selector" data-bs-theme="dark">
						<div class="input-group-text">
							<input class="form-check-input mt-0 oceaniaCheckBox Oceania" type="checkbox" value="" aria-label="Radio button for following text Oceania" />
							<label class="form-check-label">Oceania</label>
						</div>
						</div>
					</div>

					<div id="options-selector-grid">
						<div class="dropdown">
						<button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Asia
						</button>
						<ul class="dropdown-menu">
							<li>
								<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 asiaCheckBox Asia" type="checkbox" value="" aria-label="Radio button for following text Asia" />
									<label class="form-check-label">Asia</label>
								</div>
								</div>
							</li>
							
							<li>
							<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 eastAsiaCheckBox Asia" type="checkbox" value="" aria-label="Radio button for following text East Asia" />
									<label class="form-check-label">East Asia</label>
								</div>
								</div>
							</li>
							
							<li>
							<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 southEastAsiaCheckBox Asia" type="checkbox" value="" aria-label="Radio button for following text SouthEast Asia" />
									<label class="form-check-label">SouthEast Asia</label>
								</div>
								</div>
							</li>
							
							<li>
							<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 southAsiaCheckBox Asia" type="checkbox" value="" aria-label="Radio button for following text South Asia" />
									<label class="form-check-label">South Asia</label>
								</div>
								</div>
							</li>
							
							<li>
							<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 westernAsiaCheckBox Asia" type="checkbox" value="" aria-label="Radio button for following text Western Asia" />
									<label class="form-check-label">Western Asia</label>
								</div>
								</div>
							</li>
							
							<li>
							<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 centralAsiaCheckBox Asia" type="checkbox" value="" aria-label="Radio button for following text Central Asia" />
									<label class="form-check-label">Central Asia</label>
								</div>
								</div>
							</li>
						</ul>
						</div>

						<div class="dropdown">
						<button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Africa
						</button>
						<ul class="dropdown-menu">
							<li>
								<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 africaCheckBox Africa" type="checkbox" value="" aria-label="Radio button for following text Africa" />
									<label class="form-check-label">Africa</label>
								</div>
								</div>
							</li>
							
							<li>
							<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 northernAfricaCheckBox Africa" type="checkbox" value="" aria-label="Radio button for following text Northern Africa" />
									<label class="form-check-label">Northern Africa</label>
								</div>
								</div>
							</li>
							
							<li>
							<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 easternAfricaCheckBox Africa" type="checkbox" value="" aria-label="Radio button for following text Eastern Africa" />
									<label class="form-check-label">Eastern Africa</label>
								</div>
								</div>
							</li>
							
							<li>
							<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 southernAfricaCheckBox Africa" type="checkbox" value="" aria-label="Radio button for following text Southern Africa" />
									<label class="form-check-label">Southern Africa</label>
								</div>
								</div>
							</li>
							
							<li>
							<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 westernAfricaCheckBox Africa" type="checkbox" value="" aria-label="Radio button for following text Western Africa" />
									<label class="form-check-label">Western Africa</label>
								</div>
								</div>
							</li>
							
							<li>
							<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 centralAfricaCheckBox Africa" type="checkbox" value="" aria-label="Radio button for following text Central Africa" />
									<label class="form-check-label">Central Africa</label>
								</div>
								</div>
							</li>
						</ul>
						</div>

						<div class="dropdown">
						<button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Europe
						</button>
						<ul class="dropdown-menu">
							<li>
								<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 europeCheckBox" type="checkbox" value="" aria-label="Radio button for following text Europe" />
									<label class="form-check-label">Europe</label>
								</div>
								</div>
							</li>
						</ul>
						</div>

						<div class="dropdown">
						<button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							America
						</button>
						<ul class="dropdown-menu">
							<li>
								<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 americaCheckBox" type="checkbox" value="" aria-label="Radio button for following text America" />
									<label class="form-check-label">America</label>
								</div>
								</div>
							</li>
							<li>
								<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 northernAmericaCheckBox" type="checkbox" value="" aria-label="Radio button for following text Northern America" />
									<label class="form-check-label">Northern America</label>
								</div>
								</div>
							</li>
							<li>
								<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 southernAmericaCheckBox America" type="checkbox" value="" aria-label="Radio button for following text Sourthern America" />
									<label class="form-check-label">Sourthern America</label>
								</div>
								</div>
							</li>
						</ul>
						</div>

						<div class="dropdown">
						<button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Oceania
						</button>
						<ul class="dropdown-menu">
							<li>
								<div class="input-group" data-bs-theme="dark">
								<div class="input-group-text">
									<input class="form-check-input mt-0 oceaniaCheckBox" type="checkbox" value="" aria-label="Radio button for following text Oceania" />
									<label class="form-check-label">Oceania</label>
								</div>
								</div>
							</li>
						</ul>
						</div>
					</div>
				</div>
	);
}

export default FilterContinentsCard;