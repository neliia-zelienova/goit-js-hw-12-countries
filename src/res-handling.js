import toastr from 'toastr';
import options from './toastr.options';

import countryInfo from './templates/country-info.hbs';
import countriesList from './templates/countries-list.hbs';

toastr.options = options;

const getCountriesObj = (countries) => {
    const CountriesList = {
        countries: []
    }
    CountriesList.countries = countries;
    return CountriesList;
}

export const handler = (countries) => {
    const outputRef = document.querySelector('.info');

     if (countries.length > 10) {
        toastr.error("Please enter a more specific query.", "To many Matches!");
     } else if (countries.length > 2 && countries.length < 10) {
         const test = getCountriesObj(countries);
         outputRef.insertAdjacentHTML('beforeend', countriesList(test));
     } else if (countries.length = 1) {
         console.log(countries[0].name);
        outputRef.insertAdjacentHTML('beforeend', countryInfo(countries[0]));
    };
}