
import React, { Component, useState, setState } from 'react';
import ReactDOM from 'react-dom';

import {tick} from './components/tickingClock.js' //not default import


////////////////////////////////////////////////////////////
////component1

class APP_1A extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      height: props.height
    }
  }




  render() {
    return (
    <div className="APP_1A">
        <h1> Hello {this.props.name} your height is {this.props.height} </h1>
      </div>
    )
  }


}





////////////////////////////////////////////////////////////
////component2
//function, setting states the function way

const APP_1B = (props) => {

  const [timeOfDay, setTimeOfDay] = useState('Monday');
  const [count, setCount] = useState(0);
  const AppID = "1B";

  return (
    <div>
      <h1> Hello World {AppID} {props.name} its {timeOfDay} </h1> 
      <p> You clicked {count} times </p>

      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )

}


//the idea is that you render and element to a root
//what ever this element has


//rendering
const element_1A = <APP_1A name="SheriF" height="200" />;
const output_1A = document.getElementById("rootDiv1");
ReactDOM.render( element_1A, output_1A );

//another way of rendering , createRoot
const element_1B = <APP_1B name="SheriF" />;  //JSX element
const output_1B = ReactDOM.createRoot(document.getElementById('rootDiv2')); //Root element
output_1B.render(element_1B);


//can pass JSX to function
//however setInterval do not accept () after tick so no inputs passed

let toCheck = (
  <p> one </p>
);
tick(1,1,toCheck);
setInterval(tick, 3000);




export { APP_1A, APP_1B };