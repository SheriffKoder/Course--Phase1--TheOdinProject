
import React, { useState, setState } from 'react';
import ReactDOM from 'react-dom';


////////////////////////////////////////////////////////////
////component1

class APP_1A extends React.Component {
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

  return (
    <div>
      <h1> Hello World 1B {props.name} its {timeOfDay} </h1> 
      <p> You clicked {count} times </p>

      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )

}

const element_1A = <APP_1A name="SheriF" height="200" />;
const output_1A = document.getElementById("rootDiv1");
ReactDOM.render( element_1A, output_1A );


const element_1B = <APP_1B name="SheriF" />;
const output_1B = document.getElementById("rootDiv2");
ReactDOM.render( element_1B,output_1B );


export { APP_1A, APP_1B };