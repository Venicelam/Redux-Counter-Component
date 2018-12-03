import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {number: 0}
  incrementNumber = ()=> {
    this.setState({number: this.state.number +1 })
  }
  decrementNumber = ()=> {
    this.setState({number: this.state.number -1 })
  }
  render() {
    return (
      <div className="App">
       <button type="button" onClick = {this.incrementNumber} id="push"> + </button>

          <span>{this.state.number}</span>  
		  <button type="button" onClick ={this.decrementNumber} id="push"> - </button>
      </div>
    );
  }
}

export default App;
