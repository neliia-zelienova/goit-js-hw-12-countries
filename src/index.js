import './styles.css';
import 'toastr/build/toastr.min.css';

import * as debounce from 'lodash.debounce';
import {getCountriesList} from './api.js';
import {handler} from './res-handling.js'




const inputRef = document.querySelector('.input');

inputRef.addEventListener('input', debounce(() => {
  
    const namePart = inputRef.value;
    if (namePart !== '') {
        getCountriesList(namePart)
            .then(res => handler(res))
            .catch(error => console.log(error));
    }
    
  }, 500)
);

