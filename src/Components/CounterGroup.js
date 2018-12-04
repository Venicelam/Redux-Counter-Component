import React, { Component } from 'react'
import Counter from './Counter.js'

class CounterGroup extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
        counter: new Array(prop.size).fill(0),
        sum:0
    }
  }
  updateSum=(delta) => {
    this.setState({sum: this.state.sum+delta})
  }
  render() {
    return (
      <div>
        {this.state.counter.map(() => <Counter onUpdate={this.updateSum}/>)}
        <span>sum: {this.state.sum}</span>
      </div>
    )
  }
}

export default CounterGroup;