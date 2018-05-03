import React, { Component } from 'react';
import '../styles/Fruits.css';

import Prices from './Prices';

class Fruits extends Component {
  importAll(r) {
    return r.keys().map(r);
  }

  render() {
    const images = this.importAll(require.context('../images/fruits', false, /\.(png)$/));

    return (
      <div className="fruits">
        {Object.keys(this.props.pieces).map((key, idx) => {
          key
          return (
            <div key={idx} className="fruit">
              <div className="image-container">
                <img src={images[idx]} alt={key} onClick={() => this.props.newItem(idx, key)}/>
              </div>
              <div className="details">
                <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                <Prices price={this.props.prices[key]}/>
              </div>
            </div>
          )
        })
      }
      </div>
    )
  }
}

export default Fruits;
