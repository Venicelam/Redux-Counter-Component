import React, { Component } from 'react'
import Counter from './Counter.js'

class CounterGroup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counterSum: 0,
      count: 0,
        counterArr: new Array(parseInt(this.props.size)).fill(0),
        sum:0
    }
  }
  regenerateCounters =()=> {
    this.setState({
      counterArr: new Array(parseInt(this.refs.countInput.value)).fill(0),
      counterSum: 0
    });
  }

  updateSum=(delta) => {
    this.setState({sum: this.state.sum+delta})
  }
  render() {
    return (
      <div>
        <input type="text" ref="countInput" />
        <button onClick ={this.regenerateCounters}>
        Create Counter
        </button>
        {this.state.counterArr.map(() => <Counter onUpdate={this.updateSum}/>)}
        <span>sum: {this.state.sum}</span>
      </div>
    )
  }
}

export default CounterGroup;