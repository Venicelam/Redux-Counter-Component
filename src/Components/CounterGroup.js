import React, { Component } from 'react'
import Counter from './Counter.js'

class CounterGroup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counterSum: 0,
      counters: new Array(parseInt (this.props.size)).fill(0).map(() =>{
        return {number: 0, id: new Date().getTime + Math.random() };
      }),
        count: 0,
        counterArr: new Array(parseInt(this.props.size)).fill(0),
        sum:0
    };
  }
  regenerateCounters =()=> {
    this.setState({
      counterArr: new Array(parseInt(this.refs.countInput.value)).fill(0),
      counterSum: 0
    });
  }

  increaseUpdateSum = changedNum => {
    this.setState({ sum: this.state.sum + changedNum});
  }

  increaseUpdate = (changedNum, id) => {
    const counters = this.state.counters.map
    (counterItem => {
      if (counterItem.id ===id){
        return {number: counterItem.number +
        changedNum, id: id};
      } else {
        return counterItem;
      }
  });
    console.log(counters)
    this.setState({ counters: counters});
  };

  decreaseUpdate = (changedNum, id) => {
    const counters = this.state.counters.map
    (counterItem => {
      if (counterItem.id ===id){
        return {number: counterItem.number -
        changedNum, id: id};
      } else {
        return counterItem;
      }
  });
    console.log(counters)
    this.setState({ counters: counters});
  };

  updateSum=(delta) => {
    this.setState({sum: this.state.sum+delta})
  }
  render() {
    console.log(this.state.counters);
    return (
      <div>
        {this.state.counters.map(counterItem => (
          <Counter
          //key={new Date().getTime() +Math.random()}
          id={counterItem.id}
          onCounterValueChange = 
          {this.increaseUpdateSum}
          onIncreased={this.increaseUpdate}
          counterNum={counterItem.number}
          onDecreased={this.decreaseUpdate}
         />
            
        ))}
        <input type="text" ref="countInput" />
        <button onClick ={this.regenerateCounters}>
        Create Counter
        </button>
        {/* {this.state.counterArr.map(() => <Counter onUpdate={this.updateSum}/>)} */}
        <span>sum: {this.state.sum}</span>
      </div>
    )
  }
}



export default CounterGroup;