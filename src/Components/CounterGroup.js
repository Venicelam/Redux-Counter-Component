import React, { Component } from 'react'
import Counter from './Counter.js'
import { connect } from "react-redux"

class CounterGroup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //counterSum: 0,
      counters: new Array(parseInt (this.props.size)).fill(0).map(() =>{
        return {number: 0, id: new Date().getTime + Math.random() };
      }),
        count: 0,
        //counterArr: new Array(parseInt(this.props.size)).fill(0),
        sum:0
    };
    this.props.dispatch({
      type: "GENERATE_COUNTERS",
      payload: parseInt(this.props.size)
    });
  }
  regenerateCounters =()=> {
    this.setState({
      counters: new Array(parseInt(this.refs.countInput.value)).fill(0).map(() =>{
        return {number: 0, id: new Date().getTime + Math.random() };
      }),
      counterSum: 0
    });
  }

  increaseUpdateSum = changedNum => {
    //this.setState({ sum: this.state.sum + changedNum});
    this.props.dispatch({
      type: "COUNTERSUM",
      payload: changedNum
    });
  }

  increaseUpdate = (changedNum, id) => {
    this.props.dispatch({
      type: "INCREASE_ONE_COUNT",
      payload: {changedNum, id}
    });
  //   const counters = this.state.counters.map
  //   (counterItem => {
  //     if (counterItem.id ===id){
  //       return {number: counterItem.number +
  //       changedNum, id: id};
  //     } else {
  //       return counterItem;
  //     }
  // });
    //console.log(counters)
   // this.setState({ counters: counters});
  };

  decreaseUpdate = (changedNum, id) => {
    this.props.dispatch({
      type: "DECREASE_ONE_COUNT",
      payload: {changedNum, id}
    });
  };
  //   const counters = this.state.counters.map
  //   (counterItem => {
  //     if (counterItem.id ===id){
  //       return {number: counterItem.number -
  //       changedNum, id: id};
  //     } else {
  //       return counterItem;
  //     }
  // });
  //   console.log(counters)
  //   this.setState({ counters: counters});
  // };

  updateSum=(delta) => {
    this.setState({sum: this.state.sum+delta})
  }
  render() {
    console.log(this.state.counters);
    return (
      <div>
        {this.props.counters.map(counterItem => (
          <Counter
          key={counterItem.id}
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
        <span>sum: {this.props.counterSum}</span>
      </div>
    )
  }
}



//export default CounterGroup;
const mapStateToProps = state => ({
  counterSum: state.counterSum,
  counters: state.counters
});
 connect(mapStateToProps)(CounterGroup)
 export default connect(mapStateToProps)(CounterGroup);
