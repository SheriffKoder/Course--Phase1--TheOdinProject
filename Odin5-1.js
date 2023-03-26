

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






*/