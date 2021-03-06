import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CounterGroup from "./Components/CounterGroup";
import reducer from "./reducer";
import {createStore} from "redux";
import { Provider } from "react-redux";

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
const store = createStore(reducer);


ReactDOM.render(
  <Provider store={store}> 
    <CounterGroup size="3" />
  </Provider>,
  document.getElementById("root")
);
