const buildHTML = (car) => {
  return `
    <div class="car">
      <div class="car-image">
        <img src="http://loremflickr.com/280/280/${car.brand} ${car.model}" />
      </div>
      <div class="car-info">
        <h4>${car.brand} ${car.model}</h4>
        <p><strong>Owner:</strong> ${car.owner}</p>
        <p><strong>Plate:</strong> ${car.plate}</p>
      </div>
    </div>
  `
};

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
  
      cars.forEach((car) => {
        // extract the important info
        // console.log(car);
        // display that important info
        const carHTML = buildHTML(car);
        // console.log(carHTML);
  
        // console.log(carsList);
        // insert the HTML in the list
        carsList.insertAdjacentHTML('beforeend', carHTML);
      });
      
    });
};

export { getAPI };