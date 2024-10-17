const demonyms = {
  "China": "Chinese",
  "Japan": "Japanese",
  "Mongolia": "Mongolian",
  "North Korea": "North Korean",
  "South Korea": "South Korean",
  "Taiwan": "Taiwanese",

  "Afghanistan": "Afghan",
  "Bangladesh": "Bangladeshi",
  "Bhutan": "Bhutanese",
  "India": "Indian",
  "Maldives": "Maldivian",
  "Nepal": "Nepalese",
  "Pakistan": "Pakistani",
  "Sri Lanka": "Sri Lankan",

  "Brunei": "Bruneian",
  "Cambodia": "Cambodian",
  "Indonesia": "Indonesian",
  "Laos": "Laotian",
  "Malaysia": "Malaysian",
  "Myanmar (Burma)": "Myanmar",
  "Philippines": "Filipino",
  "Singapore": "Singaporean",
  "Thailand": "Thai",
  "Timor-Leste": "Timorese",
  "Vietnam": "Vietnamese",

  "Kazakhstan": "Kazakh",
  "Kyrgyzstan": "Kyrgyz",
  "Tajikistan": "Tajik",
  "Turkmenistan": "Turkmen",
  "Uzbekistan": "Uzbek",

  "Armenia": "Armenian",
  "Azerbaijan": "Azerbaijani",
  "Bahrain": "Bahraini",
  "Iraq": "Iraqi",
  "Israel": "Israeli",
  "Jordan": "Jordanian",
  "Kuwait": "Kuwaiti",
  "Lebanon": "Lebanese",
  "Oman": "Omani",
  "Qatar": "Qatari",
  "Saudi Arabia": "Saudi Arabian",
  "Syria": "Syrian",
  "Turkey": "Turkish",
  "United Arab Emirates": "Emirati",
  "Yemen": "Yemeni",

  "Algeria": "Algerian",
  "Egypt": "Egyptian",
  "Libya": "Libyan",
  "Morocco": "Moroccan",
  "Tunisia": "Tunisian",

  "Benin": "Beninese",
  "Burkina Faso": "Burkinabé",
  "Cape Verde": "Cape Verdean",
  "Côte d'Ivoire": "Ivorian",
  "Gambia": "Gambian",
  "Ghana": "Ghanaian",
  "Guinea": "Guinean",
  "Guinea-Bissau": "Bissau-Guinean",
  "Liberia": "Liberian",
  "Mali": "Malian",
  "Mauritania": "Mauritanian",
  "Niger": "Nigerien",
  "Nigeria": "Nigerian",
  "Senegal": "Senegalese",
  "Sierra Leone": "Sierra Leonean",
  "Togo": "Togolese",

  "Burundi": "Burundian",
  "Djibouti": "Djiboutian",
  "Eritrea": "Eritrean",
  "Ethiopia": "Ethiopian",
  "Kenya": "Kenyan",
  "Madagascar": "Malagasy",
  "Malawi": "Malawian",
  "Mauritius": "Mauritian",
  "Mozambique": "Mozambican",
  "Rwanda": "Rwandan",
  "Seychelles": "Seychellois",
  "Somalia": "Somali",
  "South Sudan": "South Sudanese",
  "Sudan": "Sudanese",
  "Tanzania": "Tanzanian",
  "Uganda": "Ugandan",
  "Zambia": "Zambian",
  "Zimbabwe": "Zimbabwean",

  "Angola": "Angolan",
  "Botswana": "Motswana",
  "Eswatini (Swaziland)": "Swazi",
  "Lesotho": "Mosotho",
  "Namibia": "Namibian",
  "South Africa": "South African",

  "Cameroon": "Cameroonian",
  "Central African Republic": "Central African",
  "Chad": "Chadian",
  "Democratic Republic of the Congo": "Congolese",
  "Equatorial Guinea": "Equatorial Guinean",
  "Gabon": "Gabonese",
  "Republic of the Congo": "Congolese",

  "Albania": "Albanian",
  "Andorra": "Andorran",
  "Austria": "Austrian",
  "Belarus": "Belarusian",
  "Belgium": "Belgian",
  "Bosnia and Herzegovina": "Bosnian or Herzegovinian",
  "Bulgaria": "Bulgarian",
  "Croatia": "Croatian",
  "Cyprus": "Cypriot",
  "Czech Republic": "Czech",
  "Denmark": "Danish",
  "Estonia": "Estonian",
  "Finland": "Finnish",
  "France": "French",
  "Georgia": "Georgian",
  "Germany": "German",
  "Greece": "Greek",
  "Hungary": "Hungarian",
  "Iceland": "Icelandic",
  "Ireland": "Irish",
  "Italy": "Italian",
  "Latvia": "Latvian",
  "Liechtenstein": "Liechtensteiner",
  "Lithuania": "Lithuanian",
  "Luxembourg": "Luxembourgish",
  "Malta": "Maltese",
  "Moldova": "Moldovan",
  "Monaco": "Monegasque",
  "Montenegro": "Montenegrin",
  "Netherlands": "Dutch",
  "North Macedonia": "North Macedonian",
  "Norway": "Norwegian",
  "Poland": "Polish",
  "Portugal": "Portuguese",
  "Romania": "Romanian",
  "Russia": "Russian",
  "San Marino": "Sammarinese",
  "Serbia": "Serbian",
  "Slovakia": "Slovak",
  "Slovenia": "Slovenian",
  "Spain": "Spanish",
  "Sweden": "Swedish",
  "Switzerland": "Swiss",
  "Ukraine": "Ukrainian",
  "United Kingdom": "British",
  "Vatican City": "Vatican",

  "Argentina": "Argentine",
  "Bolivia": "Bolivian",
  "Brazil": "Brazilian",
  "Chile": "Chilean",
  "Colombia": "Colombian",
  "Ecuador": "Ecuadorian",
  "Guyana": "Guyanese",
  "Paraguay": "Paraguayan",
  "Peru": "Peruvian",
  "Suriname": "Surinamese",
  "Uruguay": "Uruguayan",
  "Venezuela": "Venezuelan",

  "Canada": "Canadian",
  "United States": "American",
  "Mexico": "Mexican",
  "Cuba": "Cuban",
  "Bahamas": "Bahamian",
  "Jamaica": "Jamaican",
  "Haiti": "Haitian",
  "Dominican Republic": "Dominican",
  "Trinidad and Tobago": "Trinidadian or Tobagonian",
  "Antigua and Barbuda": "Antiguan or Barbudan",
  "Barbados": "Barbadian",
  "Belize": "Belizean",
  "Costa Rica": "Costa Rican",
  "Dominica": "Dominican",
  "El Salvador": "Salvadoran",
  "Grenada": "Grenadian",
  "Guatemala": "Guatemalan",
  "Honduras": "Honduran",
  "Nicaragua": "Nicaraguan",
  "Panama": "Panamanian",
  "Saint Kitts and Nevis": "Kittitian or Nevisian",
  "Saint Lucia": "Saint Lucian",
  "Saint Vincent and the Grenadines": "Saint Vincentian or Grenadian",

  "Australia": "Australian",
  "New Zealand": "New Zealander",
  "Papua New Guinea": "Papua New Guinean",
  "Solomon Islands": "Solomon Islander",
  "Vanuatu": "Ni-Vanuatu",
  "Fiji": "Fijian",
  "Micronesia": "Micronesian",
  "Palau": "Palauan",
  "Marshall Islands": "Marshallese",
  "Kiribati": "I-Kiribati",
  "Nauru": "Nauruan",
  "Tonga": "Tongan",
  "Samoa": "Samoan"
}

export default demonyms;