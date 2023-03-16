
import React from 'react';
import ReactDOM from 'react-dom';
import {APP_1A, APP_1B} from './App.js';


import './index.css';
import reportWebVitals from './reportWebVitals';



let myDiv1 = document.getElementById('rootDiv1');
ReactDOM.render(<APP_1A name="SheriF" height="200" />, myDiv1);



const element_1B = <APP_1B name="SheriF" />;
const output_1B = document.getElementById("rootDiv2");
ReactDOM.render( element_1B,output_1B );






/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App_1A />
  </React.StrictMode>
);
*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
