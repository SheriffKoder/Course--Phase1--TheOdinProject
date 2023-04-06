

/*////////////////////////////////////////////////////////////////////*/
/*
Hooks

Hooks allows functional components to be smarter
to have a lifecycle as well as state

useRef, useContext, custom hooks

most common use hooks
useState and useEffect

//useState
import {useState} from react
allow set initial state as an argument
returns the current state + a function that updates it

const [time, setTime] = useState(new Date())

const App6 = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div> {count} </div>
      <button onClick={incrementCount}> Increment </button>
    </div>
  )

}





//
effect hook will get invoked with the first DOM updating
we can pass in a function in useEffect
and every time the DOM gets updated
the function in useEffect will get invoked too

also allows to to pass in an array as the second argument
which contains all the dependencies that will trigger the effect hook
if any of the dependencies changes
the effect hook will run again

more efficient way to make an Ajax request

instead of making the request every time with DOM updates
can pass dependencies that only make the request while these
values change

//declarations
//change
//tick effect interval for change
//return declaration

//so time changed
//use effect fires as a function..? so repeats call? *1



const ClockUsingHooks = props => {
    const [time, setTime] = useState(new Date())

    const changeTime = () => {
        setTime(new Date())
    }

    useEffect(() => {
        const tick = setInterval(() => {
            changeTime()
        }, 1000)
        
        return () => clearInterval(tick)
    })


    return (
        <div className="clock">
            <h1>Hello! This is a function component clock.</h1>
            <h2>It is {time.toLocaleTimeString()}.</h2>
        </div>
    )
}



//setting the state is an async task
//setting the state calls a re-render *1
//that is the reason for seeing a new count when clicking the button

//component will update after setting the state
//to use this opportunity of updating to do some tasks

//useEffect can act like componentDidMount, componentDidUpdate or componentWillUnmount


/////////////////////////////////////////////////////////
//useEffect cont.


//useEffect(() => {}, [])
{} the code that will be executed
() optional dependency array

dependency
any state, prop, context
that is used within the useEffect callback
can also include state/props that are not

useEffect will trigger based on changes in the dependencies listed

ESLint will warn if it expects a dependency
a warning but not required


////equal to componentDidMount
//empty dependency
//the hook runs one time when the component mounts/inserted in the DOM tree

useEffect(() => {
  // Do something
}, []);


////equal to componentDidUpdate
//dependency
////main difference only runs when a certain condition is changed
//hook run every time dependency color changes

useEffect(() => {
  // Do something
}, [color]);


//equal to componentDidMount and componentDidUpdate
//no dependency
////leave out the dependency array
//useEffect hook runs anytime the component is updated
//AND right after the initial render

useEffect(() => {
  // Do something
});


/////equal to a componentWillUnmount method.
//The return statement 
//we are adding to our useEffect is actually 

////component6: function Hooks in react_app_1



///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

state lets a component remember information like user input
form component state > store input value
image gallery component state > store selected image index

to add state to a component, use one of these hooks
useState: declares a state variable that you can update directly
useReducer: ''  ''      with the update logic inside a reducer function





////Context Hooks
lets a component receive information from distant parents 
without passing it as props.

for example, app's top level component can pass the
current UI theme to all components below,
no matter how deep

useContext reads and subscribes to a context.

function Button() {
  const theme = useContext(ThemeContext);
  // ...





////Ref Hooks
Refs let a component hold some information that isn’t used for 
rendering, like a DOM node or a timeout ID

Unlike with state, updating a ref does not re-render your component. 

are an “escape hatch” from the React paradigm
useful when need to work with non-React systems
such as built in API's


function Form() {
  const inputRef = useRef(null);
  // ...

useRef; declares a ref, can hold any value in it
most often a DOM node

useImperativeHandle; lets customize the ref exposed by
your component, rarely used




////Effect Hooks
Effects let a component connect and synchronize with external systems

this includes dealing with network, browser DOM, animations, 
widgets written using a different UI library
and other non-React code.

connects a component to an external system

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
  // ...


  //passed a prop of roomId
  //createConnection using prop
  //connect to the created connection
  //on dismount, disconnect
  //dependency on the prop roomId


//two used variations of useEffect with differences in timing
useLayoutEffect; fires before the browser repaints the screen
useInsertionEffect; fires before React makes changes to the DOM
  libraries can insert dynamic CSS here


////Performance Hooks
to optimize re-rendering performance is to skip unnecessary
work

for example can tell React to reuse a cached calculation
or to skip a re-render if the data has not changed since the previous render

To skip calculations and unnecessary re-rendering, use one of these Hooks:
useMemo; lets you cache the result of an expensive calculation.
useCallback; lets you cache a function definition before passing it down to an optimized component.

function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}


sometimes you cant skip re-rendering because the screen actually
needs to update
in that case, can improve performance by separating blocking
updates that must be synchronous

like typing into an input
from non-blocking updates
which don't need to block the user interface 
(like updating a chart)

To prioritize rendering, use one of these Hooks:
useTransition; lets you mark a state transition as non-blocking and allow other updates to interrupt it.
useDeferredValue; lets you defer updating a non-critical part of the UI and let other parts update first.



/////////
Other Hooks mostly useful to library authors and
aren't commonly used in the application code

useDebugValue lets you customize the label React DevTools displays for your custom Hook.
useId lets a component associate a unique ID with itself. Typically used with accessibility APIs.
useSyncExternalStore lets a component subscribe to an external store.


/////////
You can also define your own custom Hooks as JavaScript functions.




/*////////////////////////////////////////////////////////////////////*/
/*
useMemo
a React Hook that lets you cache the result of a calculation between re-renders.

const cachedValue = useMemo(calculateValue, dependencies)

called at the top level of your component
or extract a new component and move the state into it.


import { useMemo } from 'react';

function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(
    () => filterTodos(todos, tab),  //calculateValue function
    [todos, tab]    //dependency
  );
  // ...
}

//filterTodos function will rerun
TodoList updates its state or receives new props from its parent



calculateValue;
the function calculating the value that you want to cache
should be pure
should take no arguments
should return a value of any type

react will call your function during the initial render
in next renders, react will return the same value if deps. not changed
otherwise
it will call calculateValue, return its result
and store it so it can be reused later

dependencies;
React will compare each dependency with its previous value 
using the Object.is comparison.

Returns;
initial render > the result of calling calculateValue with no arguments
next renders > an already stored value from last render
if deps. not changed or call calcValue again and return its returned result


in strict mode
calc function will be called twice
if the function is pure it will affect nothing
and one of the results will be ignored


In other words, useMemo caches a calculation result between re-renders until its dependencies change.


By default, React will re-run the entire body of your 
component every time that it re-renders.



// cont : https://react.dev/reference/react/useMemo

The Object.is() static method determines whether two values are the same value.
console.log(Object.is('1', 1));
// Expected output: false


/*////////////////////////////////////////////////////////////////////*/
/*

useCallback is a React Hook that lets you cache a function 
definition between re-renders.

const cachedFn = useCallback(fn, dependencies)


import { useCallback } from 'react';

export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => { //&
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]); //&


Parameters:
fn; 
React will return (not call!) your function back to you 
during the initial render.
to decide when and whether to call it

same function if dependencies are not changed
otherwise will give the function passed during the current render
and store it in case it can be used later

dependencies;
The list of all reactive values referenced inside of the fn code.
Reactive values include props, state and all the variables and functions
declared directly inside your component body
if your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency.


To cache a function between re-renders of your component, 
wrap its definition into the useCallback Hook:

for example
you remove <ShippingForm /> from your JSX, it feels fast. This tells you that it’s worth trying to optimize the ShippingForm component.
if you verified a re-render is slow, you can tell ShippingForm to skip re-rendering when its props are the same as on last render by wrapping it in memo:

import { memo } from 'react';

const ShippingForm = memo(function ShippingForm({ onSubmit }) {
  // ...
});

then your component that uses the shipping Form

function ProductPage({ productId, referrer, theme }) {
  // Every time the theme changes, this will be a different function...
  function handleSubmit(orderDetails) {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }
  
  return (
    <div className={theme}>
      {/* ... so ShippingForm's props will never be the same, and it will re-render every time /}
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}


//////////////

With this change, ShippingForm will skip re-rendering if all of its props are the same as on the last render.
This is when caching a function becomes important

//////////////

function ProductPage({ productId, referrer, theme }) {
  // Tell React to cache your function between re-renders...
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]); // ...so as long as these dependencies don't change...

  return (
    <div className={theme}>
      {/* ...ShippingForm will receive the same props and can skip re-rendering/}
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

By wrapping handleSubmit in useCallback, you ensure that it’s the same function between the re-renders (until dependencies change). 



*/