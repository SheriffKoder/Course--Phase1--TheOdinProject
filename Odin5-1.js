

/*////////////////////////////////////////////////////////////////////*/
/*

Lifecycle methods
when the component mounts, renders, updates, or unmounts.


can only be used in class components
functional components have other options

sequence of stages/states an instance of a component goes through in the DOM

Creation of the component (componentDidMount)
Render of the component (render)
(Optional) Update of the component (componentDidUpdate)
Death of the component (componentWillUnmount)

states to handle certain tasks



//componentDidMount, 
when the component is inserted in the DOM tree
connect to API's, set timers, add event listeners



//componentDidUpdate,
not called for the initial render
called any other time the component updates

prone to infinite loops, if used to update state
in a way that would cause re-render,
should include a conditional statement to prevent that
for example compare the new props with the previous props
to make sure some value changed


//componentWillUnmount
called when the component is removed from the dom tree
you usually do cleanup tasks in this method
cleaning up what you added in the componentDidMount method

like remove event listeners, cancel network requests, cleanup routines




render()
returns JSX that is displayed in the UI
can also return a null if there is nothing to render for that component

react requires that your render is pure
same output when the same inputs are passed
you can not modify the components state setState() within a render()

if need to modify state 
that would have to happen in other lifecycle methods
keeping render pure



next 
when the component has been mounted and ready
componentDidMount() is called
good place to initiate API Calls
if need to load data from a remote endpoint

here its allowed to use setState()
here will update state and cause another rendering
but will happen before the browser updates the UI
to ensure user will not see any UI updates with the double rendering

the best practice is to ensure your states are assigned in the constructor()
reason React allows the setState() within this lifecycle method
is for special cases like tooltips, modals and similar concepts
when need to measure a dom node before rendering something that depends on its position




//componentDidUpdate()
invoked as soon as the updating happens
use for updating the dom in response to prop or state changes

can call setState() in this lifecycle
will need to wrap it in a condition to check for state and prop changes from previous state
incorrect usage of setState() can lead to an infinite loop


componentDidUpdate(prevProps) {
 //Typical usage, don't forget to compare the props
 if (this.props.userName !== prevProps.userName) {
   this.fetchData(this.props.userName);
 }
}


//componentWillUnmount()
called just before the component is unmounted and destroyed
place for cleanup actions

component will never be re-rendered and because of that
cannot call setState() during this lifecycle method

componentWillUnmount() {
 window.removeEventListener('resize', this.resizeListener)
}

common activities
clearing timers, cancelling api calls, or clearing any caches in storage.






////un common react lifecycle methods

//shouldComponentUpdate()
useful when don't want react to render your state or prop changes
let React know if a component is not affected by the state and prop changes
exists only for certain performance optimizations
cannot update component state here

the component re-renders by default any time setState() is called

do not always rely on this lifecycle to prevent rendering
of your component since it can lead to several bugs

shouldComponentUpdate(nextProps, nextState) {
 return this.props.title !== nextProps.title || 
  this.state.input !== nextState.input }

As shown in the example above, this lifecycle should always 
return a boolean value to the question, “Should I re-render my component?”



//static getDerivedStateFromProps()
from the newer lifecycle methods introduced recently by the react team
safer alternative to the componentWillReceiveProps()

is called just before calling the render() method

static function that does not have access to "this"
returns an object to update state in response to prop changes
it can return null if there is no change to state

method also exists only for rare use cases
where the state depends on changes in props in a component

static getDerivedStateFromProps(props, state) {
    if (props.currentRow !== state.lastRow) {
      return {
        isScrollingDown: props.currentRow > state.lastRow,
        lastRow: props.currentRow,
      };
    }
    // Return null to indicate no change to state.
    return null;
  }

Keep in mind that this lifecycle method is fired on every render.

An example use case where this method may come in handy would be a 
<Transition> component that compares its previous and next children 
to decide which ones to animate in and out.


//getSnapshotBeforeUpdate()
another new lifecycle method introduced in React recently.
safer alternative to the previous lifecycle method componentWillUpdate().

getSnapshotBeforeUpdate(prevProps, prevState) {
    // ...
  }

called right before the DOM is updated
the value that is returned from it is passed on to componentDidUpdate()

Keep in mind that this method should also be used rarely or not used at all.

Resizing the window during an async rendering is a good use-case of when 
the getSnapshotBeforeUpdate() can be utilized.





the different React lifecycle methods and when they are invoked
https://i1.wp.com/programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM.png?resize=768%2C425&ssl=1



//class components are not recommended to be used but are still supported



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

the context of a class component is available as this.context
only available if you specify which context want to receive
using static contextType

this.context is equivalent to useContext in function components

A class component can only read one context at a time.

class Button extends Component {
  static contextType = ThemeContext;

  render() {
    const theme = this.context;
    const className = 'button-' + theme;
    return (
      <button className={className}>
        {this.props.children}
      </button>
    );
  }
}


class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

<Greeting name="Taylor" />
//without constructor super ?

//refs (old)
use createRef instead
lets you access legacy string refs for this component

state
//defining state in class components is equivalent to calling
useState in function components

//can write the code like this using
public class field syntax which is supported both by
modern browsers and tools like Babel

//a constructor should not contain any side effects or subscriptions
// Instead, use componentDidMount for that.
//in other methods than the constructor
use this.setState() instead of this.state directly



class Counter extends Component {
  state = {
    age: 42,
  };

  handleAgeChange = () => {
    this.setState({
      age: this.state.age + 1 
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handleAgeChange}>
        Increment age
        </button>
        <p>You are {this.state.age}.</p>
      </>
    );
  }
}



//when server rendering is used
constructor will run on the server followed by render method
componentDidMount or componentWillUnmount will not run on the server.

//When Strict Mode is on, React will call constructor twice in 
development and then throw away one of the instances. 
This helps you notice the accidental side effects that need to 
be moved out of the constructor.

//in function component
To avoid recalculating the initial state, pass a function to useState.




//componentDidCatch(error, info) 
React will call it when some child component (including distant
children) throws an error during rendering. 

used together with static getDerivedStateFromError which lets 
you update state in response to an error and display an 
error message to the user. A component with these methods is 
called an error boundary.

does not return anything

parameters:
error, will usually be an instance of error but js allows
to throw any value also like strings or null even

info, object containing additional information about the error


defining static getDerivedStateFromError.
to update the UI and display the fallback error message

in development errors will bubble up to window
window.onerror or window.addEventListener('error', callback) will intercept the errors that have been caught by componentDidCatch

in production, errors will not bubble up
any ancestor error handler will only receive errors 
not explicitly caught by componentDidCatch

if would like to avoid creating class components
write a single error boundary component like above
or use react-error-boundary package



/*////////////////////////////////////////////////////////////////////*/
/*

componentDidMount() 

will be called when component first added to the screen
This is a common place to start data fetching, set up subscriptions, 
or manipulate the DOM nodes.

componentDidMount does not take any parameters.
componentDidMount should not return anything.




for example componentDidMount reads some state or props
implement componentDidUpdate to handle their changes
and componentWillUnmount to clean up whatever componentDidMount was doing.

class ChatRoom extends Component {
  state = {
    serverUrl: 'https://localhost:1234'
  };

  componentDidMount() {
    this.setupConnection();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.roomId !== prevProps.roomId ||
      this.state.serverUrl !== prevState.serverUrl
    ) {
      this.destroyConnection();
      this.setupConnection();
    }
  }

  componentWillUnmount() {
    this.destroyConnection();
  }

  // ...
}

in strict mode, 
react will call componentDidMount
then immediately call componentWillUnmount
and then call componentDidMount
this helps notice if forgot to implement componentWillUnmount
or if its logic doesn't fully mirror what componentWillUnmount does


you can call setState immediately in componentDidMount
avoid that when you can, it will trigger extra rendering
before the browser updates the screen
render will be called twice in this case

componentDidMount, componentDidUpdate, and componentWillUnmount 
together in class components is equivalent to calling useEffect 
in function components.
In the rare cases where it’s important for the code to run before browser paint, useLayoutEffect is a closer match.


/*////////////////////////////////////////////////////////////////////*/
/*

//componentDidUpdate(prevProps, prevState, snapshot?)
React will call it immediately after your component has been re-rendered with updated props or state. 
You can use it to manipulate the DOM after an update
a common place to do network requests as long as you compare the current props to previous props


prevProps, props before the update, compare with this.props for changes
prevState, state before the update, compare with this.state to determine what changed

snapshot, If you implemented getSnapshotBeforeUpdate, 
snapshot will contain the value you returned from that method. 
Otherwise, it will be undefined.

componentDidUpdate should not return anything.

componentDidUpdate will not get called if shouldComponentUpdate is defined and returns false.

The logic inside componentDidUpdate should usually be wrapped 
in conditions comparing this.props with prevProps, 
and this.state with prevState. Otherwise, there’s a 
risk of creating infinite loops.



/*////////////////////////////////////////////////////////////////////*/
/*

componentWillMount() > Deprecated
now named to UNSAFE_componentWillMount
Run the rename-unsafe-lifecycles codemod to automatically update your components.


componentWillReceiveProps(nextProps) > Deprecated
now named UNSAFE_componentWillReceiveProps


componentWillUpdate(nextProps, nextState) > Deprecated
now named UNSAFE_componentWillUpdate

getChildContext() 
This API will be removed in a future major version of React. 
Use Context.Provider instead.
Lets you specify the values for the legacy context is provided 
by this component.





/*////////////////////////////////////////////////////////////////////*/
/*
componentWillUnmount() 
React will call it before your component is removed (unmounted) from the screen
This is a common place to cancel data fetching or remove subscriptions.

The logic inside componentWillUnmount should “mirror” the logic inside componentDidMount.

componentWillUnmount does not take any parameters.
componentWillUnmount should not return anything.

When Strict Mode is on, in development React will call 
componentDidMount, then immediately call componentWillUnmount



/*////////////////////////////////////////////////////////////////////*/
/*
forceUpdate(callback?) 
forces a component to re-render

If your component’s render method only reads from this.props, 
this.state, or this.context, it will re-render automatically 
when you call setState inside your component or one of its parents.

if your component’s render method reads directly from an external data source,
you have to tell React to update the user interface when that data source changes. 
That’s what forceUpdate lets you do.

Try to avoid all uses of forceUpdate and only read from this.props 
and this.state in render.

optional callback parameter If specified, 
React will call the callback you’ve provided after the update is committed.

forceUpdate does not return anything.

If you call forceUpdate, React will re-render 
without calling shouldComponentUpdate.

Reading an external data source and forcing class components 
to re-render in response to its changes with forceUpdate 
has been superseded by useSyncExternalStore in function components.


/*////////////////////////////////////////////////////////////////////*/
/*
getSnapshotBeforeUpdate(prevProps, prevState) 
React will call it immediately before React updates the DOM

enables your component to capture some information from the DOM 
(e.g. scroll position) before it is potentially changed.

Any value returned by this lifecycle method will be passed 
as a parameter to componentDidUpdate.

class ScrollingList extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Are we adding new items to the list?
    // Capture the scroll position so we can adjust scroll later.
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // If we have a snapshot value, we've just added new items.
    // Adjust scroll so these new items don't push the old ones out of view.
    // (snapshot here is the value returned from getSnapshotBeforeUpdate)
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  render() {
    return (
      <div ref={this.listRef}>{/* ...contents...}</div>
      );
    }
  }

In the above example, it is important to read the scrollHeight 
property directly in getSnapshotBeforeUpdate. It is not safe to 
read it in render, UNSAFE_componentWillReceiveProps, 
or UNSAFE_componentWillUpdate because there is a potential time gap 
between these methods getting called and React updating the DOM.

Parameters
prevProps: Props before the update. Compare prevProps to this.props to determine what changed.
prevState: State before the update. Compare prevState to this.state to determine what changed.

Returns 
You should return a snapshot value of any type that you’d like, 
or null. The value you returned will be passed as the third argument 
to componentDidUpdate.

getSnapshotBeforeUpdate will not get called if shouldComponentUpdate 
is defined and returns false.

At the moment, there is no equivalent to getSnapshotBeforeUpdate for
function components. This use case is very uncommon, 
but if you have the need for it, for now you’ll have to write a class component.


/*////////////////////////////////////////////////////////////////////*/
/*
render()
The render method is the only required method in a class component.

specify what you want to appear on the screen, for example

usually the render method should return a piece of JSX
and other return types are supported like strings etc.

render method written as a pure function
should not interact with the browser API
side effects should happen either in event handlers or methods
like componentDidMount

Parameters;
prevProps: Props before the update. Compare prevProps to this.props to determine what changed.
prevState: State before the update. Compare prevState to this.state to determine what changed.

Returns
render can return any valid React node. 
This includes React elements such as <div />, strings, 
numbers, portals, empty nodes (null, undefined, true, and false), 
and arrays of React nodes.

When Strict Mode is on, React will call render twice in development 
and then throw away one of the results. This helps you notice 
the accidental side effects that need to be moved out of the 
render method.

There is no one-to-one correspondence between the render call 
and the subsequent componentDidMount or componentDidUpdate call. 
Some of the render call results may be discarded by React 
when it’s beneficial.



/*////////////////////////////////////////////////////////////////////*/
/*
setState(nextState, callback?) 

setState enqueues changes to the component state. 
It tells React that this component and its children need to 
re-render with the new state. This is the main way you’ll 
update the user interface in response to interactions.

It only affects what this.state will return starting from the next render.


You can also pass a function to setState. It lets you update state based on the previous state:

  handleIncreaseAge = () => {
    this.setState(prevState => {
      return {
        age: prevState.age + 1
      };
    });
  }
You don’t have to do this, but it’s handy if you want to update 
state multiple times during the same event.


Parameters:
,,next state, object or a function
an object will be shallowly merged into this.state

a function, will be treated as an updater function
must be pure
should take the pending state and props as arguments
should return the object to be shallowly merged into this.state

React will put your updater function in a queue and re-render your component
During the next render, react will calculate the next state
by applying all of the queued updaters to the previous state

,,optional callback: If specified, React will call the callback 
you’ve provided after the update is committed.

setState does not return anything.

setState is a request more than a command
react batches the updates and re-render together in a single pass at
the end of the event for multiple components

setState does not update this.state immediatley
this makes reading this.state right after calling setState
a potential pitfall
instead use componentDidUpdate or the setState callback argument
are guaranteed to fire after the update has been applied

if you need to set the state based on the prev state,
can pass function to nextState as described above

calling setState in class components is simillar to calling
a set function in function components

/*////////////////////////////////////////////////////////////////////*/
/*
shouldComponentUpdate(nextProps, nextState, nextContext) 
React will call it to determine whether a re-render can be skipped.

If you are confident you want to write it by hand, you may compare 
this.props with nextProps and this.state with nextState and 
return false to tell React the update can be skipped.


class Rectangle extends Component {
  state = {
    isHovered: false
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.position.x === this.props.position.x &&
      nextProps.position.y === this.props.position.y &&
      nextProps.size.width === this.props.size.width &&
      nextProps.size.height === this.props.size.height &&
      nextState.isHovered === this.state.isHovered
    ) {
      // Nothing has changed, so a re-render is unnecessary
      return false;
    }
    return true;
  }

  // ...
}


Parameters 
nextProps: The next props that the component is about to render with.
Compare nextProps to this.props to determine what changed.
nextState: The next props that the component is about to render with.
Compare nextState to this.state to determine what changed.
nextContext: The next props that the component is about to render with. 
Compare nextContext to this.context to determine what changed. Only available if you specify static contextType (modern) or static contextTypes (legacy).


Returns 
Return true if you want the component to re-render. 
That’s the default behavior.

Return false to tell React that re-rendering can be skipped.
but not for children
and it does not guarantee that the component will not re-render


This method only exists as a performance optimization. 
If your component breaks without it, fix that first.

Consider using PureComponent instead of writing shouldComponentUpdate 
by hand. PureComponent shallowly compares props and state, 
and reduces the chance that you’ll skip a necessary update.

Optimizing class components with shouldComponentUpdate is similar 
to optimizing function components with memo. Function components also 
offer more granular optimization with useMemo.






/*////////////////////////////////////////////////////////////////////*/
/*
the context of a class component is available as this.context
only available if you specify which context want to receive
using static contextType (modern) or static contextTypes (old)

A class component can only read one context at a time.

class Button extends Component {
  static contextType = ThemeContext;

  render() {
    const theme = this.context;
    const className = 'button-' + theme;
    return (
      <button className={className}>
        {this.props.children}
      </button>
    );
  }
}

Reading this.context in class components is equivalent to useContext 
in function components.


/*////////////////////////////////////////////////////////////////////*/
/*
PureComponent
PureComponent is similar to Component but it skips re-renders 
for same props and state.

a subclass of Component and supports all the Component APIs. 
Extending PureComponent is equivalent to defining a custom 
shouldComponentUpdate method that shallowly compares props and state.


import { PureComponent, useState } from 'react';

class Greeting extends PureComponent {
  render() {
    console.log("Greeting was rendered at", new Date().toLocaleTimeString());
    return <h3>Hello{this.props.name && ', '}{this.props.name}!</h3>;
  }
}

export default function MyApp() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  return (
    <>
      <label>
        Name{': '}
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Address{': '}
        <input value={address} onChange={e => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
    </>
  );
}

A React component should always have pure rendering logic.
By using PureComponent, you are telling React that your component complies with this requirement
React doesn’t need to re-render as long as its props and state haven’t changed. However, your component will still re-render if a context that it’s using changes.

//greeting as a function
import { memo, useState } from 'react';

const Greeting = memo(function Greeting({ name }) {
  console.log("Greeting was rendered at", new Date().toLocaleTimeString());
  return <h3>Hello{name && ', '}{name}!</h3>;
});


//
Unlike PureComponent, memo does not compare the new and the old state. 
In function components, calling the set function with the same state 
already prevents re-renders by default, even without memo.


/*////////////////////////////////////////////////////////////////////*/
/*
UNSAFE_componentWillMount() 
React will call it immediately after the constructor.

It only exists for historical reasons and should not be used in any new code. 
Instead, use one of the alternatives:

To initialize state, declare state as a class field or set this.state inside the constructor.
If you need to run a side effect or set up a subscription, move that logic to componentDidMount instead.

UNSAFE_componentWillMount does not take any parameters.
UNSAFE_componentWillMount should not return anything.

does not guarantee that the component will get mounted if your app uses modern React features like Suspense

UNSAFE_componentWillMount is the only lifecycle method that runs 
during server rendering. For all practical purposes, it is identical 
to constructor, so you should use the constructor for this type of 
logic instead.

Calling setState inside UNSAFE_componentWillMount in a class 
component to initialize state is equivalent to passing that state 
as the initial state to useState in a function component.

/*////////////////////////////////////////////////////////////////////*/
/*
UNSAFE_componentWillReceiveProps(nextProps, nextContext) 

only exists for historical reasons and should not be used in any new code. 
Instead, use one of the alternatives:

does not guarantee that the component will receive those props 
if your app uses modern React features like Suspense.

You need to compare nextProps and this.props yourself to check if something changed.

react calls this method if some of component’s props are going 
to be updated. For example, calling setState doesn’t generally 
trigger UNSAFE_componentWillReceiveProps inside the same component.


/*////////////////////////////////////////////////////////////////////*/
/*
UNSAFE_componentWillUpdate(nextProps, nextState) 

React will call it before rendering with the new props or state
old code

not return anything
will not get called if shouldComponentUpdate is defined and return false
will not get called if the component implements 
 static getDerivedStateFromProps or getSnapshotBeforeUpdate.
it's not supported to call setState
does not guarantee that the component will update if app uses
modern React features like Suspense
does not mean that the component has received different props
or state than the last time
no equivalent to it in function components

if you need to run a side effect (fetch data, run an animation,
reinitialize a subscription) in response to prop or state changes
move that logic to componentDidUpdate

or need to read some information from the DOM (current scroll position)
so can use in componentDidUpdate, read it inside getSnapshotBeforeUpdate instead

nextProps, compare with this.props to determine what has changed
nextState, compare with this.state to determine what has changed


/*////////////////////////////////////////////////////////////////////*/
/*
static childContextTypes 
static contextTypes 

use static contextType instead


static contextType 

specify which context it needs to read
if want to read this.context from your class component

the context must be created by createContext

class Button extends Component {
  static contextType = ThemeContext;

  render() {
    const theme = this.context;
    const className = 'button-' + theme;
    return (
      <button className={className}>
        {this.props.children}
      </button>
    );
  }
}

//equivalent to useContext in function components



/*////////////////////////////////////////////////////////////////////*/
/*
static defaultProps 

can define it to set the default props for the class
will be used for undefined and missing props
but not for null props

If the color prop is not provided or is undefined, 
it will be set by default to 'blue':



class Button extends Component {
  static defaultProps = {
    color: 'blue'
  };

  render() {
    return <button className={this.props.color}>click me</button>;
  }
}


<>
{/* this.props.color is "blue" /}
<Button />

{/* this.props.color is "blue" /}
<Button color={undefined} />

{/* this.props.color is null /}
<Button color={null} />
</>

//Defining defaultProps in class components is similar to 
using default values in function components.



/*////////////////////////////////////////////////////////////////////*/
/*
static getDerivedStateFromError(error) 

React will call it when a child component (including distant children) 
throws an error during rendering. 

lets you display an error message instead of clearing the UI

Typically, it is used together with componentDidCatch which lets 
you send the error report to some analytics service. 
A component with these methods is called an error boundary.


By default, if your application throws an error during rendering, 
React will remove its UI from the screen. To prevent this, 
you can wrap a part of your UI into an error boundary.

fallback UI instead of the part that crashed—for example, 
an error message.

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    logErrorToMyService(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}


Then you can wrap a part of your component tree with it:
<ErrorBoundary fallback={<p>Something went wrong</p>}>
  <Profile />
</ErrorBoundary>


//no way to write an error boundary as a function component
//you do not have to write it yourself, can use react-error-boundary instead


Parameters
error, the error that was thrown also JS allows to throw any value
including strings or even null

Returns
should return the state telling the component to display the error message

Caveats
should be a pure function
if need to perform a side effect, need to also implement
componentDidCatch

/*////////////////////////////////////////////////////////////////////*/
/*
static getDerivedStateFromProps(props, state) 

react will call it right before calling render
both on the initial mount and on subsequent updates
should return an object to update the state or null to update nothing

equivalent to calling the set function from useState during rendering in a function component


exists for rare use cases
where the state depends on changes in props over time

class Form extends Component {
  state = {
    email: this.props.defaultEmail,
    prevUserID: this.props.userID
  };

  static getDerivedStateFromProps(props, state) {
    // Any time the current user changes,
    // Reset any parts of state that are tied to that user.
    // In this simple example, that's just the email.
    if (props.userID !== state.prevUserID) {
      return {
        prevUserID: props.userID,
        email: props.defaultEmail
      };
    }
    return null;
  }

  // ...
}

Note that this pattern requires you to keep a previous value of 
the prop (like userID) in state (like prevUserID).

If you want to re-compute some data only when a prop changes, 
use a memoization helper instead.

Parameters 
props: The next props that the component is about to render with.
state: The next state that the component is about to render with.
Returns 
static getDerivedStateFromProps return an object to update the state, or null to update nothing.


this method is fired on every render
regardless of the cause



/*////////////////////////////////////////////////////////////////////*/
/*

React will call your render method whenever it needs to 
figure out what to display on the screen

Usually, you will return some JSX from it. 
Your render method should be a pure function: 
it should only calculate the JSX.

import { Component } from 'react';

export default class Counter extends Component {
  state = {
    name: 'Taylor',
    age: 42,
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  handleAgeChange = () => {
    this.setState({
      age: this.state.age + 1 
    });
  };

  render() {
    return (
      <>
        <input
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <button onClick={this.handleAgeChange}>
          Increment age
        </button>
        <p>Hello, {this.state.name}. You are {this.state.age}.</p>
      </>
    );
  }
}


/*////////////////////////////////////////////////////////////////////*/
/*

Adding lifecycle methods to a class component

If you define the componentDidMount method, 
React will call it when your component is first added (mounted) to the screen. 

React will call componentDidUpdate after your component re-renders 
due to changed props or state. 

React will call componentWillUnmount 
after your component has been removed (unmounted) from the screen.

If you implement componentDidMount, you usually need to implement 
all three lifecycles to avoid bugs.

For example, if componentDidMount reads some state or props, 
you also have to implement componentDidUpdate to handle their changes, 
and componentWillUnmount to clean up whatever componentDidMount 
was doing.

//ChatRoom.js
import { Component } from 'react';
import { createConnection } from './chat.js';

export default class ChatRoom extends Component {
  state = {
    serverUrl: 'https://localhost:1234'
  };

  componentDidMount() {
    this.setupConnection();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.roomId !== prevProps.roomId ||
      this.state.serverUrl !== prevState.serverUrl
    ) {
      this.destroyConnection();
      this.setupConnection();
    }
  }

  componentWillUnmount() {
    this.destroyConnection();
  }

  setupConnection() {
    this.connection = createConnection(
      this.state.serverUrl,
      this.props.roomId
    );
    this.connection.connect();    
  }

  destroyConnection() {
    this.connection.disconnect();
    this.connection = null;
  }

  render() {
    return (
      <>
        <label>
          Server URL:{' '}
          <input
            value={this.state.serverUrl}
            onChange={e => {
              this.setState({
                serverUrl: e.target.value
              });
            }}
          />
        </label>
        <h1>Welcome to the {this.props.roomId} room!</h1>
      </>
    );
  }
}

//App.js
import { useState } from 'react';
import ChatRoom from './ChatRoom.js';

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? 'Close chat' : 'Open chat'}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}

//chat.js
export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    }
  };
}

Note that in development when Strict Mode is on, 
React will call componentDidMount, immediately call 
componentWillUnmount, and then call componentDidMount again. 
This helps you notice if you forgot to implement componentWillUnmount 
or if its logic doesn’t fully “mirror” what componentDidMount does.

//ErrorBoundary



//ex above using functions
import { useState, useEffect } from 'react';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);

  // ...
}

//To connect a component to an external system, describe this logic as a single Effect:
//This useEffect call is equivalent to the logic in the lifecycle methods above.
//If your lifecycle methods do multiple unrelated things, 
split them into multiple independent Effects




/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

////using functions

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default function App() {
  return (
    <>
      <Greeting name="Sara" />
      <Greeting name="Taylor" />
    </>
  );
}




///////////////////////////


import { Component } from 'react';

export default class Counter extends Component {
  state = {
    name: 'Taylor',
    age: 42,
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  handleAgeChange = (e) => {
    this.setState({
      age: this.state.age + 1 
    });
  };

  render() {
    return (
      <>
        <input
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <button onClick={this.handleAgeChange}>
          Increment age
        </button>
        <p>Hello, {this.state.name}. You are {this.state.age}.</p>
      </>
    );
  }
}


//the above example using functions

import { useState } from 'react';

function Counter() {
const [name, setName] = useState('Taylor');
const [age, setAge] = useState(42);

function handleNameChange(e) {
    setName(e.target.value);
}

function handleAgeChange() {
    setAge(age + 1);
}

return (
<>
    <input
    value={name}
    onChange={handleNameChange}
    />
    <button onClick={handleAgeChange}>
    Increment age
    </button>
    <p>Hello, {name}. You are {age}.</p>
</>
)
}



///////////////////////////

import { createContext, Component } from 'react';

const ThemeContext = createContext(null);

class Panel extends Component {
  static contextType = ThemeContext;

  render() {
    const theme = this.context;
    const className = 'panel-' + theme;
    return (
      <section className={className}>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </section>
    );    
  }
}

//class Panel as a function
//function Panel({ title, children }) {
  const theme = useContext(ThemeContext);


class Button extends Component {
  static contextType = ThemeContext;

  render() {
    const theme = this.context;
    const className = 'button-' + theme;
    return (
      <button className={className}>
        {this.props.children}
      </button>
    );
  }
}

//function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  );
}


function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

export default function MyApp() {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  )
}


/*////////////////////////////////////////////////////////////////////*/
/*
useEffect

a React Hook that lets you synchronize a component with an external system.

useEffect(setup, dependencies?)

the function with your effect's logic
may also optionally return a cleanup function

Parameters:
setup: the function with your effect's logic
this function may optionally return a cleanup functin
when your component is first added to the DOM
react will run your setup function
with every re-render, react will run the cleanup function if provided
with the old values
then run the setup function with the new values
after component is removed from the dom
react will run the cleanup function one last time

dependencies (optional)
list of al reactive values
referenced inside of the setup code
values include, props, state and all the variables declared
directly inside your component body

Returns; undefined
https://react.dev/reference/react/useEffect



//

import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
  // ...
}

/*////////////////////////////////////////////////////////////////////*/
/*

is your Effect doing several unrelated things ?
or several unrelated things ?

Effects are an escape hatch from the React paradigm. 
They let you “step outside” of React and synchronize your 
components with some external system like a non-React widget, 
network, or the browser DOM

If there is no external system involved (for example, 
if you want to update a component’s state when some props or state 
change), you shouldn’t need an Effect. Removing unnecessary Effects 
will make your code easier to follow, faster to run, and less 
error-prone.

https://react.dev/learn/you-might-not-need-an-effect



/*////////////////////////////////////////////////////////////////////*/
/*
<Suspense>
lets you display a fallback until its children have finished loading


<Suspense fallback={<loading />}>
    <SomeComponent />
</Suspense>

Props:
children:
the actual UI you intend to render
"if children suspends while rendering
the suspense boundary will switch to rendering fallback

fallback:
an alternate UI to render in place of the actual UI
if it has not finished loading
any valid react node is accepted
a fallback is a lightweight placeholder view
such as a loading spinner or skeleton

suspense will automatically switch to fallback when children suspends
and back to children when the data is ready
if a fallback suspends while rendering
it will activate the closest parent
Suspense boundary


Caveats:
React does not preserve any state for renders that got 
suspended before they were able to mount for the first time. 
When the component has loaded, React will retry rendering the 
suspended tree from scratch.

If React needs to hide the already visible content because it 
suspended again, it will clean up layout Effects in the content 
tree. When the content is ready to be shown again, React will fire 
the layout Effects again. This ensures that Effects measuring 
the DOM layout don’t try to do this while the content is hidden.

React includes under-the-hood optimizations like 
Streaming Server Rendering and Selective Hydration that are 
integrated with Suspense. 

<Suspense fallback={<Loading />}>
  <Albums />
</Suspense>


import { Suspense } from 'react';
import Albums from './Albums.js';
import Biography from './Biography.js';
import Panel from './Panel.js';

export default function ArtistPage({ artist }) {
  return (
    <>
      <h1>{artist.name}</h1>
        <Suspense fallback={<Loading />}>
            <Details artistId={artist.id} />
        </Suspense>

        function Details({ artistId }) {
        return (
            <>
            <Biography artistId={artistId} />
            <Panel>
                <Albums artistId={artistId} />
            </Panel>
            </>
        );
        }    
    </>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}


//after all of them are ready to be displayed, 
//they will all appear together at once.
//with items moved to a component function


<Suspense fallback={<BigSpinner />}>
  <Biography />
  <Suspense fallback={<AlbumsGlimmer />}>
    <Panel>
      <Albums />
    </Panel>
  </Suspense>
</Suspense>

//With this change, displaying the "Biography" doesn’t need to “wait” 
for the "Albums" to load.

import { Suspense } from 'react';
import Albums from './Albums.js';
import Biography from './Biography.js';
import Panel from './Panel.js';

export default function ArtistPage({ artist }) {
  return (
    <>
      <h1>{artist.name}</h1>
      <Suspense fallback={<BigSpinner />}>
        <Biography artistId={artist.id} />
        <Suspense fallback={<AlbumsGlimmer />}>
          <Panel>
            <Albums artistId={artist.id} />
          </Panel>
        </Suspense>
      </Suspense>
    </>
  );
}

function BigSpinner() {
  return <h2>🌀 Loading...</h2>;
}

function AlbumsGlimmer() {
  return (
    <div className="glimmer-panel">
      <div className="glimmer-line" />
      <div className="glimmer-line" />
      <div className="glimmer-line" />
    </div>
  );
}


//defer updating the list
A common alternative UI pattern is to defer updating the list and 
to keep showing the previous results until the new results are ready. 
The useDeferredValue Hook lets you pass a deferred version of the 
query down:

export default function App() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  return (
    <>
      <label>
        Search albums:
        <input value={query} onChange={e => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <SearchResults query={deferredQuery} />
      </Suspense>
    </>
  );
}

The query will update immediately, so the input will display 
the new value. However, the deferredQuery will keep its previous 
value until the data has loaded, so SearchResults will show the 
stale results for a bit.




////
<div style={{
  opacity: query !== deferredQuery ? 0.5 : 1 
}}>
  <SearchResults query={deferredQuery} />
</div>

Notice how instead of the Suspense fallback, you now see the 
dimmed stale result list until the new results have loaded:

import { Suspense, useState, useDeferredValue } from 'react';
import SearchResults from './SearchResults.js';

export default function App() {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;
  return (
    <>
      <label>
        Search albums:
        <input value={query} onChange={e => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
        <div style={{ opacity: isStale ? 0.5 : 1 }}>
          <SearchResults query={deferredQuery} />
        </div>
      </Suspense>
    </>
  );
}


Both deferred values and transitions let you avoid showing Suspense 
fallback in favor of inline indicators. 


/*////////////////////////////////////////////////////////////////////*/
/*

//Preventing already revealed content from hiding 


import { Suspense, startTransition, useState } from 'react';
import IndexPage from './IndexPage.js';
import ArtistPage from './ArtistPage.js';
import Layout from './Layout.js';

export default function App() {
  return (
    <Suspense fallback={<BigSpinner />}>
      <Router />
    </Suspense>
  );
}

function Router() {
  const [page, setPage] = useState('/');
  //const [isPending, startTransition] = useTransition();


  //this tells react that the state transition is not urgent
  //its better to keep showing the previous page instead
  //of hiding any already revealed content
  //now clicking on the button waits for the biography to load
  //and not reset layout
  function navigate(url) {
    startTransition(() => {
      setPage(url);
    });
  }

  let content;
  if (page === '/') {
    content = (
      <IndexPage navigate={navigate} />
    );
  } else if (page === '/the-beatles') {
    content = (
      <ArtistPage
        artist={{
          id: 'the-beatles',
          name: 'The Beatles',
        }}
      />
    );
  }
  return (
    <Layout>
    //<Layout isPending={isPending}>

      {content}
    </Layout>
  );
}

function BigSpinner() {
  return <h2>🌀 Loading...</h2>;
}


/*////////////////////////////////////////////////////////////////////*/
/*
//Indicating that a transition is happening 

there is no visual indication that a navigation is in progress
once the button is clicked in the previous example

to add an indicator, 
replace startTransition with useTransition
which gives a boolean isPending value
like the //in the example above

In the example below, it’s used to change the website header 
styling while a transition is happening:

//Resetting Suspense boundaries on navigation 
During a transition, React will avoid hiding already revealed 
content. However, if you navigate to a route with different 
parameters, you might want to tell React it is different content. 
You can express this with a key:

<ProfilePage key={queryParams.id} />

By specifying a key, you ensure that React treats different users’ 
profiles as different components, and resets the Suspense boundaries 
during navigation

//Providing a fallback for server errors and server-only content 

if you use one of the streaming server rendering API's
of a framework that relies on them
React will also use your suspense> boundaries to handle 
errors on the server

if a component throws an error on the server
React will not abort the server render
instead it will find the closest suspense component above it
and include its fallback
such as a spinner
into the generated server HTML
the user will see a spinner at first

On the client, React will attempt to render the same component again. 
If it errors on the client too, React will throw the error and display 
the closest error boundary. However, if it does not error on the client, 
React will not display the error to the user since the content was 
eventually displayed successfully.

You can use this to opt out some components from rendering on the 
server. To do this, throw an error in the server environment and 
then wrap them in a <Suspense> boundary to replace their HTML with 
fallbacks:

<Suspense fallback={<Loading />}>
  <Chat />
</Suspense>

function Chat() {
  if (typeof window === 'undefined') {
    throw Error('Chat should only render on the client.');
  }
  // ...
}

The server HTML will include the loading indicator. 
It will be replaced by the Chat component on the client.


//How do I prevent the UI from being replaced by a fallback 
during an update? 

Replacing visible UI with a fallback creates a jarring user experience. This can happen when an update causes a component to suspend, and the nearest Suspense boundary is already showing content to the user.

To prevent this from happening, mark the update as non-urgent using startTransition. During a transition, React will wait until enough data has loaded to prevent an unwanted fallback from appearing:

function handleNextPageClick() {
  // If this update suspends, don't hide the already displayed content
  startTransition(() => {
    setCurrentPage(currentPage + 1);
  });
}

This will avoid hiding existing content. However, any newly rendered Suspense boundaries will still immediately display fallbacks to avoid blocking the UI and let the user see the content as it becomes available.

If your router is integrated with Suspense, it should wrap its updates into startTransition automatically.


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
useDeferredValue
useDeferredValue is a React Hook that lets you defer updating a part 
of the UI.

const deferredValue = useDeferredValue(value)

Call useDeferredValue(value) at the top level of your component 
to get a deferred version of that value.

value can be any type strings and numbers) or 
objects created outside of rendering.
created values during rerendering and immediately pass to 
useDeferredValue will be different on every render
and will cause unnecessary rerenders

Returns;
initial render > same as the value provided
react will first attempt to re-render/return with the old value
then react will try another attempt to re-render/return in the background
with the new value

when it receives a different value compared with Object.js
in addition to the current render when it still uses the
previous value,
it schedules a re-render in the background with the new value

The background re-render is interruptible if there’s another update
to the value, React will restart the background re-render from scratch.

For example, if the user is typing into an input faster than a chart receiving its deferred value can re-render, the chart will only re-render after the user stops typing.

useDeferredValue is integrated with <Suspense>. 
If the background update caused by a new value suspends the UI, 
the user will not see the fallback. They will see the old deferred 
value until the data loads.

useDeferredValue does not by itself prevent extra network requests.

there is no fixed delay caused by it itself
as soon as React finishes the original re-render, React will 
immediately start working on the background re-render with the 
new deferred value. Any updates caused by events (like typing) 
will interrupt the background re-render and get prioritized over it.

The background re-render caused by useDeferredValue does not fire Effects until it’s committed to the screen. If the background re-render suspends, its Effects will run after the data loads and the UI updates.


import { useState, useDeferredValue } from 'react';
import SlowList from './SlowList.js';

export default function App() {
  const [text, setText] = useState('');
  const deferredText = useDeferredValue(text);
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <SlowList text={deferredText} />
    </>
  );
}


This optimization requires SlowList to be wrapped in memo. 
This is because whenever the text changes, React needs to be 
able to re-render the parent component quickly. 
During that re-render, deferredText still has its previous value, 
so SlowList is able to skip re-rendering (its props have not changed). 
Without memo, it would have to re-render anyway, defeating the point 
of the optimization.


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*



*/