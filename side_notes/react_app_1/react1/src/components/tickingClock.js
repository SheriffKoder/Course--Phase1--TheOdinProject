
import React, { Component, useState, setState } from 'react';
import ReactDOM from 'react-dom';


const root3Div = ReactDOM.createRoot(
    document.getElementById('rootDiv3')
  );
  
  const root4Div = ReactDOM.createRoot(
    document.getElementById('rootDiv4')
  );
  
  
//function we normally return JSX as a value
//to attach to a root to render
//but here we rendered internally, so no need to return
//the function takes care of itself

//and sent the interval call to App.js to use export


function add(a,b) {
    return a+b;
}


function checkInput(input) {

    let toCheck = (
        <p> one </p>
    );

    if (input == toCheck) {
        return (<p> one </p>);
    }
    else {
        return (<p> clock input not right </p>);
    }
}


//can export right away
//can use js code inside {} and use that in the component call
export function tick(num1, num2, input) {
    const clockJsxElement = (
        <div>
            <h2>Time now is {new Date().toLocaleTimeString()}.</h2>
            <p> one plus one equals {add(num1,num2)} </p>
            <p> {checkInput(input)} </p>
        </div>
    );
    root3Div.render(clockJsxElement);
    }

  
  
  //setInterval(tick, 1000);

  //export {tick};    //not default export