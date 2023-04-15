

/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
Once your application has multiple pages, 
you need to set up a reliable routing system. 

to handle the component or page that should be rendered 
when navigating to a certain route.

For this we are going to use a package called react-router-dom.

Client-Side Routing
internal handling of routes inside the js file that is
rendered to the client (front-end)

Client-side routing helps in building single-page 
applications (SPAs) without refreshing as the user navigates. 

For example when a user clicks a navbar element, 
the URL changes and the view of the page is modified accordingly, 
within the client.

React Router is the standard routing library for React applications.
we can specify which component can be rendered based on the route. 
From version 4, react router uses dynamic routes (routing that takes place as your app is rendering).


How To Use React Router

create a react app
file called src/Profile.js

# npm i react-router-dom
will install dependencies 

create new file called RouteSwitch.js
file handles our routes



//RouteSwitch.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";

const RouteSwitch = () => {
  return (

    //BrowserRouter: Is a router, which uses the history API 
    //(pushState, replaceState and the popstate event) to keep 
    //your UI in sync with the URL. For completion we have to 
    //mention that there are other options than BrowserRouter, 
    //but for your current projects you can assume that 
    //BrowserRouter is at the root of all your projects.

    <BrowserRouter>

    //Renders the first child Route that matches the location.
    //Routes component is going to look through all your Routes 
    //and checks their path.
    //The first Route, whose path matches the url exactly will be rendered
    //all others will be ignored
    //
      <Routes>

      //Route: Those are our routes with a path, 
      //which equals the url path, and a component that 
      //should be rendered when we navigate to this url.

        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;

//when you go to link path /profile (of /page, /about)
the Profile element will show and App not

importing React, Profile/App
and few routing {BrowserRouter, Routes, Route}



////in index.js
import RouteSwitch from "./components/routeSwitch.js"; //

//allow routeSwitch.js to be run before App.js
const root = ReactDOM.createRoot(document.getElementById('rootDiv8'));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);


//learn more about routing
//look into the history of match object



In traditional websites, 
the browser requests a document from a web server, 
downloads and evaluates CSS and JavaScript assets, 
and renders the HTML sent from the server.

When the user clicks a link, it starts the process 
all over again for a new page.

Client side routing allows your app to update the URL 
from a link click without making another request for 
another document from the server. 
Instead, your app can immediately render some new UI 
and make data requests with fetch to update the page 
with new information.

This enables faster user experiences because the browser 
doesn't need to request an entirely new document or re-evaluate 
CSS and JavaScript assets for the next page. 
It also enables more dynamic user experiences with things 
like animation.

Client side routing is enabled by creating a Router 
and linking/submitting to pages with Link and <Form>:


Nested Routes
is the general idea of coupling segments of the URL
to component hierarchy and data
inspired from the Ember team which realized that in 
nearly every case, segments of the URL determine:
    The layouts to render on the page
    The data dependencies of those layouts

React Router embraces this convention with APIs 
for creating nested layouts coupled to URL segments and data.



//Dynamic Segments
//Ranked Route Matching
When matching URLs to routes, React Router will rank the 
routes according to the number of segments, static segments, 
dynamic segments, splats, etc. and pick the most specific match.
With ranked routes, you don't have to worry about route ordering.
https://reactrouter.com/en/main/start/overview

you rout the specific component not refresh the page or fetch the api



avoids going to the server then renders the component
it just renders the component without fetching from the server


//Component7: routing, react1>routing


React isn’t a framework, it’s a library. 
Therefore, it doesn’t solve all an application’s needs. 
It does a great job at creating components and providing 
a system for managing state, but creating a more complex SPA 
will require a supporting cast. 

Thinking in terms of nestable components and layouts 
will allow us to create reusable parts.

After creating the static HTML, convert it into 
React components:
into separate components


//nested components
ReactDOM.render((
  <Router>
    <Route component={MainLayout}>
      <Route component={SearchLayout}>
        <Route path="users" component={UserList} />
      </Route> 
    </Route>
  </Router>
), document.getElementById('root'));


Components will be nested in accordance with how the router 
nests its routes. When the user visits the /users route, 
React Router will place the UserList component inside 
SearchLayout and then both inside MainLayout. 
The end result of visiting /users will be the three nested 
components placed inside 'root'.

the Route component can either be written as one tag: <Route /> or two: <Route>...</Route>


The /product portion of the path is repetitive. 
We can remove the repetition by wrapping all three routes in 
a new <Route>:
<Route path="product">
  <IndexRoute component={ProductProfile} />
  <Route path="settings" component={ProductSettings} />
  <Route path="inventory" component={ProductInventory} />
  <Route path="orders" component={ProductOrders} />
</Route>

??

var browserHistory = ReactRouter.browserHistory;

ReactDOM.render((
  <Router history={browserHistory}>
    ...
  </Router>
), document.getElementById('root'));

browserHistory.push('/some/path');

??

If you clicked on a few routes in the example, 
you might notice that the browser’s back and forward 
buttons work with the router. This is one of the main reasons 
these history strategies exist. Also, keep in mind that 
with each route you visit,



//Route Matching
<Route path="users/:userId" component={UserProfile} />

This route will match when the user visits any path that starts 
with users/ and has any value afterwards. 
It will match /users/1, /users/143, or even /users/abc 
(which you’ll need to validate on your own).

React Router will pass the value for :userId as a prop 
to the UserProfile. This props is accessed as 
this.props.params.userId inside UserProfile.




/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
Testing

testing allows us to write maintainable and flexible code.
for React, React Testing Library

import React from "react";
import { ... } from "@testing-library/react"; <
import "@testing-library/jest-dom";  // optional <
import userEvent from "@testing-library/user-event"; <
import TestComponent from "path-to-test-component";


@testing-library/react will give us access to useful 
functions like render which we’ll demonstrate later on.

@testing-library/jest-dom includes some handy custom 
matchers (assertive functions) like toBeInTheDocument 
and more. (complete list on jest-dom’s github). 
Jest already has a lot of matchers so this package is not 
compulsory to use.

@testing-library/user-event provides the userEvent API that 
simulates user interactions with the webpage. Alternatively, 
we could import the fireEvent API from @testing-library/react.

Note: fireEvent is an inferior counterpart to userEvent and 
userEvent should always be preferred in practice.

No need to import jest since it will automatically detect 
test files (*.test.js or *.test.jsx).




when using
create-react-app
all the above packages come preinstalled and the scripts 
pre-configured in package.json


// App.js
import React from "react";
const App = () => <h1>Our First Test</h1>;
export default App;

// App.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  });
});

# npm test App.test.js


usable query methods:
getByRole
getBy
queryBy
findBy







/////////////////////////////////////////////////////////

Queries are the methods that Testing Library gives you 
to find elements on the page.

the difference between them is whether the query will 
throw an error if no element is found or if it will return 
a Promise and retry.
Depending on what page content you are selecting you choose

After selecting an element, you can use the Events API 
or user-event to fire events and simulate user interactions 
with the page, or use Jest and jest-dom to make assertions 
about the element.

There are Testing Library helper methods that work with queries.
As elements appear and disappear in response to actions
Async APIs like waitFor or findBy queries can be used to 
await the changes in the DOM.

To find only elements that are children of a specific element
you can use within. If necessary, there are also a few 
options you can configure, like the timeout for retries 
and the default testID attribute.

ex//
import {render, screen} from '@testing-library/react' // (or /dom, /vue, ...)

test('should show login form', () => {
  render(<Login />)
  const input = screen.getByLabelText('Username')
  // Events and assertions...
})

//Types of Queries

Single Elements
getBy...: Returns the matching node for a query, and throw a descriptive error if no elements match or if more than one match is found (use getAllBy instead if more than one element is expected).
queryBy...: Returns the matching node for a query, and return null if no elements match. This is useful for asserting an element that is not present. Throws an error if more than one match is found (use queryAllBy instead if this is OK).
findBy...: Returns a Promise which resolves when an element is found which matches the given query. The promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms. If you need to find more than one element, use findAllBy.
Multiple Elements
getAllBy...: Returns an array of all matching nodes for a query, and throws an error if no elements match.
queryAllBy...: Returns an array of all matching nodes for a query, and return an empty array ([]) if no elements match.
findAllBy...: Returns a promise which resolves to an array of elements when any elements are found which match the given query. The promise is rejected if no elements are found after a default timeout of 1000ms.
findBy methods are a combination of getBy* queries and waitFor. They accept the waitFor options as the last argument (i.e. await screen.findByText('text', queryOptions, waitForOptions))


0matches, 1match, >1matches, Retry (Async/Await)
getBy...	Throw error	Return element	Throw error	No
queryBy...	Return null	Return element	Throw error	No
findBy...	Throw error	Return element	Throw error	Yes
Multiple Elements				
getAllBy...	Throw error	Return array	Return array	No
queryAllBy...	Return []	Return array	Return array	No
findAllBy...	Throw error	Return array	Return array	Yes


//Priority
Based on the Guiding Principles, your test should resemble 
how users interact with your code (component, page, etc.) 
as much as possible. With this in mind, we recommend this 
order of priority:


(1) Queries Accessible to Everyone
Queries Accessible to Everyone Queries that reflect the experience of visual/mouse users as well as those that use assistive technology.

getByRole, can be used to query every element that is exposed 
in the accessibility tree. With the name option you can filter 
the returned elements by their accessible name.
Most often, this will be used with the name option like so: getByRole('button', {name: /submit/i})


getByLabelText
This method is really good for form fields. When navigating 
through a website form, users find elements using label text. 
This method emulates that behavior,

getByPlaceholderText

getByText
outside of forms, this method can be used to find non-interactive
elements (like divs, spans, and paragraphs).

getByDisplayValue
The current value of a form element can be useful 
when navigating a page with filled-in values.


(2) Semantic Queries
getByAltText: If your element is one which supports alt text (img, area, input, and any custom element), then you can use this to find that element.
getByTitle: The title attribute is not consistently read by screenreaders, and is not visible by default for sighted users

(3) Test IDs
getByTestId: The user cannot see (or hear) these, so this is only recommended for cases where you can't match by role or text or it doesn't make sense (e.g. the text is dynamic).


////////
Using Queries
The base queries from DOM Testing Library require you to pass a container as the first argument.
Most framework-implementations of Testing Library provide a pre-bound version of these queries
when you render your components with them which means you do not have to provide a container.
In addition, if you just want to query document.body 
then you can use the screen export as demonstrated below (using screen is recommended).


The primary argument to a query can be a string, regular expression, or function. 
There are also options to adjust how node text is parsed.
See TextMatch for documentation on what can be passed to a query.

<body>
  <div id="app">
    <label for="username-input">Username</label>
    <input id="username-input" />
  </div>
</body>

//You can use a query to find an element (byLabelText, in this case):

import {screen, getByLabelText} from '@testing-library/dom'

// With screen:
const inputNode1 = screen.getByLabelText('Username')

// Without screen, you need to provide a container:
const container = document.querySelector('#app')
const inputNode2 = getByLabelText(container, 'Username')


////Query options
You can pass a queryOptions object with the query type. 
See the docs for each query type to see available options, 
e.g. byRole API.


//screen
All of the queries exported by DOM Testing Library accept 
a container as the first argument. 
Because querying the entire document.body is very common
DOM Testing Library also exports a screen object which 
has every query that is pre-bound to document.body (using 
the within functionality). Wrappers such as React Testing Library re-export screen so you can use it the same way.


import {render, screen} from '@testing-library/react'

render(
  <div>
    <label htmlFor="example">Example</label>
    <input id="example" />
  </div>,
)

const exampleInput = screen.getByLabelText('Example')

Note
You need a global DOM environment to use screen
If you're using jest, with the testEnvironment set to jsdom, 
a global DOM environment will be available for you.

If you're loading your test with a script tag, 
make sure it comes after the body. An example can be seen here.


////TextMatch
Most of the query APIs take a TextMatch as an argument, 
which means the argument can be either a string, regex, 
or a function of signature 
(content?: string, element?: Element | null) => boolean 
which returns true for a match and false for a mismatch.


HTML:
<div>Hello World</div>
Will find the div:
// Matching a string:
screen.getByText('Hello World') // full string match
screen.getByText('llo Worl', {exact: false}) // substring match
screen.getByText('hello world', {exact: false}) // ignore case

// Matching a regex:
screen.getByText(/World/) // substring match
screen.getByText(/world/i) // substring match, ignore case
screen.getByText(/^hello world$/i) // full string match, ignore case
screen.getByText(/Hello W?oRlD/i) // substring match, ignore case, searches for "hello world" or "hello orld"

// Matching with a custom function:
screen.getByText((content, element) => content.startsWith('Hello'))


Will not find the div:
// full string does not match
screen.getByText('Goodbye World')

// case-sensitive regex with different case
screen.getByText(/hello world/)

// function looking for a span when it's actually a div:
screen.getByText((content, element) => {
  return element.tagName.toLowerCase() === 'span' && content.startsWith('Hello')
})


//Precision
Queries that take a TextMatch also accept an object as the final argument
that can contain options that affect the precision of string matching:

exact: Defaults to true; matches full strings, case-sensitive. 
When false, matches substrings and is not case-sensitive.

exact has no effect on regex or function arguments.
exact has no effect on accessible names specified with the name option of *byRole queries. You can use a regex for fuzzy matching on accessible names.
In most cases using a regex instead of a string gives you more control over fuzzy matching and should be preferred over { exact: false }.
normalizer: An optional function which overrides normalization behavior. See Normalization.


Normalization

Before running any matching logic against text in the DOM
DOM Testing Library automatically normalizes that text
normalization consists of trimming whitespace from the start and end of text
and collapsing multiple adjacent whitespace characters within the string into a single space.

If you want to prevent that normalization, 
or provide alternative normalization 
(e.g. to remove Unicode control characters), 
you can provide a normalizer function in the options object.

This function will be given a string and is expected to 
return a normalized version of that string.

Note:
Specifying a value for normalizer replaces 
the built-in normalization, but you can call getDefaultNormalizer to obtain a built-in normalizer, either to adjust that normalization or to call it from your own normalizer.

getDefaultNormalizer takes an options object which 
allows the selection of behaviour:
trim: Defaults to true. Trims leading and trailing whitespace
collapseWhitespace: Defaults to true. 
Collapses inner whitespace (newlines, tabs, repeated spaces) 
into a single space.

Normalization Examples
To perform a match against text without trimming:

screen.getByText('text', {
  normalizer: getDefaultNormalizer({trim: false}),
})

To override normalization to remove some 
Unicode characters whilst keeping some (but not all) 
of the built-in normalization behavior:

screen.getByText('text', {
  normalizer: str =>
    getDefaultNormalizer({trim: false})(str).replace(/[\u200E-\u200F]*/g, ''),
})
/*

Debugging
screen.debug()

For convenience screen also exposes a debug method in addition to the queries. 
This method is essentially a shortcut for console.log(prettyDOM()). It supports debugging the document, a single element, or an array of elements.

import {screen} from '@testing-library/dom'

document.body.innerHTML = `
  <button>test</button>
  <span>multi-test</span>
  <div>multi-test</div>
`

// debug document
screen.debug()
// debug single element
screen.debug(screen.getByText('test'))
// debug multiple elements
screen.debug(screen.getAllByText('multi-test'))

screen.logTestingPlaygroundURL()
For debugging using testing-playground, screen exposes 
this convenient method which logs and returns a URL that 
can be opened in a browser.

import {screen} from '@testing-library/dom'

document.body.innerHTML = `
  <button>test</button>
  <span>multi-test</span>
  <div>multi-test</div>
`

// log entire document to testing-playground
screen.logTestingPlaygroundURL()
// log a single element
screen.logTestingPlaygroundURL(screen.getByText('test'))


On top of the queries provided by the testing library, 
you can use the regular querySelector DOM API to query elements. 
Note that using this as an escape hatch to query by class or id 
is not recommended because they are invisible to the user. 
Use a testid if you have to, to make your intention to fall 
back to non-semantic queries clear and establish a stable API 
contract in the HTML.

// @testing-library/react
const {container} = render(<MyComponent />)
const foo = container.querySelector('[data-foo="bar"]')

Browser extension for Chrome named Testing Playground
try them out on testing-playground.com


//////////////////////////

user-event is a companion library for Testing Library that 
simulates user interactions by dispatching the events that 
would happen if the interaction took place in a browser.

fireEvent dispatches DOM events, whereas user-event simulates 
full interactions, which may fire multiple events and do 
additional checks along the way.

Testing Library's built-in fireEvent is a lightweight wrapper 
around the browser's low-level dispatchEvent API, which allows 
developers to trigger any event on any element. 

The problem is that the browser usually does more than just 
trigger one event for one interaction

For example, when a user types into a text box, 
the element has to be focused, and then keyboard and 
input events are fired and the selection and value on the 
element are manipulated as they type.

user-event allows you to describe a user interaction instead of a concrete event. It adds visibility and interactability checks along the way and manipulates the DOM just like a user interaction in the browser would. It factors in that the browser e.g. wouldn't let a user click a hidden element or type in a disabled text box.
This is why you should use user-event to test interaction with your components.

There are, however, some user interactions or aspects of 
these that aren't yet implemented and thus can't yet be 
described with user-event. In these cases you can use fireEvent 
to dispatch the concrete events that your software relies on.



We recommend invoking userEvent.setup() before the component is rendered. 
This can be done in the test itself, or by using a setup 
function. We discourage rendering or using any userEvent 
functions outside of the test itself - e.g. in a before/after 
hook - for reasons described in "Avoid Nesting When You're 
Testing".

// inlining
test('trigger some awesome feature when clicking the button', async () => {
  const user = userEvent.setup()
  render(<MyComponent />)

  await user.click(screen.getByRole('button', {name: /click me!/i}))

  // ...assertions...
})


// setup function
function setup(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  }
}

test('render with a setup function', async () => {
  const {user} = setup(<MyComponent />)
  // ...
})

//////////////////////////

jest-dom is a companion library for Testing Library that provides custom DOM element matchers for Jest

# npm install --save-dev @testing-library/jest-dom


//Then follow usage section from jest-dom's documentation to add the matchers to Jest.

import {screen} from '@testing-library/dom'

test('uses jest-dom', () => {
  document.body.innerHTML = `
    <span data-testid="not-empty"><span data-testid="empty"></span></span>
    <div data-testid="visible">Visible Example</div>
  `

  expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement()
  expect(screen.getByText('Visible Example')).toBeVisible()
})

Note: when using some of these matchers, you may need to make 
sure you use a query function (like queryByTestId) rather than 
a get function (like getByTestId). Otherwise the get* function 
could throw an error before your assertion.

Check out jest-dom's documentation for a full list of available matchers.


https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#roles



//ByRole
getByRole, queryByRole, getAllByRole, queryAllByRole, findByRole, findAllByRole




////render
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'

test('renders a message', () => {
  const {asFragment, getByText} = render(<Greeting />)
  expect(getByText('Hello, world!')).toBeInTheDocument()
  expect(asFragment()).toMatchInlineSnapshot(`
    <h1>Hello, World!</h1>
  `)
})

//render Options
You won't often need to specify options, 
but if you ever do, here are the available options 
which you could provide as a second argument to render.

//container
By default, React Testing Library will create a div and append 
that div to the document.body

and this is where your React component will be rendered.

If you provide your own HTMLElement container via this option, 
it will not be appended to the document.body automatically.

For example: If you are unit testing a tablebody element, 
it cannot be a child of a div. In this case, you can specify a table as the render container.

//ex//
const table = document.createElement('table')

const {container} = render(<TableBody {...props} />, {
  container: document.body.appendChild(table),
})


baseElement
The containing DOM node where your React Element is rendered 
in the container. If you don't specify the baseElement in the options 
of render, it will default to document.body.

This is useful when the component you want to test renders 
something outside the container div, e.g. when you want to snapshot 
test your portal component which renders its HTML directly in the body.


Note: the queries returned by the render looks into baseElement, 
so you can use queries to test your portal component without the baseElement.


//debug
NOTE: It's recommended to use screen.debug instead.
This method is a shortcut for console.log(prettyDOM(baseElement)).

import React from 'react'
import {render} from '@testing-library/react'

const HelloWorld = () => <h1>Hello World</h1>
const {debug} = render(<HelloWorld />)
debug()
// <div>
//   <h1>Hello World</h1>
// </div>
// you can also pass an element: debug(getByTestId('messages'))
// and you can pass all the same arguments to debug as you can
// to prettyDOM:
// const maxLengthToPrint = 10000
// debug(getByTestId('messages'), maxLengthToPrint, {highlight: false})


This is a simple wrapper around prettyDOM which is also exposed 
and comes from DOM Testing Library.

//rerender
It'd probably be better if you test the component that's 
doing the prop updating to ensure that the props are 
being updated correctly 

if you'd prefer to update the props of a rendered component 
in your test, this function can be used to update props of 
the rendered component.


import {render} from '@testing-library/react'

const {rerender} = render(<NumberDisplay number={1} />)

// re-render the same component with different props
rerender(<NumberDisplay number={2} />)

////unmount
This will cause the rendered component to be unmounted. 
This is useful for testing what happens when your component 
is removed from the page (like testing that you don't 
leave event handlers hanging around causing memory leaks).

This method is a pretty small abstraction over 
ReactDOM.unmountComponentAtNode

import {render} from '@testing-library/react'

const {container, unmount} = render(<Login />)
unmount()
// your component has been unmounted and now: container.innerHTML === ''


//asFragment
Returns a DocumentFragment of your rendered component. 
This can be useful if you need to avoid live bindings and 
see how your component reacts to events.

import React, {useState} from 'react'
import {render, fireEvent} from '@testing-library/react'

const TestComponent = () => {
  const [count, setCounter] = useState(0)

  return (
    <button onClick={() => setCounter(count => count + 1)}>
      Click to increase: {count}
    </button>
  )
}

const {getByText, asFragment} = render(<TestComponent />)
const firstRender = asFragment()

fireEvent.click(getByText(/Click to increase/))

// This will snapshot only the difference between the first render, and the
// state of the DOM after the click event.
// See https://github.com/jest-community/snapshot-diff
expect(firstRender).toMatchDiffSnapshot(asFragment())


//cleanup
Unmounts React trees that were mounted with render.
Please note that this is done automatically if the testing 
framework you're using supports the afterEach global and it is 
injected to your testing environment (like mocha, Jest, and Jasmine).
If not, you will need to do manual cleanups after each test.

For example, if you're using the ava testing framework, 
then you would need to use the test.afterEach hook like so:

import {cleanup, render} from '@testing-library/react'
import test from 'ava'

test.afterEach(cleanup)

test('renders into document', () => {
  render(<div />)
  // ...
})

Failing to call cleanup when you've called render could 
result in a memory leak and tests which are not "idempotent" 
(which can lead to difficult to debug errors in your tests).


//act
This is a light wrapper around the react-dom/test-utils act function. 
All it does is forward all arguments to the act function if your version of react supports act. 
It is recommended to use the import from @testing-library/react over react-dom/test-utils for consistency reasons.

renderHook
This is a convenience wrapper around render with a custom test component. 
The API emerged from a popular testing pattern and is mostly interesting for libraries publishing hooks.
You should prefer render since a custom test component results in more readable
and robust tests since the thing you want to test is not hidden behind an abstraction.

function renderHook<Result, Props>(
  render: (props: Props) => Result,
  options?: RenderHookOptions<Props>,
): RenderHookResult<Result, Props>

//example

import {renderHook} from '@testing-library/react'

test('returns logged in user', () => {
  const {result} = renderHook(() => useLoggedInUser())
  expect(result.current).toEqual({name: 'Alice'})
})


////renderHook Options
renderHook Options initialProps

Declares the props that are passed to the render-callback 
when first invoked. These will not be passed if you call 
rerender without props.

import {renderHook} from '@testing-library/react'

test('returns logged in user', () => {
  const {result, rerender} = renderHook((props = {}) => props, {
    initialProps: {name: 'Alice'},
  })
  expect(result.current).toEqual({name: 'Alice'})
  rerender()
  expect(result.current).toEqual({name: undefined})
})


NOTE: When using renderHook in conjunction with the wrapper 
and initialProps options, the initialProps are not passed 
to the wrapper component. To provide props to the wrapper 
component, consider a solution like this:

const createWrapper = (Wrapper, props) => {
  return function CreatedWrapper({ children }) {
    return <Wrapper {...props}>{children}</Wrapper>;
  };
};

...

{
  wrapper: createWrapper(Wrapper, { value: 'foo' }),
}


//renderHook Options wrapper
//renderHook Result

The renderHook method returns an object that has a 
few properties:

//result
Holds the value of the most recently committed return value of the render-callback:
import {renderHook} from '@testing-library/react'

const {result} = renderHook(() => {
  const [name, setName] = useState('')
  React.useEffect(() => {
    setName('Alice')
  }, [])

  return name
})

expect(result.current).toBe('Alice')

Note that the value is held in result.current. Think of result as a ref for the most recently committed value.


//rerender
import {renderHook} from '@testing-library/react'

const {rerender} = renderHook(({name = 'Alice'} = {}) => name)

// re-render the same hook with different props
rerender({name: 'Bob'})


/////////////////////////////////////////////////////////
Need review


ByRole methods are the favored methods for querying,
especially when paired with the name option. 

like so: getByRole("heading", { name: "Our First Test" })

Queries that are done through ByRole ensure that
our UI is accessible to everyone no matter what mode 
they use to navigate the webpage (i.e mouse or assistive technologies).

//Simulating User Events

React Testing Library provides the screen object which 
has all the methods for querying.
With screen, we don’t have to worry about keeping render’s 
destructuring up-to-date. Hence, it’s better to use screen 
to access queries rather than to destructure render.

// App.js

import React, { useState } from "react";

const App = () => {
  const [heading, setHeading] = useState("Magnificent Monkeys");

  const clickHandler = () => {
    setHeading("Radical Rhinos");
  };

  return (
    <>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
      <h1>{heading}</h1>
    </>
  );
};

export default App;


// App.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  it("renders magnificent monkeys", () => {
    // since screen does not have the container property, we'll destructure render to obtain container for this test
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("renders radical rhinos after button click", async () => {
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByRole("button", { name: "Click Me" });

    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});


In the first test, we utilize snapshots to check whether 
all the nodes render as we expect them to.

In the second test, we simulate a click event. 
Then we check if the heading changed.

toMatch is one of the various assertions we could have made.

after every test, React Testing Library unmounts the rendered components.
That’s why we render for each test. For a lot of tests for a 
component, the beforeEach jest function could prove handy.

Notice that the callback function for the second test is asynchronous.
This is because user.click() simulates the asynchronous nature of user interaction

As of of the testing library’s user-event APIs version 14.0.0, 
the user-event APIs have been updated to be asynchronous. 

It’s worth noting that some examples from other resources or 
tutorials might still use the synchronous userEvent.click() method



// This is the old approach of using userEvent.
it("renders radical rhinos after button click", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Click Me" });

  userEvent.click(button);

  expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
});



The setup() is internally triggered here. 
This is still supported by React Testing Library to ease 
the transition from v13 to v14.


///////

Snapshot testing is just comparing our rendered component 
with an associated snapshot file.

For example, the snapshot file which was automatically 
generated after we ran the “magnificent monkeys renders” 
test was:

// App.test.js.snap

// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`magnificent monkeys render 1`] = `
<div>
  <button
    type="button"
  >
    Click Me
  </button>
  <h1>
    Magnificent Monkeys
  </h1>
</div>
`;

It’s an HTML representation of the App component. 
And it will be compared against the App in future snapshot 
assertions. If the App changes even slightly, the test fails.

Snapshot tests are fast and easy to write. One assertion 
saves us from writing multiple lines of code. For example, 
with a toMatchSnapshot, we’re spared of asserting the 
existence of the button and the heading. They also don’t 
let unexpected changes creep into our code

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
Snapshot testing
are a very useful tool whenever you want to make sure your UI does not change unexpectedly.

A typical snapshot test case renders a UI component, 
takes a snapshot, then compares it to a reference snapshot 
file stored alongside the test. 

The test will fail if the two snapshots do not match: 
either the change is unexpected, or the reference snapshot 
needs to be updated to the new version of the UI component.


//Snapshot Testing with Jest

a similar approach can be taken when it comes to testing React components
instead of rendering the graphical UI
and building the entire app
a test rendered quickly generate a serializable value
of your react tree

import renderer from 'react-test-renderer';
import Link from '../Link';

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

The first time this test is run, Jest creates a snapshot file 
that looks like this:
exports[`renders correctly 1`] = `
<a
  className="normal"
  href="http://www.facebook.com"
  onMouseEnter={[Function]}
  onMouseLeave={[Function]}
>
  Facebook
</a>
`;

The snapshot artifact should be committed alongside code changes
and reviewed as part of your code review process.
Jest uses pretty-format to make snapshots human-readable during code review.

rendering the same component with different props in other 
snapshot tests will not affect the first one, as the tests 
don't know about each other.


//Updating Snapshots

the case when a snapshot test is failing due to an 
intentional implementation change.

One such situation can arise if we intentionally 
change the address the Link component in our example 
is pointing to.

// Updated test case with a Link to a different address
it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="http://www.instagram.com">Instagram</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

fails
snapshot for our updated component no longer matches 
the snapshot artifact for this test case.

To resolve this, we will need to update our snapshot 
artifacts. You can run Jest with a flag that will tell it to re-generate snapshots:

jest --updateSnapshot

You may also use the equivalent single-character -u flag 
to re-generate snapshots if you prefer.

If we had any additional failing snapshot tests due to an 
unintentional bug, we would need to fix the bug before 
re-generating snapshots to avoid recording snapshots of 
the buggy behavior.

If you'd like to limit which snapshot test cases get 
re-generated, you can pass an additional --testNamePattern 
flag to re-record snapshots only for those tests that 
match the pattern.

You can try out this functionality by cloning the snapshot 
example, modifying the Link component, and running Jest.


//Interactive Snapshot Mode
Failed snapshots can also be updated interactively in watch mode:

//Inline Snapshots
Inline snapshots behave identically to external snapshots (.snap files),
except the snapshot values are written automatically back into the source code.

Example:

First, you write a test, calling .toMatchInlineSnapshot() with no arguments:

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="https://example.com">Example Site</Link>)
    .toJSON();
  expect(tree).toMatchInlineSnapshot();
});

The next time you run Jest, tree will be evaluated, and a snapshot will be written as an argument to toMatchInlineSnapshot:

it('renders correctly', () => {
  const tree = renderer
    .create(<Link page="https://example.com">Example Site</Link>)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
<a
  className="normal"
  href="https://example.com"
  onMouseEnter={[Function]}
  onMouseLeave={[Function]}
>
  Example Site
</a>
`);
});

That's all there is to it! You can even update the snapshots with --updateSnapshot or using the u key in --watch mode.
By default, Jest handles the writing of snapshots into your source code.


//Property Matchers
Often there are fields in the object you want to snapshot 
which are generated (like IDs and Dates). If you try to 
snapshot these objects, they will force the snapshot to 
fail on every run:

For these cases, Jest allows providing an asymmetric 
matcher for any property. These matchers are checked before 
the snapshot is written or tested, and then saved to the 
snapshot file instead of the received value:

it('will check the matchers and pass', () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'LeBron James',
  };

  expect(user).toMatchSnapshot({
    createdAt: expect.any(Date),
    id: expect.any(Number),
  });
});

// Snapshot
exports[`will check the matchers and pass 1`] = `
Object {
  "createdAt": Any<Date>,
  "id": Any<Number>,
  "name": "LeBron James",
}
`;


Any given value that is not a matcher will be checked 
exactly and saved to the snapshot:

it('will check the values and pass', () => {
  const user = {
    createdAt: new Date(),
    name: 'Bond... James Bond',
  };

  expect(user).toMatchSnapshot({
    createdAt: expect.any(Date),
    name: 'Bond... James Bond',
  });
});

// Snapshot
exports[`will check the values and pass 1`] = `
Object {
  "createdAt": Any<Date>,
  "name": 'Bond... James Bond',
}
`;

If the case concerns a string not an object then you need to 
replace random part of that string on your own before testing 
the snapshot.
You can use for that e.g. replace() and regular expressions.

const randomNumber = Math.round(Math.random() * 100);
const stringWithRandomData = `<div id="${randomNumber}">Lorem ipsum</div>`;
const stringWithConstantData = stringWithRandomData.replace(/id="\d+"/, 123);
expect(stringWithConstantData).toMatchSnapshot();

Another way is to mock the library responsible for 
generating the random part of the code you're snapshotting.

Best Practices
Snapshots are a fantastic tool for identifying unexpected 
interface changes within your application – whether that 
interface is an API response, UI, logs, or error messages. 
As with any testing strategy, there are some best-practices 
you should be aware of, and guidelines you should follow, 
in order to use them effectively.

1. Treat snapshots as code
2. Tests should be deterministic, same value each test, otherwise mock the changing properties
Date.now = jest.fn(() => 1482363367071); (mocking date)
3. Use descriptive snapshot names

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

Snapshots might seem the best thing that has happened to us 
while testing thus far.

Snapshot tests may cause false positives. Since we cannot 
ascertain the validity of the component from a snapshot test, 
a bug might go undetected.

The other issue with snapshots is false negatives. 
Even the most insignificant of changes compel the test to fail. 

Snapshots aren’t inherently bad; they do serve a purpose. 
But it’s beneficial to understand when to snapshot, 
and when not to snapshot.

https://testing-library.com/docs/dom-testing-library/cheatsheet/
https://testing-library.com/docs/queries/bytestid/
https://tsh.io/blog/pros-and-cons-of-jest-snapshot-tests/








/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

Snapshot testing has become very popular for front 
end-development over the last few years. The term has 
almost become synonymous with Jest and React, but it can 
be used to test more than just components. 

Snapshot testing is a type of “output comparison” 
These tests prevent regressions by comparing the current 
characteristics of an application or component with stored 
“good” values for those characteristics.

Snapshot tests are fundamentally different from unit and 
functional tests.

While these types of tests make assertions about the correct 
behavior of an application, snapshot tests only assert that 
the output now is the same as the output before

it says nothing about whether the behavior was 
correct in either case.

front-end tests typically focus on two: data (serializable 
JavaScript values) and images. 

For example, Depicted compares an image of a rendered page 
or component against a stored image of the rendered entity 
and flags any “perceptual” differences.

Approval Tests compare JavaScript values, such as the output 
of application functions, to stored good values, 
similar to how unit tests often work

Jest’s snapshot tests also work for serializable JavaScript 
values, but they are most commonly applied to the DOM-based 
render trees of React components.

Snapshot testing isn’t a new concept. The term has 
traditionally referred to visual regression testing,

where a literal snapshot of a rendered app or page is 
compared to a stored image

typically much shorter and easier to write than 
traditional unit tests.

Several tools take snapshots of serializable data. 
Jest, as mentioned before, has built-in support for snapshot 
testing, and is frequently used to test React components.


A significant disadvantage is that they’re tightly coupled to an application’s output
Any changes, even to insignificant parts of the output, can cause snapshot tests to fail.

Developers then must (or at least should) manually verify 
that everything is still working properly and update the 
snapshots.

Snapshot tests aren’t inherently well suited to dynamic content.


Snapshot tests are easy to create and maintain, 
and they are a great way to check that your application’s 
behavior isn’t changing unexpectedly during development. 
However, they’re not a replacement for unit and functional 
tests, which verify that an application is working correctly, 
not just that it hasn’t changed.

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////







/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

on large scale apps worked on by many developers
we can easily detect when a change breaks something 
in our app - before we ship our code to production.

how to test React components using the React Testing Library. 
Some familiarity with Jest testing framework is assumed.

React Testing Library helps us test the behavior of our 
React components from the perspective of the users that 
will use our app.

React Testing Library is used with a testing framework. 
Although React Testing Library is not dependent on any 
specific testing framework and can be used with any framework

the official docs of this library recommend to use 
the library with Jest.

If you are using a custom React setup, then you need 
to install React Testing Library. You can install it 
using the following command

npm install --save-dev @testing-library/react


//
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;

We will write our tests in a separate file, named App.test.js.
Jest will automatically detect any files with the name 
ending with test.js.

In our first test, we will test whether the h1 element 
in our App component is rendered in the DOM or not.

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render h1 element', () => {
  render(<App />);
  expect(screen.getByText('Hello World')).toBeInTheDocument();
});



A render function that will be used to render the component 
which we will be testing

And a screen object that contains different methods to 
select elements in the document.

After that, we are calling the test function which is a 
function provided by Jest. It takes two arguments:

A string that represents the name of the test
And a function which contains the code of our test

we first render our App component using the render function 
from React Testing Library. 
The render function takes any JSX that you want to render.

The screen object contains different query methods which 
the React Testing Library provides. In our first test we 
used the getByText query method to select the h1 element 
using the text it contains

To run our first test, use one of the following commands:
npm test
or
npm run test

//If you didn't use create-react-app to create a React project, 
you will need to have a test script in the package.json 
file before you run the test command.

To see the HTML output of your component, 
you could use a method named debug of the screen object.

test('render h1 element', () => {
  render(<App />);

  screen.debug();

  expect(screen.getByText('Hello World')).toBeInTheDocument();
});


If you run Jest in watch mode, it will automatically run 
the tests when you make any change in your tests.

After making the above change, check the output in the 
terminal. Not only our test will pass but you will see the 
following HTML output:

getByText
needs to be an exact match, meaning in our first test


You could also pass a regular expression to getByText 
for a partial match. So in our first test, we could write
getByText(/Hello/);


React Testing Library provides different query methods 
for selecting elements. Each of those query methods belong 
to one of the following categories:
getBy\*
getByAll\*
queryBy\*
queryAllBy\*
findBy\*
findAllBy\*

There are other methods that can be used to select elements. 
Following methods belong to the getBy* category of queries.
getByText
getByRole
getByLabelText
getByPlaceholderText
getByAltText
getByDisplayValue

There are similar methods available in other categories as 
well, for example, the following methods can be found under 
the queryBy* category.
queryByText
queryByRole
queryByLabelText
queryByPlaceholderText
queryByAltText
queryByDisplayValue

To learn all about the individual methods, check the 
official docs and API reference, for example for getByText.

getByText: Selects an element that contains the text passed as an argument to this method
getByRole: Selects an element by the accessibility role
getByLabelText: Selects an element associated with the label whose htmlFor attribute matches the string passed to this method as an argument.
getByPlaceholderText: Selects the element by its placeholder text.
getByAltText: Selects an element (normally an img element) with the matching value of alt attribute.
getByDisplayValue: Returns the input, textarea, or select element that has the matching display value.



//Selecting Elements using the id Attribute
<span data-testid="mySpan">Hello</span>

span element above can be selected as shown below:
const el = getByTestId('mySpan');


The Differences Between Different Query Categories
getBy\*: Query methods in this category 
return the first matching element 
or throw an error if no match was found 
or if more than one match was found.

getByAll\*: Query methods in this category 
return an array of all matching elements 
or throw an error if no elements matched

queryBy\*: Query methods in this category 
return the first matching element 
or return null if no elements match. 
They also throw an error if more than one match is found

queryAllBy\*: Query methods in this category 
return an array of all matching elements 
or return an empty array if no elements match

findBy\*: Query methods in this category 
return a promise which resolves when an element is found 
which matches the given query. 
The promise is rejected if no element is found 
or if more than one element is found after a default timeout 
of 1000ms

findAllBy\*: Query methods in this category 
return a promise which resolves to an array of elements 
when any elements are found which match the given query. 
The promise is rejected if no elements are found after 
a default timeout of 1000ms




if you want to select an element that is rendered after 
an asynchronous operation, use the findBy* or findByAll* 
variants.

If you want to assert that some element should not be 
in the DOM, use queryBy* or queryByAll* variants. 
Otherwise use getBy* and getByAll* variants.


In our first test written above, we used a method named 
toBeInTheDocument to check if the h1 element was in the 
DOM or not. This is an assertive function that is used on 
the right side of an assertion.

Jest provides many assertive function but React Testing Library 
adds more assertive functions in an extra package named 
jest-dom.

This package comes pre-installed in a project created 
with create-react-app.


Assertive functions provided by this package are:
toBeDisabled
toBeEnabled
toBeEmpty
toBeEmptyDOMElement
toBeInTheDocument
toBeInvalid
toBeRequired
toBeValid
toBeVisible
toContainElement
toContainHTML
toHaveAttribute
toHaveClass
toHaveFocus
toHaveFormValues
toHaveStyle
toHaveTextContent
toHaveValue
toHaveDisplayValue
toBeChecked
toBePartiallyChecked
toHaveDescription



Testing Multiple Elements
function App() {
  return (
    <div>
      <ul className="animals">
        <li>Cat</li>
        <li>Whale</li>
        <li>Lion</li>
        <li>elephant</li>
        <li>Rhino</li>
      </ul>
    </div>
  );
}


Test the following
The ul element should be in the document.
The ul element should have a class named animals.
There should be exactly 5 list items in the ul element.

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('list contains 5 animals', () => {
  render(<App />);

  const listElement = screen.getByRole('list'); //ul
  const listItems = screen.getAllByRole('listitem'); //li's

  expect(listElement).toBeInTheDocument(); //jest-dom
  expect(listElement).toHaveClass('animals'); //jest-dom
  expect(listItems.length).toEqual(5); //jest
});



////Asynchronous Tests

Component is rendered after an asynchronous request to 
jsonplaceholder api to fetch a single user.

create a User component that will be rendered once 
the user has been fetched from the API.

//User Component
function User(props) {
  const { name, email } = props.user;

  return (
    <div className="person">
      <h3>{name}</h3>
      <span>{email}</span>
    </div>
  );
}

//App Component
function App() {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((user) => setUser(user))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <span>{error}</span>;
  }

  return <div>{user ? <User user={user} /> : <span>Loading...</span>}</div>;
}

To test whether the user is fetched from the API and 
rendered in the DOM, we will mock the fetch function so 
that we don't make an actual request while testing.


//To mock the fetch function, we will provide our 
own implementation of the fetch function.

window.fetch = jest.fn(() => {
  const user = { name: 'Jack', email: 'jack@email.com' };

  return Promise.resolve({
    json: () => Promise.resolve(user),
  });
});


When we render the App component, our component will 
now use the mocked version of the fetch function.

Test the following
While the request is in progress, a loading text should be visible.
Therafter, the user's name should be rendered in the document.
In case of an error, an error message should be rendered.

import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';

test('loading text is shown while API request is in progress', async () => {
  render(<App />);
  const loading = screen.getByText('Loading...');

  expect(loading).toBeInTheDocument();

  await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
});


When testing components that contain an asynchronous operation, like an API request in our App component, you might see a warning message which says
Warning: An update to App inside a test was not wrapped 
in act(...)
check this post
https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning


In our case, we get this warning because after we assert 
that the loading text should be in the document, our component's 
state is updated and the component is re-rendered. 
Our promise (in the fake fetch method) does resolve instantly 
after all.

We can avoid this warning by waiting for the component to 
re-render, after the API request, before ending our test. 
To wait for a component to re-render, we have used the 
waitForElementToBeRemoved function. This function will not 
let our test finish until the loading text has disappeared 
from the DOM, which only happens in case of an error or a 
successful API request.

The waitForElementToBeRemoved function returns a Promise 
so we need to await it. And in order to use the await 
keyword, we have used an async function.

Now lets write the second test to assert that user is 
successfully fetched and the user's name is rendered in the 
DOM.

test("user's name is rendered", async () => {
  render(<App />);
  const userName = await screen.findByText('Jack');
  expect(userName).toBeInTheDocument();
})

asynchronous test which will assert that in case of an error, 
our App component shows an error message.

test('error message is shown', async () => {
  window.fetch.mockImplementationOnce(() => {
    return Promise.reject({ message: 'API is down' });
  });

  render(<App />);

  const errorMessage = await screen.findByText('API is down');
  expect(errorMessage).toBeInTheDocument();
});


The only thing to be noticed here is that we are using a 
different version of our mocked fetch function. 
This is needed because our initial mocked version of the 
fetch function doesn't reject the Promise. So to force 
our API request to fail, we reject the Promise with an 
object containing a message property.

The value of this message property is saved in the state 
of our App component and displayed to the user when our 
API request fails. Hence we're checking for this message 
with findByText("API is down").


//Grouping Tests in a Test Suite
there is no indication on the terminal that these three 
tests are related to each other.
We can group them together in a test suite by wrapping 
them with the describe function provided by Jest.

import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import App from './App';

window.fetch = jest.fn(() => {
  const user = { name: 'Jack', email: 'jack@email.com' };

  return Promise.resolve({
    json: () => Promise.resolve(user),
  });
});

describe('Testing App Component', () => {
  test('loading text is shown while API request is in progress', async () => {
    render(<App />);
    const loading = screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
  });

  test("user's name is rendered", async () => {
    render(<App />);
    const userName = await screen.findByText('Jack');
    expect(userName).toBeInTheDocument();
  });

  test('error message is shown', async () => {
    window.fetch.mockImplementationOnce(() => {
      return Promise.reject({ message: 'API is down' });
    });

    render(<App />);

    const errorMessage = await screen.findByText('API is down');
    expect(errorMessage).toBeInTheDocument();
  });
});

Notice how our tests are grouped together under 
Testing App Component.

//Simulating User Interactions
React Test Library provides an fireEvent API which can 
be used to trigger events like change on an input element.

React Testing Library also provides another API for 
simulating use interactions in a separate package 
named user-event. This API builds on top of the 
fireEvent API and contains functions which mimic browser 
behavior more closely than the fireEvent API. For example, 
fireEvent.change() triggers only a change event whereas 
UserEvent.type triggers change, keyDown, keyPress and 
keyUp events.

//render a counter that can be incremented using the 
"increment" and "decrement" buttons.

function App() {
  const [counter, setCounter] = React.useState(0);

  const increment = () => {
    setCounter((prevCounter) => ++prevCounter);
  };

  const decrement = () => {
    setCounter((prevCounter) => --prevCounter);
  };

  return (
    <div>
      <h2 data-testid="counter">{counter}</h2>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}


//We will write two tests to assert that counter is 
incremented and decremented correctly. We will also group 
both our tests in a single test suite.

import React from 'react';
import { render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import App from './App';

describe('Testing App Component', () => {
  test('counter is incremented on increment button click', () => {
    render(<App />);

    const counter = screen.getByTestId('counter');
    const incrementBtn = screen.getByText('Increment');

    UserEvent.click(incrementBtn);
    UserEvent.click(incrementBtn);

    expect(counter.textContent).toEqual('2');
  });

  test('counter is decremented on decrement button click', () => {
    render(<App />);

    const counter = screen.getByTestId('counter');
    const decrementBtn = screen.getByText('Decrement');

    UserEvent.click(decrementBtn);
    UserEvent.click(decrementBtn);

    expect(counter.textContent).toEqual('-2');
  });
});

The first test checks if the counter is incremented correctly 
by simulating a click event on the increment button twice. 
As the initial value of counter is zero, after clicking the 
increment button twice, our counter's value should be 2.

Note that we have passed a string "2" to the toEqual function 
instead of a number 2. The reason is that we are using the 
textContent property of an HTML element to get the value of 
the counter.

You might have expected that, as we decrement the counter 
after incrementing it twice in the first test, the counter's 
value should be "0" instead of "-2" but that's not the case!

That's because the React Testing Library automatically 
unmounts the React component tree after each test.

It should be noted that this automatic cleanup is done only 
when we use the React Testing Library with a testing framework 
that has an afterEach global function. As Jest has such a 
function, our component tree is automatically cleaned up 
after each test. That is why counter's value is "-2" after 
the second test.

//Testing Callbacks
Consider a scenario where you have a component that 
represents an input element. This component receives 
two props:
The value of the input element
And a callback function which will be used to handle 
the onChange event on the input element

In addition, this input element is a controlled, meaning 
its value is derived from the state of the component in 
which it is rendered.

Now you want to test whether the value of the input element 
is updated correctly and also make sure that the callback 
function is called each time the value of the input changes.


//create an Input component and also render this Input 
component in the App component
passing in the required props from the App component to 
the Input component.

Input component
export function Input(props) {
  const { handleChange, inputValue } = props;
  return <input onChange={handleChange} value={inputValue} />;
}

App component
function App() {
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <Input handleChange={handleChange} inputValue={inputValue} />
    </div>
  );
}

//In the first test, we will assert that the input 
value is updated correctly.

import UserEvent from '@testing-library/user-event';

test('input value is updated correctly', () => {
  render(<App />);

  const input = screen.getByRole('textbox');
  UserEvent.type(input, 'React');

  expect(input.value).toBe('React');
});

We are selecting the input element by its role. 
What's great about the getByRole query method is that 
if you pass any role to this method that is not associated 
with any element in your component, it will suggest you the 
available roles once you run the test.

After selecting the input element, we are using the 
user-event API to trigger an onChange event on the input 
element. Since we wrote "React" in the input component, 
we expect its value to be "React".

//For our second test, we will test whether or not 
the handleChange callback function is called every time 
input value is changed.

To test this, we will mock the handleChange function 
which is passed to the Input component so that we can 
track how many times it was called. And instead of 
rendering the App component, we will render the Input 
component, passing in the mocked version of the handleChange 
function.

import UserEvent from '@testing-library/user-event';
import { Input } from './App';

test('call the callback every time input value is changed', () => {
  const handleChange = jest.fn();

  render(<Input handleChange={handleChange} inputValue="" />);

  const input = screen.getByRole('textbox');
  UserEvent.type(input, 'React');

  expect(handleChange).toHaveBeenCalledTimes(5);
});

As we will render the Input component instead of App, 
we need to import the Input component in our test file. 
At the start of our test, we have mocked the handleChange 
function and then passed it as a prop to the Input component.

We again are using the user-event API to trigger an 
onChange event on the input element and after that we 
are asserting that the handleChange function has been 
called 5 times because we typed "React" (= 5 characters) 
in the input element.


another example
scenario is testing components that are connected to a 
Redux store. Everything you learned in this tutorial still 
applies though - you just need to mock the Redux store 
which can be done using the Redux Mock Store library. 
Once you have mocked the Redux store and the component 
you want to test receives the state as props from the 
mocked Redux store, you can test your components in the 
same way as you learned in this tutorial.

https://academind.com/tutorials/testing-react-apps

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////






/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

yarn add react-testing-library jest-dom

import React from "react";

export default function Header({text}) {
    return (
        <header>
            <h1 data-testid="h1tag" className="fancy-h1">
                {text}
            </h1>
        </header>
    );
}


import React from 'react';
import { render, cleanup} from 'react-testing-library';
import "jest-dom/extend-expect";
import Header from "./Header";

//call cleanup function to clean the garbage from using jest
//calls from jest and provide globally
//after each test clean up
afterEach(cleanup);

it("renders", () =>{
    const {asFragment} = render(<Header text="Hello!" />);
    expect(asFragment().toMatchSnapshot());
});


//render returns other little functions specific to the comonent
use asFragment, the chunk of html that this component renders

//snapshot is the html that you render

press u to update the snapshot or fix the code to meet the sanpshot

it("inserts text in h1", () => {
    const {getByTestId, getByText} = render(<Header text="Hello!" />);
})

//both of these functions allow us to select indivial elements
returned from what the component renders
also getByLabel, Role etc.

css was not meant for testing but for styling


expect(getByTestId("h1tag")).toHaveTextContent("Hello!");
//looks for subset not the entire word

expect(getByTestId("h1tag")).toHaveClass("fancy-h1");
//test class

//now snapshot is broken, press u and update snapshot

https://www.youtube.com/watch?v=YQLn7ycfzEo
https://github.com/gnapse/jest-dom < find the info want to use





/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

Part2
/////////////////////////////////////////////////////////
Mocking

// FavoriteInput.js

import React from "react";

const FavoriteInput = ({ onChange: onInputChange, id }) => {
  const inputHandler = (event) => onInputChange(event.target.value);

  return (
    <label htmlFor={id}>
      What is your favorite wild animal?
      <input id={id} onChange={inputHandler} />
    </label>
  );
};

export default FavoriteInput;


// FavoriteInput.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import FavoriteInput from "./FavoriteInput";

describe("Favorite Input", () => {
  it("calls onChange correct number of times", async () => {
    const onChangeMock = jest.fn();
    const user = userEvent.setup();

    render(<FavoriteInput onChange={onChangeMock} />);
    const input = screen.getByRole("textbox");

    await user.type(input, "Lion");

    expect(onChangeMock).toHaveBeenCalledTimes(4);
  });

  it("calls onChange with correct argument(s) on each input", async () => {
    const onChangeMock = jest.fn();
    const user = userEvent.setup();

    render(<FavoriteInput onChange={onChangeMock} />);
    const input = screen.getByRole("textbox");

    await user.type(input, "Ox");

    expect(onChangeMock).toHaveBeenNthCalledWith(1, "O");
    expect(onChangeMock).toHaveBeenNthCalledWith(2, "Ox");
  });

  it("input has correct values", async () => {
    const onChangeMock = jest.fn();
    const user = userEvent.setup();

    render(<FavoriteInput onChange={onChangeMock} />);
    const input = screen.getByRole("textbox");

    await user.type(input, "Whale");

    expect(input).toHaveValue("Whale");
  });
});

Three tests and we are done with this component.
We mock the onChange handler using one of Jest’s functions, jest.fn()

first test, we assert that the mock function is invoked correct number of times.
the second test ensures that the mock function is called with the correct arguments.
The third test seems redundant, and it is; it’s just here to show another way we could’ve tested the component.

But what if you want to set up your mocks in a beforeEach 
block rather than in every test? That’s fine in some cases

It is recommended to invoke userEvent.setup() before rendering 
the component, and it is discouraged to call renders and 
userEvent functions outside of the test itself, (for example, 
in a beforeEach block). 

If you find yourself repeating the same code in multiple tests, 
the recommended approach to shorten each test is to write a setup 
function, as outlined in the documentation.


/////////////////////////////////////////////////////////

We recommend invoking userEvent.setup() before the component 
is rendered. This can be done in the test itself, or by using 
a setup function. We discourage rendering or using any 
userEvent functions outside of the test itself - e.g. 
in a before/after hook - for reasons described in 
"Avoid Nesting When You're Testing".

// inlining
test('trigger some awesome feature when clicking the button', async () => {
  const user = userEvent.setup()
  render(<MyComponent />)

  await user.click(screen.getByRole('button', {name: /click me!/i}))

  // ...assertions...
})

// setup function
function setup(jsx) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  }
}

test('render with a setup function', async () => {
  const {user} = setup(<MyComponent />)
  // ...
})

/////////////////////////////////////////////////////////






Notice how we mock the Submission component:
jest.mock('../submission', () => ({ submission, isDashboardView }) => (
  <>
    <div data-test-id="submission">{submission.id}</div>
    <div data-test-id="dashboard">{isDashboardView.toString()}</div>
  </>
));


We only render the bare minimum to realize the validity of 
the component we’re testing. Next, we set up our props with 
fake data and mocked functions.

almost all the tests follow a certain pattern in terms of the 
way they’re written. They follow the Arrange-Act-Assert pattern

https://github.com/TheOdinProject/theodinproject/blob/main/app/javascript/components/project-submissions/components/submissions-list.jsx



/////////////////////////////////////////////////////////

"Arrange-Act-Assert"
a pattern for arranging and formatting code in UnitTest methods:
Each method should group these functional sections, separated by blank lines:
Arrange all necessary preconditions and inputs.
Act on the object or method under test.
Assert that the expected results have occurred.

Examples:
 @Test
 public void test() {
    String input = "abc";
    		
    String result = Util.reverse(input);
    
    assertEquals("cba", result);
 }

/////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////
secrets of the act(...) api

tl;dr: wrap your test interactions with act(() => ...). 
React will take care of the rest. 
Note that for async act(...) you need React version at 
least v16.9.0-alpha.0.

guarantees 2 things for any code run inside its scope:

any state updates will be executed
any enqueued effects will be executed

function App() {
  let [ctr, setCtr] = useState(0);
  useEffect(() => {
    setCtr(1);
  }, []);
  return ctr;
}


it("should render 1", () => {
  const el = document.createElement("div");
  ReactDOM.render(<App />, el);
  expect(el.innerHTML).toBe("1"); // this fails!
});

it("should render 1", () => {
  const el = document.createElement("div");
  act(() => {
    ReactDOM.render(<App />, el);
  });
  expect(el.innerHTML).toBe("1"); // this passes!
});


/////////////

function App() {
  let [counter, setCounter] = useState(0);
  return <button onClick={() => setCounter(counter + 1)}>{counter}</button>;
}

it("should increment a counter", () => {
  const el = document.createElement("div");
  document.body.appendChild(el);
  // we attach the element to document.body to ensure events work
  ReactDOM.render(<App />, el);
  const button = el.childNodes[0];
  for (let i = 0; i < 3; i++) {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  }
  expect(button.innerHTML).toBe("3");
});

This 'works' as expected. 
you extend the test a bit

act(() => {
  for (let i = 0; i < 3; i++) {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  }
});
expect(button.innerHTML).toBe(3); // this fails, it's actually "1"!


The test fails, and button.innerHTML claims to be "1"! 
Well shit, at first, this seems annoying. But act has 
uncovered a potential bug here - if the handlers are ever 
called close to each other, it's possible that the handler 
will use stale data and miss some increments

The 'fix' is simple - we rewrite with 'setState' call with 
the updater form ie - setCounter(x => x + 1), and the 
test passes. This demonstrates the value act brings to 
grouping and executing interactions together, resulting 
in more 'correct' code. Yay, thanks act!

////
function App() {
  const [ctr, setCtr] = useState(0);
  useEffect(() => {
    setTimeout(() => setCtr(1), 1000);
  }, []);
  return ctr;
}

it("should tick to a new value", () => {
  const el = document.createElement("div");
  act(() => {
    ReactDOM.render(<App />, el);
  });
  expect(el.innerHTML).toBe("0");
  // ???
  expect(el.innerHTML).toBe("1");
});


What could we do here?

Option 1 - Let's lean on jest's timer mocks.

it("should tick to a new value", () => {
  jest.useFakeTimers();
  const el = document.createElement("div");
  act(() => {
    ReactDOM.render(<App />, el);
  });
  expect(el.innerHTML).toBe("0");
  jest.runAllTimers();
  expect(el.innerHTML).toBe("1");
});

Like the warning advises, we mark the boundaries of that 
action with act(...). Rewriting the test

it("should tick to a new value", () => {
  jest.useFakeTimers();
  const el = document.createElement("div");
  act(() => {
    ReactDOM.render(<App />, el);
  });
  expect(el.innerHTML).toBe("0");
  act(() => {
    jest.runAllTimers();
  });
  expect(el.innerHTML).toBe("1");
});

Option 2 - Alternately, let's say we wanted to use 'real' 
timers. This is a good time to introduce the asynchronous 
version of act. Introduced in 16.9.0-alpha.0, it lets you 
define an asynchronous boundary for act(). Rewriting the 
test from above -

it("should tick to a new value", async () => {
  // a helper to use promises with timeouts
  function sleep(period) {
    return new Promise(resolve => setTimeout(resolve, period));
  }
  const el = document.createElement("div");
  act(() => {
    ReactDOM.render(<App />, el);
  });
  expect(el.innerHTML).toBe("0");
  await act(async () => {
    await sleep(1100); // wait *just* a little longer than the timeout in the component
  });
  expect(el.innerHTML).toBe("1");
});


Again, tests pass, no warnings. excellent!
You don't have to mess with fake timers or builds anymore, 
and can write tests more 'naturally'. As a bonus, it will 
(eventually) be compatible with concurrent mode

////

Let's keep going. This time, let's use promises. 
Consider a component that fetches data with, er, fetch -

function App() {
  let [data, setData] = useState(null);
  useEffect(() => {
    fetch("/some/url").then(setData);
  }, []);
  return data;
}

Let's write a test again. This time, we'll mock fetch 
so we have control over when and how it responds:

it("should display fetched data", () => {
  // a rather simple mock, you might use something more advanced for your needs
  let resolve;
  function fetch() {
    return new Promise(_resolve => {
      resolve = _resolve;
    });
  }

  const el = document.createElement("div");
  act(() => {
    ReactDOM.render(<App />, el);
  });
  expect(el.innerHTML).toBe("");
  resolve(42);
  expect(el.innerHTML).toBe("42");
});

The test passes, but we get the warning again. Like before, 
we wrap the bit that 'resolves' the promise with act(...)

// ...
expect(el.innerHTML).toBe("");
await act(async () => {
  resolve(42);
});
expect(el.innerHTML).toBe("42");
// ...

This time, the test passes, and the warning's disappeared. 



////
Now, let's do hard mode with async/await.

function App() {
  let [data, setData] = useState(null);
  async function somethingAsync() {
    // this time we use the await syntax
    let response = await fetch("/some/url");
    setData(response);
  }
  useEffect(() => {
    somethingAsync();
  }, []);
  return data;
}

it("should display fetched data", async () => {
  // a rather simple mock, you might use something more advanced for your needs
  let resolve;
  function fetch() {
    return new Promise(_resolve => {
      resolve = _resolve;
    });
  }
  const el = document.createElement("div");
  act(() => {
    ReactDOM.render(<App />, el);
  });
  expect(el.innerHTML).toBe("");
  await act(async () => {
    resolve(42);
  });
  expect(el.innerHTML).toBe("42");
});

Literally the same as the previous example. All good and green.

if you're using ReactTestRenderer, you should use ReactTestRenderer.act instead.
we can reduce some of the boilerplate associated with this by 
integrating act directly with testing libraries; 
react-testing-library already wraps its helper functions 
by default with act


*/