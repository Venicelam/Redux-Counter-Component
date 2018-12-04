import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import CounterGroup from './CounterGroup.js'

class Counter extends Component {
  constructor() {
    super()
  this.state = {number: 0}
  }
  incrementNumber = (id)=> {
    this.props.onIncreased(1, id);
    this.props.onCounterValueChange(1)
  }
  decrementNumber = (id)=> {
    this.props.onDecreased(1, id)
    this.props.onCounterValueChange(-1);
  }

  render() {
    return (
      <div className="App">
      <button type="button" onClick = {() => this.incrementNumber (this.props.id)} > + </button>

      <span>{this.props.counterNum}</span>  
      <button type="button" onClick ={() => this.decrementNumber (this.props.id)} > - </button>
       
      </div>
    );
  }
}


export default Counter;
