import { insertCarInTheDOM } from './insert_car_in_the_dom';

const getAPI = () => {
  // when the page loads
  // fetch the api
  const url = 'https://wagon-garage-api.herokuapp.com/wagarage/cars'
  fetch(url)
    .then(res => res.json())
    .then((cars) => {
      // console.log(cars);
      // dig into the data
      // for each of the cars
      // find the list
      const carsList = document.querySelector('.cars-list');
      carsList.innerHTML = '';
  
      cars.forEach(insertCarInTheDOM);
      
    });
};

export { getAPI };