import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from "redux";

// initial state 
const intitalState = 0;

//reduce -> how state changes
const countReducer = (state=intitalState, action) => {
   switch(action.type){
     case "INCREMENT":
     return state + 1;
    case "DECREMENT":
     return state - 1;
    default: 
      return state; 
   }
};


//creation of the store

const store = createStore(
  countReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
