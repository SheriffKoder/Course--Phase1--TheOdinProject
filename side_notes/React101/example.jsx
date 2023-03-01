/**
 * react components usually have parent and/or child components
 * react should be pure, not modify component state
 * 
 */


//"Rendering" is any time a function component gets called 
// (or a class-based render method gets called) which returns a 
// set of instructions for creating DOM.

//"Mounting" is when React "renders" the component for the 
// first time and actually builds the initial DOM from those instructions.


//comments in react
{
    /* comment here */
}


import React, {Component} from 'react';
import ReactDOM from "react-dom";

//Default exports are imported without curly brackets; everything else must be wrapped in curly brackets.
//all react like classes/factoryFns, capital beginning, to differentiate from normal js code


//App has React.Component methods now
//class Hello extends React.Component

//A state is a JavaScript object containing information about 
//the component's current condition.
//shouldn't modify the state directly because it will 
//not trigger a re-render of the component:
//this.setState({comment: 'Hello'}); // Do this



class App extends Component {

    //can put the render here without constructor
    constructor(props) {
        super(props);


        //using state
        this.state = {
            name: props.name,
            //this.porps.name

            //used in render state functions
            count: 0,
        }



        //if state depends on a previous one, take into account the prev one
        //setState is asynchronous
        this.setState(function(prevState, prevProps) {
            return {
            counter: prevState.counter + prevProps.increment
            };
        });



        //If we need to set a state with nested objects, we should spread all 
        //the levels of nesting in that object:

        this.setState(prevState => ({
            ...prevState,
            someProperty: {
                ...prevState.someProperty,
                someOtherProperty: {
                    ...prevState.someProperty.someOtherProperty, 
                    anotherProperty: {
                    ...prevState.someProperty.someOtherProperty.anotherProperty,
                    flag: false
                    }
                }
            }
        }))
        // This can become cumbersome, so the use of the [immutability-helper](https://github.com/kolodny/immutability-helper) package is recommended.
        // https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react

        // check for more spreading nesting examples
        // https://dev.to/colocodes/react-class-components-vs-function-components-23m6


    }

}

//to access props in the constructor
//call the parent class constructor by super(props)


// render() return JSX (html like syntax) 
// that is transpiled/converted into javascript
// so browser can process it
// every React class component needs a render function

// do not use JS protected names as html attributes
// rename into camelCase 

// wrap multiple items into a single parent element


render () {
    return {
        <div className="App">
            <h1> hello world </h1>
            <h2> Welcome to my React Page </h2>
        </div>

        //using state functions
        <button onClick={() => 
            this.setState({ count: this.state.count + 1 })}>
        Click me
        </button>
    }
}


//to be able to reuse this App component
export default App;
//export App2;
//export { ComponentA, ComponentB, ComponentC };


//
ReactDOM.render(
    App,
    document.getElementById('Div_With_Id')
  );



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* function components */

import React, { useState } from 'react';

//function App () {
const App = (props) => {


    //////////////////////////////////////
    const [timeOfDay, setTimeOfDay] = useState('morning');  //set value to morning

    return {
        <div className="App">
            <h1> hello {props.name} </h1>
            <h2> good {timeOfDay} </h2>
        </div>

        <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
        />

    };



    //////////////////////////////////////
    ////another example, using states and function states
    //define an array that will have to main elements
    //value of state and function to update said state
    //assign the useState hook(hook into react features) to that array
    //hooks are used when have a function component
        //and want to add some state to it

    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    // here using count and setCount as a function like {return count+1}
    return (
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
            Click me
        </button>
        </div>
    );



}

export default App;

//Render
const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
//////////

//choosing between class/function components depends on the project
//but function components are popular now




/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*Main.js */


import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';

ReactDOM.render(<App />, document.getElementById('root'));








/**
 ** Life cycle methods:
 * render()
 * componentDidMount()
 * componentDidUpdate()
 * componentWillUnmount()
 * shouldComponentUpdate()
 * static getDerivedStateFromProps()
 * getSnapshotBeforeUpdate()
 */