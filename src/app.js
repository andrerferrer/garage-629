import { getAPI } from './get_api';

getAPI();

const postAPI = (event) => {
  event.preventDefault();
  console.log(event);
  // when the form is submitted
  // get all the information inside the inputs

  const brand = document.getElementById('brand').value;
  const model = document.getElementById('model').value;
  const plate = document.getElementById('plate').value;
  const owner = document.getElementById('owner').value;
  // send that information to the API
  const url = 'https://wagon-garage-api.herokuapp.com/wagarage/cars'

  const goodData = JSON.stringify(
    { brand, model, plate, owner }
  );

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: goodData
  }

  fetch(url, options)
    .then(res => res.json())
    .then((car) => {
      // we can use this car to add it to the DOM
      // console.log(car);
      getAPI();
    })
};

// find the form
const form = document.querySelector('form');

// add event listener
form.addEventListener('submit', postAPI)