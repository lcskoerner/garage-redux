/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-class-assign */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Aside from '../components/aside';
import { addCar } from '../actions';

class CarNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: '',
      model: '',
      owner: '',
      plate: ''
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addCar(this.props.garage, this.state, () => {
      this.props.history.push('/');
    });
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render () {
    return [
      <Aside key="aside" garage={this.props.garage}>
        <Link to="/">Back to list</Link>
      </Aside>,
      <div key="add" className="form-container" style={{ backgroundImage: "url('/assets/images/form.jpg')"}}>
        <div className="overlay"></div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="InputBrand">Brand</label>
            <input
              name="brand"
              type="text"
              placeholder="Aston Martin"
              component="input"
              className="form-control"
              value={this.state.brand}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputModel">Model</label>
            <input
              name="model"
              type="text"
              placeholder="DB7"
              component="input"
              className="form-control"
              value={this.state.model}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputOwner">Owner</label>
            <input
              name="owner"
              type="text"
              placeholder="James Bond"
              component="input"
              className="form-control"
              value={this.state.owner}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputPlate">Plate</label>
            <input
              name="plate"
              type="text"
              placeholder="123AZ56"
              component="input"
              className="form-control"
              value={this.state.plate}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Add car</button>
        </form>
      </div>
    ];
  }
}

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

export default connect(mapStateToProps, { addCar })(CarNew);
