// ENTRY FILE HAS ONLY:
// IMPORTS
import { getAPI } from './get_api';
import { postAPI } from './post_api';

// FUNCTIONS
getAPI();

// EVENT LISTENERS
const form = document.querySelector('form');
form.addEventListener('submit', postAPI)
