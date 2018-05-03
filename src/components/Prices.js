import React, { Component } from 'react';

class Prices extends Component {
  render() {
    return (
      <div>
        <p>{this.props.price} CHF</p>
      </div>
    );
  }
}

export default Prices;
