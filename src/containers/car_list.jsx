import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarList extends Component {
  renderList = (car) => {
    return (
      <li key={car.id}>
        {car.id}
      </li>
    );
  }

  render() {
    const { cars } = this.props;
    return (
      <ul>
        {cars.map(this.renderList)}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  };
}

export default connect(mapStateToProps)(CarList);
