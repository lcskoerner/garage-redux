import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import CarList from './containers/car_list';
//import CarsShow from './containers/cars_show';
import CarNew from './containers/car_new';

import '../assets/stylesheets/application.scss';

import carsReducer from './reducers/cars_reducer.js';

// State and reducers
const garageName = prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`;
const initialState = {
  garage: garageName,
  cars: []
};

const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: carsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div className="view-container">
        <Switch>
          <Route path="/" exact component={CarList} />
          <Route path="/cars/new" exact component={CarNew} />
          {/* <Route path="/cars/:id" component={CarsShow} /> */}
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.querySelector('.container')
);
