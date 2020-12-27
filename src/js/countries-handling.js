import toastr from 'toastr';
import options from '../toastr.options';

import countryInfo from '../templates/country-info.hbs';
import countriesList from '../templates/countries-list.hbs';

toastr.options = options;

const getCountriesObj = (countriesArray) => {
    const CountriesListObj = {
        countries: []
    }
    CountriesListObj.countries = countriesArray;
    return CountriesListObj;
}

const clearContainer = () => {
    const countryInfoRef = document.querySelector('.country-info');
    const countriesListRef = document.querySelector('.countries-list');
    if (countryInfoRef) countryInfoRef.remove();
    if (countriesListRef) countriesListRef.remove();
}


export const checkCountryName = (name) => {
  if (!/[^a-zA-Z]/.test(name) && name !== '') {
      return name;
  }
    else if (/[^a-zA-Z]\s/.test(name)) {
    toastr.error("Only english characters are allowed!");
  }
  else if (name === '') clearContainer();
    
}

export const handler = (countries) => {
    const outputRef = document.querySelector('.result');
    clearContainer();

     if (countries.length > 10) {
        toastr.error("Please enter a more specific query.", "To many Matches!");
     } else if (countries.length > 2 && countries.length < 10) {
        outputRef.insertAdjacentHTML('beforeend', countriesList(getCountriesObj(countries)));
     } else if (countries.length === 1) {
         outputRef.insertAdjacentHTML('beforeend', countries.map(item => countryInfo(item)));
    };
}


export const noMatchesFound = () => {
    toastr.error("No matches found!");   
}