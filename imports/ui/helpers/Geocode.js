import axios from 'axios';

const googleAPIKey = "&key=AIzaSyDn-JLIOMFNAiNrcarL8_7k0ArCEA8HEGc";
const geocodeURL = "https://maps.googleapis.com/maps/api/geocode/json?address=";

const prepAdressForAPI = (adress) => {
	prepdAdress = adress.replace(/ /g, "+");
	return prepdAdress;
}

export default geoCodeAdress = (adress) => {
	const prepdAdress = prepAdressForAPI(adress);
	const geoURL = `${geocodeURL}${prepdAdress}${googleAPIKey}`;

	const locationData = axios.get(geoURL).then((response) => {
		const responseData = response.data.results;
		return responseData;
	}).catch((error) => {console.log(error)});
	return locationData;
}