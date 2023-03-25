

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














*/