
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

Guide to Advanced React


//////////////////////////////////////////////////////////

React provides the possibility to declare types using 
PropTypes. And if that’s not enough for you, you could also 
use TypeScript with React.

PropTypes aren’t commonly used in modern React. 
Use TypeScript for static type checking.


As your app grows
you can catch a lot of bugs with typechecking
for some application can use javascript extensions like 
Flow or Typescript
to type check your whole application

but even if you do not use those
React has some built-in typechecking abilities
to run typechecking on the props for a component
can assign the special propTypes property



import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};



same functionality could also be applied to function 
components, or components created by React.memo or 
React.forwardRef.

PropTypes exports a range of validators that can be used
to make sure the data you receive is valid
in this example we are using PropTypes.string

when an invalid value is provided for a prop
a warning will be shown in the JavaScript console
only checked in development mode


//you can define default values for your props by assigning to
the special "defaultProps" property


class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

// Specifies the default values for props:
Greeting.defaultProps = {
  name: 'Stranger'
};

// Renders "Hello, Stranger":
const root = ReactDOM.createRoot(document.getElementById('example')); 
root.render(<Greeting />);



Since ES2022 you can also declare defaultProps as static 
property within a React component class.
class Greeting extends React.Component {
  static defaultProps = {
    name: 'stranger'
  }

  render() {
    return (
      <div>Hello, {this.props.name}</div>
    )
  }
}

The defaultProps will be used to ensure that 
this.props.name will have a value if it was not 
specified by the parent component. The propTypes 
typechecking happens after defaultProps are resolved, 
so typechecking will also apply to the defaultProps.


//functions

import PropTypes from 'prop-types'

function HelloWorldComponent({ name }) {
  return (
    <div>Hello, {name}</div>
  )
}

HelloWorldComponent.propTypes = {
  name: PropTypes.string
}

export default HelloWorldComponent

//////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////
Typescript

TypeScript adds additional syntax to JavaScript to support 
a tighter integration with your editor. Catch errors 
early in your editor.

TypeScript code converts to JavaScript, which runs anywhere 
JavaScript runs: In a browser, on Node.js or Deno and in 
your apps.
//////////////////////////////////////////////////////////





2. Styled Components
larger application
encounter a problem, want to style things
similarly
through code duplication (writing even the most basic css for each button)
this not good or clean code

the styled components package provides a cleaner way to do this
allows give some default stylings to html elements
can define a button with some basic styling and reuse this button
throughout your application
thus, no code duplication and allows application to be more scalable


3. Redux
the most popular state management system
can be combned with react
purpose: store application's state in a single place
benefit: to prevent having to pass props
through multiple levels of the component tree
recommended for larger applications

https://react-redux.js.org/



4. Context API
as your application becomes larger and have multiple components
to ensure reusability, might find passing props through a lot
of components in the middle or might have a lot of components
that require the same props
this patterns is known as prop drilling

to help avoid this
react provides the context api

that lets a parent component provide data to all the 
components in its tree without having to pass props.

having a context of your theme will allow all children 
components to have access to an implemented theme data/style.

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////


Every parent component can pass some information to its 
child components by giving them props.

Step 1: Pass props to the child component
Now you can read these props inside the Avatar component.


export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
  );
}

//This syntax is called “destructuring”
//with size having a default value
function Avatar({ person, size = 100 }) {
  // person and size are available here
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}


//or

function Avatar(props) {
  let person = props.person;
  let size = props.size;
  // ...
}



////repetitive props can be merged with "spread" syntax

//from
function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}

//to
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}



//{children}

import Avatar from './Avatar.js';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}


props are immutable—a term from computer science meaning 
“unchangeable”. When a component needs to change its props 
(for example, in response to a user interaction or new data), 
it will have to “ask” its parent component to pass it different 
props—a new object! Its old props will then be cast aside, 
and eventually the JavaScript engine will reclaim the memory 
taken by them.

export function getImageUrl(imageId, size = 's') {
  return (
    'https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}


import { getImageUrl } from './utils.js';

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b> 
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (element)
          </li>
        </ul>
      </section>
    </div>
  );
}

//////////////////////////////////////////////////////////

Passing props is a great way to explicitly pipe data 
through your UI tree to the components that use it.

But passing props can become verbose and inconvenient when 
you need to pass some prop deeply through the tree

or if many components need the same prop. 
The nearest common ancestor could be far removed from 
the components that need data, and lifting state up that 
high can lead to a situation called “prop drilling”.

a way to “teleport” data to the components in the tree 
that need it without passing props? With React’s context 
feature, there is!


want the state of two components to always change together. 
To do it, remove state from both of them, move it to their 
closest common parent, and then pass it down to them via props. This is known as lifting state up,

//changing one panel does not change the other
import { useState } from 'react';

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>
          Show
        </button>
      )}
    </section>
  );
}

export default function Accordion() {
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About">
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology">
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}


//now let’s say you want to change it so that only one panel 
is expanded at any given time
//With that design, expanding the second panel should 
collapse the first one. How would you do that?

To coordinate these two panels, you need to “lift their state 
up” to a parent component in three steps:

Remove state from the child components.
Pass hardcoded data from the common parent.
Add state to the common parent and pass it down together with the event handlers.

import { useState } from 'react';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}
//////////////////////////////////////////////////////////

export default function Section({ children }) {
  return (
    <section className="section">
      {children}
    </section>
  );
}

export default function Heading({ level, children }) {
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
}

import Heading from './Heading.js';
import Section from './Section.js';

export default function Page() {
  return (
    <Section>
      <Heading level={1}>Title</Heading>
      <Heading level={2}>Heading</Heading>
      <Heading level={3}>Sub-heading</Heading>
      <Heading level={4}>Sub-sub-heading</Heading>
      <Heading level={5}>Sub-sub-sub-heading</Heading>
        <Section>   //having the same size
            <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
            <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
        </Section>
    </Section>
  );
}











*/