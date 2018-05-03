import React, { Component } from 'react';
import '../styles/App.css';

import Fruits from './Fruits';
import Content from './Content';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        apples: 0,
        bananas: 0,
        oranges: 0,
        papayas: 0,
    }

    this.prices = {
      apples: 0.25,
      bananas: 0.15,
      oranges: 0.30,
      papayas: 0.50
    }
  }

  newItem(idx, key){
    const items = this.state;
    items[key] = this.state[key] + 1;
    console.log(this.state);
    this.setState({
      ...items
    })
  }

  substract(key){
    const items = this.state;
    if(items[key] > 0) {
      items[key] = this.state[key] - 1;
    } else {
      items[key] = 0;
    }

    this.setState({
      ...items
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Click on a fruit to add to basket!</h1>
        <Fruits pieces={this.state} prices={this.prices} newItem={this.newItem.bind(this)}/>
        <hr/>
        <Content pieces={this.state} prices={this.prices} substract={this.substract.bind(this)}/>
      </div>
    );
  }
}

export default App;
