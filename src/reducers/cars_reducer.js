import { FETCH_CARS } from '../actions/index';

const carsReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_CARS:
      return action.payload.cars;
    default:
      return state;
  }
};

export default carsReducer;
