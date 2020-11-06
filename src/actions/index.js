/* eslint-disable quote-props */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
// TODO: add and export your own actions
export const fetchCars = (garage) => {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  const promise = fetch(url)
    .then((response) => response.json());

  return {
    type: 'FETCH_CARS',
    payload: promise
  };
};

export const addCar = (garage, car, callback) => {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  const request = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  }).then((response) => response.json())
    .then(() => callback());

  return {
    type: 'ADD_CAR',
    payload: request
  };
};

export const removeCar = (history, car) => {
  const url = `https://wagon-garage-api.herokuapp.com/cars/${car.id}`;
  fetch(url, { method: 'DELETE' })
    .then((r) => r.json())
    .then(() => history.push(""));

  return {
    type: 'REMOVE_CAR',
    payload: car
  };
};
