/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

Javascript UI framewokrs and libraries

Angular, React, Vue.js, Backbone, Knockout, and Ember
Angularjs, jquery
advancement from Angular and React over jQuery
and Vue.js over backbone, knockout(microsoft) and ember

angular written in typescript so its preferable there

React is more popular with Rails, Node.js, and Python developers.
Angular is more visited amongst C#, Java, and (to a degree) PHP developers
PHP It is designed for and primarily used for web development,



------------------------------------------------------

React
. Reusability of components
. Well supported due to its popularity
. React is not opinionated, which means that it won’t force you to 
. follow any specific design patterns, project organizational structure, 
 or logic. It’s all up to you.
. Smaller learning curve, especially when you already have a good grasp 
  of JavaScript and HTML from our previous lessons.


Node.js and React.js are the two most common web technologies used by 
Professional Developers and those learning to code.


React is quick,
    just tell what you want to happen without state translation

React Native can be used on Android and iOS 

React community
React tools like React Profiler and React devtools

Saves time and money on development because it's component-based
can break down an interface into reusable components
to build dynamic user interfaces

Used by huge organizations
even though js libraries are not SEO friendly
react is the most friendly among js libraries
easier for google to crawl

makes full use of JS's capabilities
and is flexible and back-end agnostic

working in JS allows to work between front-end and back-end

React is easy to learn

React does change but does not remove API's very often
and will benefit from team's commitment to maintaining backwards compatibility


/*////////////////////////////////////////////////////////////////////*/
/*

Applications built with react are made with: Reusable components
which are Building blocks

learn to divide an application/project into separate components
(modules)
then these comp. have sub components

for example main app page, nav bar, main content, etc.
nav bar has icon, menu, search )sub components



each component is defined in an ES6 module
using the import statement
to import code from one module into another module

//write each components in a separate file
and import all components into the parent component


component structure
react components usually have parent and/or child components

this makes code more organized and easy to track components



PascalCase: NewObject;
camelCase: newObject;

/*////////////////////////////////////////////////////////////////////*/
/*
//App.js code example

//import
//App class
//render
//export



import React, { Component } from 'react';
import ReactDOM from "react-dom";

//Default exports are imported without curly brackets; everything else must be wrapped in curly brackets.
//all react like classes/factoryFns, capital beginning, to differentiate from normal js code


//comments in react
{
    /* comment here * /
}



//extending the React class Component, by App class
//Reactifying the "App", giving it all of the methods and properties.

class App extends Component {

    //constructor important when there is inheritance and state 
    constructor(props) {
        super(props)
    }

}

//to access props in the constructor
//call the parent class constructor by super(props)


//combine javascript and JSX
// render() return JSX (html like syntax) 
// that is transpiled/converted into javascript
// so browser can process it
// every React class component needs a render function

// do not use JS protected names as html attributes
// rename into camelCase 

// wrap multiple items into a single parent element

render() {
    return (
        <div className="App">
            <h1>Hello world</h1>
            <h2>Welcome to my React page!</h2>
        </div>
    )
}



//to be able to reuse this App component

export default App;
//export App2;
//export { ComponentA, ComponentB, ComponentC };


//when importing, a default export.. no curly brackets
// multiple exports.. curly brackets


////in Main.js

import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './app/Hello.jsx';

ReactDOM.render(<App />, document.getElementById('root'));



//"Rendering" is any time a function component gets called 
// (or a class-based render method gets called) which returns a 
// set of instructions for creating DOM.

//"Mounting" is when React "renders" the component for the 
// first time and actually builds the initial DOM from those instructions.



/*////////////////////////////////////////////////////////////////////*/
/*
//another example

import React from "react";
import ReactDOM from "react-dom";


//This component class itself is not a component but a 
//factory that is used to create components.
//extends: class as a child/sub-class of another class

//render() is a function that defines what should be returned in a component. 
//react element, a string or number or even a component.
//should be pure, not modify component state


class Greeting extends React.Component {
  render() {
    return (
      <div className = "box">
        <h2> Hello Human Friend!!!</h2>
        <p> We are so glad to have you here. </p>
      </div>
    );
  }
}

ReactDOM.render(<Greeting />, document.getElementById("app"));


//causes component to appear on the screen
//a self closing tag must always contain the forward slash 
 //before the closing angle bracket in JSX

//now <Greeting /> component is reusable across parts of any app




/*////////////////////////////////////////////////////////////////////*/
/*
more modern, approach is to define the component 
as a function (like a factory function).

this way we:
We don’t have to import and extend “Component” from React.
We don’t need a constructor.
We don’t need the render function, instead we put the return statement 
    right at the end of the function body.


import React from 'react';


function App() {
  return <div className="App">Hello World!</div>;
}

// OR (arrow-function syntax)
const App = () => {
  return <div className="App">Hello World!</div>;
};

// OR (implicit return)
const App = () => <div className="App">Hello World!</div>;


export default App;


/*////////////////////////////////////////////////////////////////////*/
/*

understanding the difference between functional and class based components


//A state is a JavaScript object containing information about 
//the component's current condition.



class Hello extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      name: props.name // Not recommended, but OK if it's just used as seed data.
            //this.props.name;?
    };
  }

  render() {
    return <h1>Hello, {this.state.name}</h1>;
  }
}

// Render
//render an Hello in the place of the (div with id=root) like this:

ReactDOM.render(
  Hello,
  document.getElementById('root')
);


---------------------------

shouldn't modify the state directly because it will 
not trigger a re-render of the component:

this.state.comment = 'Hello'; // Don't do this
this.setState({comment: 'Hello'}); // Do this

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

This can become cumbersome, so the use of the [immutability-helper](https://github.com/kolodny/immutability-helper) package is recommended.
https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react

check for more spreading nesting examples
https://dev.to/colocodes/react-class-components-vs-function-components-23m6


Life cycle methods:
render()
componentDidMount()
componentDidUpdate()
componentWillUnmount()
shouldComponentUpdate()
static getDerivedStateFromProps()
getSnapshotBeforeUpdate()


////ex////rendering function components is as same as class components
const Welcome = (props) => {
    const [timeOfDay, setTimeOfDay] = useState('morning');
    return <h1>Hello, {props.name}, good {timeOfDay}</h1>;
}

//Render
const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
//////////



////ex////
//state in function components, 
//define an array that will have to main elements
//value of state and function to update said state
//assign the useState hook(hook into react features) to that array
//hooks are used when have a function component
  and want to add some state to it


import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

//but in class components we can use
<button onClick={() => this.setState({ count: this.state.count + 1 })}>
  Click me
</button>


//using props in function components
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

//choosing between class/function components depends on the project
//but function components are popular now


*/


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
create-react-app
tool Facebook developed which setups a complete react application for you
setup, configuration 


//a popular toolchain for building simple React Apps
//toolchain: a set of distinct software development tools that are 
    linked (or chained) together by specific stages
In React development, different toolchains satisfy different requirements 
for product development. For instance, Next.js is great for building a server-rendered website, 
and GatsbyJS is optimized for static, content-oriented websites like blogs and newsletters.


//to check this command
npx create-react-app my-first-react-app
cd my-first-react-app
npm start   //to view the project in browser


this will create index.js and App.js
index.js: entry point for your application by default


//render the app components into the DOM's id=root element
//to change name, change "App" in .js and in index render also


//folders
//node modules: packages you want to use by calling an import statement
//public: contains index.html and manifest.json

//public/index.html: the main file served on the browser
and bundled scripts (webpack bundle.js result) placed into the body
webpack is used here
html-webpack-plugin
This final page is the one you get in build/index.html after 
running npm run build, and the one that gets served from / when you 
run npm start.

//public/manifest.json
describes your application
used to populate the web app’s icons, colors, names, etc.
and used by phones for example if a shortcut is added to home screen
https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/


//package.json
contains scripts







*/