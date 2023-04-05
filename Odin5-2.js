

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
//the hook runs one time when the component mounts/inserted in the DOM tree

useEffect(() => {
  // Do something
}, []);

////equal to componentDidUpdate
////main difference only runs when a certain condition is changed
//hook run every time dependency color changes

useEffect(() => {
  // Do something
}, [color]);


//equal to componentDidMount and componentDidUpdate
////leave out the dependency array
//useEffect hook runs anytime the component is updated
//AND right after the initial render

useEffect(() => {
  // Do something
});


/////equal to a componentWillUnmount method.
//The return statement 
//we are adding to our useEffect is actually 



///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

state lets a component remember information like user input
form component state > store input value
image gallery component state > store selected image index

to add state to a component, use one of these hooks
useState: declares a state variable that you can update directly
useReducer: ''  ''      with the update logic inside a reducer function


////Context Hooks
lets a component receive information from distant parents without passing it as props.

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







*/