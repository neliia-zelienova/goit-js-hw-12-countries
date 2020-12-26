import './styles.css';
import 'toastr/build/toastr.min.css';

import * as debounce from 'lodash.debounce';
import { getCountriesList } from './js/api.js';
import { handler, checkCountryName, noMatchesFound } from './js/res-handling.js'

const inputRef = document.querySelector('.input');

const formRef = document.querySelector('form');
const submitform = formRef.addEventListener('submit', (event) => event.preventDefault());


inputRef.addEventListener('input', debounce(() => {
  const namePart = inputRef.value;
  if (checkCountryName(namePart)){
        getCountriesList(namePart)
          .then(res => handler(res))
            .catch(() => noMatchesFound());
  }
  }, 500)
);

