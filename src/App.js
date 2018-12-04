import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter.js'
import CounterGroup from './Components/CounterGroup.js'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: '',
          items:[]
        };       
      }
    
    onChange = (event) => {
        this.setState({ count: event.target.value });
      }
    
    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
          count: '',
          items: [...this.state.counter]
        });
      } 
  render() {
    return (
    <div>
  
    <CounterGroup size={3}/>
    </div>
    );
  }
}

export default App;