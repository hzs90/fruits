import React, { Component } from 'react';
import '../styles/Content.css';
import minus from '../images/others/minus.png';

import Item from './Item';

class Content extends Component {
  totalCost(){
    var totalPrice = 0;
    let pieces = this.props.pieces;
    let prices = this.props.prices;
    console.log(totalPrice)
    {Object.keys(pieces).map((key) => {
      if(pieces[key] > 0 && key != "papayas"){
        totalPrice = totalPrice + pieces[key] * prices[key];
      } else if (pieces[key] > 0 && key === "papayas"){
        totalPrice = totalPrice + pieces[key] * prices[key] - (Math.floor(pieces[key]/3)) * prices[key];
      }
    })}
    return totalPrice.toFixed(2);
  }

  subtotal(key){
    let pieces = this.props.pieces[key];
    let price = this.props.prices[key];
    let subtotal = (pieces * price).toFixed(2);
    if (key === "papayas") {
      let discount = (Math.floor(pieces/3)) * price;
      console.log(discount)
      return (subtotal - discount).toFixed(2);
    } else {
      return subtotal;
    }
  }

  render() {
    var {pieces, prices} = this.props;

    return (
      <div className="order">
        {Object.keys(pieces).map((key, idx) => {
          if(pieces[key] > 0){
            return (
              <table className="row" key={idx}>
                <td className="text">{key}</td>
                <td>
                  <img src={minus} alt="" onClick={() => this.props.substract(key)}/>
                </td>
                <td className="text">{pieces[key]} pc(s)</td>
                <td className="subtotal"> {this.subtotal(key)} CHF</td>
              </table>
            )
          }
        })}
        <hr/>
        <div className="total">{this.totalCost()} CHF</div>
      </div>
    );
  }
}

export default Content;
