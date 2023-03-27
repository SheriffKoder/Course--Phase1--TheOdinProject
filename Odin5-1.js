

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




*/