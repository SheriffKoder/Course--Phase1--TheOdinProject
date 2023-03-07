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
contains scripts like start, build, test, eject

Yarn is a package manager for JS dependencies
alternative to the default Node.js package manager (npm)
package managers allow use of packages/modules

package.lock.json instead of yarn.lock if npm used when yarn not installed


/*////////////////////////////////////////////////////////////////////*/
/*

Any application can be built by stripping stuff out and tweaking 
the App.js

can build React components separately inside a 
src/components/folder and import these components inside App.js.

There is a root component, <App>
that imports other child components
which in turn import other child components.

Data flows from root to children through 
React properties (called “props)
and flows back up using callback functions.

App.css file can be used for styling the application.


step1: edit the card.js in src/components
step2: edit App.js


Yarn was created by Facebook in order to solve problems with npm
Yarn has less installation duration, more secure


/*////////////////////////////////////////////////////////////////////*/
/*

React Developer Tools
extension to the browser's developer tools
allows inspect react components that build the page

helps check and edit component tree as well as props, state, hooks


Debugging a react app
can be when using chrome dev on a site using react
the react button will be lighted up and
there will be components tab after elements,sources etc



Sometimes you may see components in the tree named Anonymous. 
This is usually caused by developers exporting the component 
as an unnamed default using syntax
//you can change that by adding names after default
export default () => {...};
export default function() {...}
export default class extends Component {...}


////DOM element.render////
//display a heading saying “Hello, world!” on the page.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello, world!</h1>);


React doesn't require using JSX
but it allows react to show more useful error warning messages


//declare name and use it inside jsx
const name = "john";
const element = <h1> Hello, {name} </h1>

//you can put any javascript code inside curly brackets
//for example 2+2, user.firstName, formatName(user) etc.



//it is preferred to separate with line breaks and wrap in ();


const element = (
    <h1> 
    Hello, {name} 
    </h1> 
);


//after compilation, JSX expressions become regular JS function calls
//and evaluate to JS objects

// jsx lines can be used as variables
// use inside if/for, argument, return it from functions


// You should either use quotes (for string values) or curly braces 
// (for expressions), but not both in the same attribute.
const element = <img src={user.avatarUrl}></img>;
const element = <a href="https://www.reactjs.org"> link </a>;


**ReactDomElement = render.element = jsx html line = contains {js code}


// as React uses camelCase property naming
// for example class becomes className in JSX, and tabindex becomes tabIndex.

// If a tag is empty, you may close it immediately with />, like XML:
const element = <img src={user.avatarUrl} />;


//React DOM ensured you never inject anything not explicity written
in your application, everything is converted to a string before being rendered
// this helps prevent XSS cross-site-scripting attacks



//////////////////////////////////////
//rendering an element
//say there is a div with id root in html file

//create it as a root
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

//create JSX element
const element = <h1>Hello, world</h1>;

//render the root with this element
root.render(element);

//example: ticking clock
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element); //root already declared
}

setInterval(tick, 1000);


//////////////////////////////////////
// Components let you split the UI into independent, 
// reusable pieces, and think about each piece in isolation

// components are like JavaScript functions. 
// They accept arbitrary inputs (called “props”) 
// and return React elements describing what should appear on the screen.

//accepts a single object with data and returns a react element
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

or with class

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}


**the element has a (html line function) component's name
**beside it specify the property key and value
**then root.render(element)


//{name: "Sara"} is the prop, 
const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Sara" />;
root.render(element);

//component names start with capital letter
//DOM tags start with lower case 


**
//an "App" component that renders "Welcome" component 
//many times with different values
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}


/*/////////////////////////////////*/
/*/////////////////////////////////*/
/*
//if part of UI is complex or used several times
//try to extract from it into separate components



function Comment(props) {
  return (
    <div className="Comment">
//      <div className="UserInfo">
///        <img className="Avatar"
///          src={props.author.avatarUrl}
///          alt={props.author.name}
///        />
//        <div className="UserInfo-name">
//          {props.author.name}
//        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}


//function uses props = component
//contains divs and image with className
//the image has attr of {props.}
//the divs have content of {props.} 
and another component with passed {props.}
//props used: author.avatarUrl/name, text, date


////took this and wrapped into function(props) and return

function Avatar (props) {
    return (
//        <img className="Avatar"
//          src={props.user.avatarUrl}
//          alt={props.user.name}
//        />
    );
}


//like welcome and i need only user other the nested keys are in the component
///<Avatar user={props.author} />
//will be placed instead of the image tag

/*/////////////////////////////////*/
/*

function UserInfo (props) {
    return (

//      <div className="UserInfo">
///        <Avatar user=props.user />
//        <div className="UserInfo-name">
//          {props.user.name}
//        </div>

    );
}


<UserInfo user={props.author} /> //author is passed to comment
                                 //user is used inside the components




*/

/*/////////////////////////////////*/
/*/////////////////////////////////*/
/*

//components must not change their props (parameters)
//they can return values depending on the inputs
//but not return the inputs changed

//Rule: All React components must act like pure functions 
//with respect to their props.



//Ok
function sum(a, b) {
  return a + b;
}

//not Ok
function withdraw(account, amount) {
  account.total -= amount;
}


//state, allows react components to change their output
//over time in response to user actions, network responses etc.
//without violating this rule

https://reactjs.org/docs/components-and-props.html



/*/////////////////////////////////*/
/*/////////////////////////////////*/
/*


React is a library for creating user interfaces
builds single components or widgets
angular 2 supports building whole single page applications

import React from "react";
import { render } from "react-dom";

//App is the root component
//can only return one element/wrapper but it can have other nested elements
//can use bootstrap class names in className to give style
class App extends React.Component {

    //needs to return what should be rendered
    render () {
        return (
            <div> 
                <h1> Hello!</h1>
            </div>
        )
    }
}

//in html
<div id="app"> </div

render(<App/>, window..Document.getElementByID("app"));

/*/////////////////////////////////*/
/*/////////////////////////////////*/
/*

//create new components in the components folder
//header.js and home.js

//header.js

import React from "react";

export Class Header extends React.Component {

    render () {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <div className="nav navbar-nav">
                            <li><a href="#"> Home</a></li>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }

}


////in Home.js

import React from "react";

export class Home extends React.Component {
    render () {
        return (
            <div>
                <p> In a new Component </p>
            </div>
        );
    }
}


////in index.js

import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {

    render () {
        return (
            <div className="container"> 
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home/>
                    </div>
                </div>
            </div>
        )
    }
}


//in html
<div id="app"> </div

render(<App/>, window..Document.getElementByID("app"));



/*////////////////////////////////////////////////////////////////////*/
/*


//react library has nothing to do with the browser
//so we use react-dom (was included before)

//setting up React environment without create-new-react-app

# npm init
# npm i react react-dom

//webpack is what allows react to share modules together
//and webpack dev server for having a local host

# npm i --save-dev webpack webpack-dev-server webpack-cli


//transpile ES6 code into browser friendly code
//babel preset react and babel preset env
//also a loader to compile jsx
//html webpack plugin

# npm i --save-dev babel-core babel-loader babel-preset-env babel-preset-react html-webpack-plugin

>>create webpack.config.js


////// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


//__dirname (current directory), ./dist (directory for bundle file) and its name
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]

}

/////////////////////

>> create ./.babelrc

{
    "presets": ["env", "react"]
}




/////////////////////
//package.json

>> scrips > replace test
with 
"start" : webpack-dev-server --mode development --open --hot",
"build" : "webpack --mode production"



>> create src/index.html, index.js
//this is the place for anything related to react application

//import and write code normally

//npm start


//this is a file to use react without un-necessary stuff
//with hot reload

ctrl c to stop
npm run build //will create the bundle file in dist folder

https://www.youtube.com/watch?v=deyxI-6C2u4



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

npm is a library of tools, libraries that you can download and use 

in html
<script src="https://unpkg.com/react016.5.1/....js"/>
<script src="https://unpkg.com/react-dom016.5.1/....js"/>
<script src="https://unpkg.com/babel/....js"/>


in console write
ReactDOM //this will give all ReactDOM methods

const root = document.getElementById('root');

const Element = React.createElement("div", [
    className: 'container,
    children:[
        'Current Time', //text
        Date.now().toLocaleString(),
        React.createElement('span', [children: 'Hey there!']);
    ] 
])

//ReactDOM.render(element, container, callback);
ReactDOM.render(Element, root);

//if got syntax error for using jsx
//can enter babeljs.io
//paste jsx code and will output a js code

const string = `
    sweet! ${js_expression}
`;



*/


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
//props


// MyComponent.js

import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={this.props.onButtonClicked}>Click Me!</button>
      </div>
    );
  }
}

export default MyComponent;



// App.js

import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this);
  }

  onClickBtn() {
    console.log('Button has been clicked!');
  }

  render() {
    return (
      <div>
        <MyComponent title="React" onButtonClicked={this.onClickBtn} />
      </div>
    );
  }
}


//another way to render, called destructing props
//In functional components, you would destructure outside 
//of the return statement or inside the parameter parentheses of the functional component
render() {
    const { title, onButtonClicked } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <button onClick={onButtonClicked}>Click Me!</button>
      </div>
    );
  }
}


export default App;


//React supported events
https://reactjs.org/docs/events.html


/*////////////////////////////////////////////////////////////////////*/
/*
//State
//values that can change over time

//state is immutable
//should never change state directly (i.e. without using setState) 
because it can lead to unexpected behavior or bugs.


import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };

    this.countUp = this.countUp.bind(this);
  }

  countUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.countUp}>Click Me!</button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

// countUp() method needs to be bound in our constructor (using bind), 
// so it knows what context to operate in

//after class can set the default values for states if undefined
CustomButton.defaultProps = {
  color: 'blue'
};

//but if want a null, give value = {null} in the return


//setState()
//enqueues changes to the component state
and tells react that this component and its children
//need to be re-rendered with the updated state

//need to set the state based on a previous state ?

//using componentDidUpdate() or a setState callback
(setState(updated, callback)) either of which are
guaranteed to fire after the update has been applied

//unless shouldComponentUpdate() returns false
//setState() will always lead to re-render

this.setState((state, props) => {
  return {counter: state.counter + props.step};
});
//props is an optional callback



//displayName
used to give a different name for debugging purposes

//this.props, contains the props that were defined by the caller
of this component

//this.props.children, defined by the child tags in the jsx expression


//The state is user-defined, and it should be a plain JavaScript object.


////mutating, change original
//array.push, array.unshift() will add to the current array
//array.pop() and array.shift() return the item that is removed.
//array.splice(start,quantity_to_be_removed, value_to_insert_1..) return what is removed

//not mutate state, so we use
////non-mutating, not change original
//const arr2 = [...arr1, 'f']; // ['a', 'b', 'c', 'd', 'e', 'f']
//The spread operator, when used as above, will copy the original array, 
//take all the elements out of the array, 
//and deposit the elements in the new context.
//we take copies of all the elements from arr1, put them in a new array, 
//and add 'f' to the end. 
//or to start if switched places

const arr2 = arr1.filter(a => a !== 'e'); // ['a', 'b', 'c', 'd']
//return a if a != e

const arr2 = arr1.slice(1, 5) // ['b', 'c', 'd', 'e']
//slice(start,end)

//map
const arr1 = ['a', 'b', 'c', 'd', 'e']
const arr2 = arr1.map(item => {
  if(item === 'c') {
    item = 'CAT';
  }
  return item;
}); // ['a', 'b', 'CAT', 'd', 'e']



////using bind(this, argument1, argument2);

const boundGetX = objectMethod.bind(ParentObjectName);
console.log(boundGetX());

returns a copy of the given function with the specified this value
and initial arguments if provided


if not used the console.log(this) will output undefined

this inside a function will refer to the global object
if in strict mode will output undefined

this inside an object will refer to that object
so we use this.name

when used outside of that object in a variable reference
this will point to the global object


//arrow function in the call back
//the arrow function is enclosed inside the render() method
which is invoked by react in the context of the component instance
render { return (
      <button type="button" onClick={(e) => this.handleClick(e)}>
      Click Me!</button>


we can pass a function as a method to the event 
without worrying about it losing its context.
else it loses its context and outputs undefined
so we bind this of the event handler

Arrow functions are exempt from this behavior 
because they use lexical this binding which automatically 
binds them to the scope they are defined in.

function MyComponent({ title }) {
  // rest of code
}


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
class uses this.props.name
and function uses props.name only

function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  root.render(<Clock date={new Date()} />);
}

setInterval(tick, 1000);


/*////////////////////////////////////////////////////////////////////*/
/*

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);



////lifecycle methods
//Mounting
//set up a timer whenever the clock is rendered to the DOM for the first time
//When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle method.


//unmounting
//clear that timer, whenever the dom produced by the clock is removed
//If the Clock component is ever removed from the DOM, 
//React calls the componentWillUnmount() lifecycle method 
//so the timer is stopped.


special methods in the class for each
  componentDidMount() {
  componentWillUnmount() {



// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});

// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));




//returning/passing state to the next component
//makes it not visible if its a state, props to the next component

//The ‘this.props’ is a kind of global object which stores all 
of a components props.


/*////////////////////////////////////////////////////////////////////*/
/*

//using a components in the return of another component


// Parent Component
class Parent extends React.Component{
  render(){
      return(
              <div>
                  <h2>You are inside Parent Component</h2>
                  <Child name="User" userId = "5555"/>
              </div>
          );
  }
}

// Child Component
class Child extends React.Component{
  render(){
      return(
              <div>
                  <h2>Hello, {this.props.name}</h2>
                  <h3>You are inside Child Component</h3>
                  <h3>Your user id is: {this.props.userId}</h3>
              </div>
          );
  }
}

ReactDOM.render(
  // passing props
  <Parent />,
  document.getElementById("root")
);



//a component should ideally only do one thing. single responsibility
//If it ends up growing, it should be decomposed into smaller subcomponents.

//tate is reserved only for interactivity not for static versions

//Figure out the absolute minimal representation of the state your application needs and compute everything else you need on-demand

//binding static components to interact with each other
https://reactjs.org/docs/thinking-in-react.html




/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*


//application made of two components
//input field, submit button
//input field adds content to a tasks array (state)
for each task, an html list element should be rendered


**app exercise
https://www.theodinproject.com/lessons/node-path-javascript-handle-inputs-and-render-lists


//////Handling events
<button onclick="activateLasers()">  //Html
<button onClick={activateLasers}> //JSX, //camelCase, {functionName}

  Activate Lasers
</button>


//return false to prevent default behavior in HTML
<form onsubmit="console.log('You clicked submit.'); return false">
  <button type="submit">Submit</button>
</form>


//preventing default behavior in JSX
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}



//in react, no need to call addEventListeners
//provide a listener when the element is initially rendered

//toggle ON/OFF states in a class component
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}


//if used onClick={this.handleClick}, you should bind that method.
//or used arrow function in the calling line,
//but a different callback is created each time the class renders
<button onClick={() => this.handleClick()}>
//or define the function 
  handleClick = () => { };


//passing arguments
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
//e is passed automatically in the bind





//conditional rendering
//create distinct components that encapsulate the behavior needed

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
// Try changing to isLoggedIn={true}:
root.render(<Greeting isLoggedIn={false} />);


//////conditional rendering cont...
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<LoginControl />);






//////inline if with logical && operator
//note: falsy conditions will have the expression be returned
//It works because in JavaScript, true && expression always evaluates 
//to expression, and false && expression always evaluates to false.

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Mailbox unreadMessages={messages} />);


//another example
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn
        ? <LogoutButton onClick={this.handleLogoutClick} />
        : <LoginButton onClick={this.handleLoginClick} />
      }
    </div>
  );
}



//////use return null to hide a component
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Page />);






*/