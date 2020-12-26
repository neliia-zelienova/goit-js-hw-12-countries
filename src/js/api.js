import axios from 'axios';
axios.defaults.baseURL = 'https://restcountries.eu/rest/v2/name/';
 
export const getCountriesList = (name) => axios.get(`${name}`).then(res => res.data);