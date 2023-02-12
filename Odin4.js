/* index
js writing styles
Linters and prettier

Function-constructors, prototypes, inheritance
Object-constructors

set, get 
what the new assignment does

/*
//////Classes
Object constructors
Prototypes
Prototypal Inheritance
strict/global window
Class constructors
Mixin
closures with constructors
__proto__
Factory Functions
call/apply/bind
private/public
Object.assign
Inheritance using factory functions
revealing module/pattern
Design patterns: mixin, decorator, pseudo-decorators
class setters/getters, defineproperty
private, static class properties



//////NPM
npm/webpack install and prepare files
uninstall loader

more tools: 
    property attributes
    webpack-dev-server (live reloading)
    npm-init.js (root file for config questions)
    loaders, plugins intro

plugins/asset management
    plugins config
    css-loader install,config, use, run
    images: config, use, run
    fonts: config, apply in css file, run
    data files: JSON/CSV/TSV/XML install/config, use
    global assets: 

output management
    config
    HtmlWebpackPlugin: install/config (helps when renaming files outside, outside of the referenced name in code )
    cleaning code

development
    source maps (dev-tool): config (to track errors correctly in browser-console)
    auto-save-run: 
        watch: config,run (semi-auto)
        webpack-dev-server: install, config, run (auto)
        webpack-dev-middleware: install, config, add file, run, open localhost:3000 (auto)


use CTRL+C to exit from watch modes


////OOP
    Single Responsibility
    Coupling
    ES6
        Babel: installation/usage
        JSON:  write, to and from convert
    Asynchronous code: 
        CallBacks (summarized)
        Promise with examples (summarized)


*/






/*
jQuery
it is not needed anymore
popular for doing things like DOM manipulation, AJAX calls
but may be used in older systems


Coding style
consistent in indenting, quote style
so become more maintainable and easier to read



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

Linters (code-quality)
tools scan code with set of style rules and will report any errors, stylistic preferences
like JSHint

can help with readability, pre-code review, finding syntax errors before execution
help with readability with other developers



Prettier (code-formatting)
automatically format the code according to a set of rules








*/

console.log("///////////constructors");
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

//common ways to create new empty objects
/*

const newObject = {};
const newObject = Object.create(Object.prototype);
const newObject = new Object();

const myModule = {
  myProperty: 'someValue',
  saySomething(myConfig) {
      this.myConfig = myConfig;
      console.log(myConfig.value + " is my Config"); //this, is myModule

  },
};


myModule.saySomething({value: 1, number: 1});
newObject.myProperty = 'Hello World';
newObject['Some Key'] = 'Hello World';




const defineProp = (obj, key, value) => {
  const config = {
      value: value,

  };
  Object.defineProperty(obj, key, config);
};

const person = Object.create(Object.prototype);
defineProp(person, 'car', 'Delorean');
console.log(person);



*/







/*
Object Constructors
*/


function Person(name2, marker2) {
    this.name = name2;
    this.marker = marker2;
    this.sayName = function () {
        //console.log(this.name);
        return this.name;
    }
  }

const player_one = new Person("steve", "X");
//console.log(player_one.name); 
//player_one.sayName();

console.log(player_one.sayName()); //better practice 






/*
The Prototype
all objects in js have a prototype, 
which is another object that the original object inherits from
the original prototype has access to all of its prototype's methods and properties

prototypes are shared
properties are copied with each new student

objects have a prototype that inherit from its properties/methods, shared on creations not copied
JS Object has a prototype containing all methods


*/

Person.prototype.sayNameTwoTimes = function() {
    console.log(this.name + " " + this.name);
}

player_one.sayNameTwoTimes();






/* 
Prototypal Inheritance 
constructor prototype, create object of another object's prototype
to use on the new constructor another's prototype which uses the same properties
*/
function Employee (name2) {
    this.name = name2;
}

Employee.prototype = Object.create(Person.prototype); 
//works to create from constructors or objects
//creates a new object set to the prototype of Employee.prototype

const mark = new Employee("mark");

mark.sayNameTwoTimes();



 ////Object.create for objects

const cat = {
  makeSound: function () {
    console.log(this.sound);
  }
}



const kiko = Object.create(cat);
//cat is a prototype of kiko
kiko.sound = "mew";
kiko.makeSound();


//manual prototype assign
function objectCreate (proto) {
  const obj = {};
  Object.setPrototypeOf(obj, proto);
  return obj;
}








console.log("///////////constructor");
/*////////////////////////////////////////////////////////////////////*/


console.log(mark.constructor);  //output the Person?

var userAccount = new Object ();
// objects created with object literals and with the object constructor inherits from Object.prototype
//like constructor, hasOWnProperty(), isPropertyOf(), propertyIsEnumerable (), toLocaleString (), toString (), and valueOf ().

//Object.prototype is the prototype object of all objects created with new Object() or with {}
//and does not inherit any methods or properties from any other object 

console.log("///////////_proto_");
/*////////////////////////////////////////////////////////////////////*/

//literal object _proto_ //old way
let animal = {
    eats: true,
    walk() {
      console.log("Animal walk");
    },

    name: "John",
    surname: "Smith",
  
    set fullName(value) {   //setter
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {        //getter
      return `${this.name} ${this.surname}`;
    },

    sleep() {               //to be used for the two ear objects below
        this.isSleeping = true;
      }


  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal   //rabbit has animal
  };
  
  let longEar = {
    earLength: 10,
    __proto__: rabbit   //longEar has rabbit which has animal
  };
  
  let shortEar = {
    earLength: 7,
    __proto__: rabbit   //longEar has rabbit which has animal
  };


  // walk is taken from the prototype chain
  longEar.walk(); // Animal walk
  //console.log(longEar.jumps); // true (from rabbit)
  console.log(longEar.fullName);


longEar.sleep();
console.log(longEar.isSleeping);
console.log(shortEar.isSleeping); //object state is not shared, but the prototype's method is(its there but not changed by sleep() )

// Object.keys only returns own keys/property names
console.log(Object.keys(shortEar));   //earLength

// for..in loops over both own and inherited keys, so use hasOwnProperty to filter for its properties
// because its inherited from its "own" prototype methods
for(let prop in shortEar) {
    
    if (shortEar.hasOwnProperty(prop)) {
        console.log(prop); 
    }
}



console.log("///////////strict, global");
/*////////////////////////////////////////////////////////////////////*/


undefined;
function sum() {
    //"use strict";   //makes this un-global for the below lines even in inner scopes except for arrow functions
    this.myNumber = 20; // add 'myNumber' property to global object

  }
  // sum() is invoked as a function
  // this in sum() is a global object (window)
  console.log(window.myNumber); //undefined
  sum();     // => 31
  console.log(window.myNumber); //20, when sum is called the this's become global



console.log("///////////class syntax");
/*////////////////////////////////////////////////////////////////////*/

//JavaScript allows to define constructors using class syntax:
  class City {
    constructor(name, traveled) {
      this.name = name;
      this.traveled = false;
    }

    sayName () {
      return this.name;
    }

    }

    const paris = new City('Paris', false);

    console.log(City.name);

  //mixin pattern, superclass/base(city) and sub-class(town)
  //use extends and super to take from a previous class's constructor
  class Town extends City {
    constructor (name,traveled,streetsCount) {
      super(name,traveled);
      this.streetsCount = streetsCount;
    }
  }

  const myTown = new Town("Cairo", "false", "3");
  console.log(myTown);


/*////////////////////////////////////////////////////////////////////*/

  //mixin pattern, superclass/base(person) and sub-class(superHero)

  var Person2501 = function (firstname) {
    this.firstname = firstname;
  }

  var clark = new Person2501("clark");

  var superHero = function (firstname, powers) {
    Person2501.call(this,firstname);
    this.powers = powers;
  }


  //superHero.prototype = Object.create(Person2501.prototype);
  var superMan = new superHero ("clark", ["flight", "heat-vision"]);
  console.log(superMan);






/*////////////////////////////////////////////////////////////////////*/

//arrow functions takes this from the outer function where it is defined
// better use function declaration

//the constructors are from an Object parent which has no prototype(null)
//when calling js checks the object then the prototype

function Apple (color, weight) {
  this.color = color;
  this.weight = weight;
}

Apple.prototype = {
  eat() {return this}, //this returns the new apples
}

let apple1 = new Apple("red", "0.1");

console.log(apple1.weight);
console.log(apple1.eat());


/*////////////////////////////////////////////////////////////////////*/
/* closures with constructors */

//initializing methods in the constructor) 
//can take advantage of closures by making use of local variables 
//defined within the constructor in your methods.

var Dog = function(name) {
  this.name = name;

  var barkCount = 0;

  this.bark = function() {
      barkCount++;
      alert(this.name + " bark");
  };

};

/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* use an outside object to hold the constr methods 
to not copy every time on new creations 
but better use prototypes to assign functions */

const AnimalMethods = { //(2)

  nameFn () {
    console.log(this.name);
  }

};


function Animals (name) {

  //this.name = name;
  //this.displayName = AnimalMethods.nameFn; //(1)
  
  //if will use many methods
  //let AnimalCopied = Object.create(AnimalMethods); //(2)
  //return AnimalCopied;

  //what new assignment does
  let AnimalCopied = Object.create(Animals.prototype); //(3)
  AnimalCopied.name = name;
  return AnimalCopied;
}


let Lion = new Animals("Leo"); //(1)
//Lion.displayName(); //(1)
//Lion.nameFn(); //(2)
console.log(Lion.name); //(3)


//Array.prototype or arr.__proto__ gives all its methods
//arr.__proto__.__proto__ gives the object.prototype
//arr.__proto__.__proto__.__proto__ gives null (first object)
//this is the prototype chain

let prototypeOfLeo = Object.getPrototypeOf(Lion);
console.log(prototypeOfLeo);

//new keyword cannot be used with arrow functions


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/


function Animals2 (name, type) {
  this.name = name;
  this.type = type;
}

Animals2.prototype.spell = function (spell) {
  console.log("spell " + spell);
}

function Dog (name, type, speed) {
  Animals2.call(this, name, type);  //this calls from Animals2 without using this here or use extend/super in class constr
  this.speed = speed;
}

Dog.prototype = Object.create(Animals2.prototype);
//Dog.prototype.constructor = Dog; //to add any other methods to the Dog prototype that we want

let newDog = new Dog ("jack", "golden", "101");
console.log(newDog.name);
newDog.spell("hiii");

/*////////////////////////////////////////////////////////////////////*/

//prototype inheritance is an important question

//object2 inherits from object1, but looks in obj2 then looks in obj1
//object2.__proto__ = object1;

//any function will have this prototype property now
Function.prototype.mybind = function () {};


console.log("///////////factory fn");
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

it can be easy to introduce bugs into your code when using constructors

adding prototype to instances break the .constructor / instanceof
so can use factory functions will solve that but will not work as expected and not easy to trace errors 
c instanceof C;  // instanceof no longer works!
f instanceof C; // Is an instance of C!?!

  instead of using new to create an object
  set up and return the new object when you call the function



*/

//factory function
//instead of using this. , give parameters and local definitions and return them as an object
const personFactory = (name, age) => {
  const sayHello = () => console.log('hello!');
  return { name, age, sayHello };
};

const jeff = personFactory('jeff', 27);

console.log(jeff.name); // 'jeff'

jeff.sayHello(); // calls the function and logs 'hello!'



/*
function close and scope

context === this
scope === variable access scope

window.a is the global scope
a is a local scope


*/

let a = 1;

function foo () {
  //var a = 3; //local scope
  a = 2;

  console.log( this === window);  //true

}

//foo();  //calling this function changes the global a,
//console.log(a);

//context
let obj = {
  sayFoo : function () {
    console.log( this === window);  //false
    console.log( this === obj);  //false

  }
}

obj.sayFoo();
obj.sayFoo.call(window,1,2); //changed the context to be in window, 2nd parameter+ is the passed arguments
obj.sayFoo.apply(window,[1,2]); //changed, apply takes to arguments, the context, array or passed arguments

//(function () {}).apply(window,links[i]);

var myBoundFoo = obj.sayFoo.bind(window);
myBoundFoo();
//changed, takes one arguments, returns a bound function
//good for performance as the functions are not called

//click event runs on the context on what it was clicked in ex. body.onclick


//the scope chain/lexical-scope can be traced inwards, related to closure
function names () {
  let name = "name"
  function names2 () {
    function names3 () {
      //name can be used here
    }
  }
}


//private scope

(function () {
  var _myFunction = function () {
    console.log("myFunction");
  }
  _myFunction();
})();

//_myFunction(); //error - its private due to iffy or ()(); being used
//private naming convention starting with _
//good for security and not allowing functions to be used outside

//public scope
var test2001 = (function () {
  //_private function that is not returned
  return { myFunction: function () {
    console.log("myFunction-public1");
    },
    myFunction : function () {
      //use private function
      console.log("myFunction-public2");
    }
  }

})();

test2001.myFunction(); //no error, public

//
//return {,}, return { printString };

console.log("///////////factory fn 2");
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

/////Closures in factory functions
//are the returned functions from a public scope 
//these function when passed around and called outside that scope
//still have access to variables inside its main scope and can change them




//Object.assign(target,source)
//copies/replaces to target objects from one or more source objects
//from right to left

const target = { a: 1, c: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);
//const copy = Object.assign({}, source); //cloning

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true?



const Person2001 = (name) => {
  const sayName = () => console.log(`my name is ${name}`);
  return {sayName};
}

const Nerd = (name) => {
  const prototype = Person2001(name);
  const doSomethingNerdy = () => console.log('nerd stuff');

  //return {sayName, doSomethingNerdy};
  return Object.assign({}, prototype, {doSomethingNerdy});
}

const jeff2001 = Nerd("jeff");
console.log(jeff2001);


//////////////////////////////////////////
//////////////////////////////////////////
//inheritance using factory functions/Object.assign (Concatenative/cloning/Mixins inheritance)
const proto = {
  hello () {
    return `Hello, my name is ${ this.name }`;
  }
};

//*greeter is/returned-to an object of {proto object+name property}
/*
const greeter = (name) => Object.assign(Object.create(proto), {
  name
});
*/
//see how using anonymous open objects as they are a thing
const george = Object.assign({}, proto, {name: 'George'});


//const george = greeter('george');

const msg = george.hello();

console.log(msg);


//*
//object.on('event', payload => console.log(payload));


//////////////////////////////////////////
//////////////////////////////////////////
//functions created for the purpose of extending existing objects
//functional mixins

//inheritance, when design your types what they are
//composition, when design what your types they do


//composition, separating methods from creations like driver, RobotDog
//example with private and public to emulate inheritance
//more flexible and more powerful

let Function2101 = (function () {

  const driver = (state) => (
    {
      drive: () => console.log("woof i am "+ state.name)
    }
  )

  const RobotDog = function (name) {

    let state = {
      name,
      speed: 100,
    }

  return Object.assign({}, driver(state));
  }

  //barker
  //runner

  //the revealing module
  //solves accessing privates but more fragile than the original (returning the whole public functions in an object)
  return { driverName: RobotDog,
  }


  })(); //function called in order to use as variable and access properties
  //this calling is called IIFE, iffy


let Dog2101 = Function2101.driverName("names");
Dog2101.drive();




console.log("///////////Module-pattern");
/*////////////////////////////////////////////////////////////////////*/
/*
modules are similar to factory functions, differ in how they are created
encapsulating and calling a function in the same time
allows private and public


*/

//wrap a function, return from it an object of functions to be used
let parameter1 = 10;

/*
  const calculator = (() => {
    'use strict';
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
      add,
      sub,
      mul,
      div,
    };
  })(argument1 || argument2);
*/

  let x2101;
  //x2101 = calculator.add(3,5); // 8
  //calculator.sub(6,2); // 4
  //calculator.mul(14,5534); // 77476

  console.log(x2101);

  //a drawback is public values can be changed from the outside


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
[book] Design patterns, reusable solutions to commonly occurring problems in software design

maintainable code, recurring themes, and optimize them
maintainable code vs design patterns


var, const, let

To support modular programming, the language should have features 
that allow you to import module dependencies and export 
the module interface (the public API/variables we allow other modules 
to consume).


constructor, special method, initialize newly created object, once memory has been allocated for it

JavaScript modules to organize objects, functions, classes or variables 
in a way they can be easily exported or imported into other files.

>The constructor pattern
. using class/constructors 
. using functions with prototypes

>The module pattern
*using objects
*a self-contained function(); that return an object of function codes to be called
allows privacy keeping everything within the closure private
allows using export/import
allows for a cleaner code

Export: allows you to provide access to module features outside the module
Import: allows to import bindings that are exported by a module to our script

* the revealing module pattern
improved version of the module pattern
where add functions privately and return their names only in an object


>The singleton pattern
useful when exactly one object is needed to coordinate across the system
define a class/constructor for publics in the object
return variable = this; to store its reference
and return this class (one name ex. MySingleton)
so can just use 
import MySingleton from './MySingleton';
const singleA = new MySingleton();
can use variable = new constructorName(parameters) where takes an array input private constructor(parameters={}) for parameters.values


>the observer pattern
allows one object to be notified when another object changes
an object(subject) maintains a list of objects depending on it(observers)
ConcreteSubject, broadcasts notifications to observers on changes of states
ConcreteObserver, stores a reference to the C-S
-code not here



>The Publish/Subscribe pattern however uses a topic/event channel 
which sits between the objects wishing to receive notifications 
(subscribers) and the object firing the event (the publisher). 
avoiding dependencies between the subscriber and publisher
no notification on subscriber crashing


>The Mediator Pattern
one object notify a set of other objects when an event occurs
allows one object to be notified of events that occur in other objects


/*////////////////////////////////////////////////////////////////////*/
/*
static keyword methods in a class used to create utility functions for an application


> the mixin pattern
classes that offer functionality that can be easily 
inherited by a sub-class or a group of sub-classes
for function reuse
mix-functionality from multiple classes
decreasing functional repetition and increasing function re-use

sub-classing
inheriting properties for a new object from a base/superclass-object




*/

class Car {
  constructor({model, color}) {
    this.model = model || "no model provided";
    this.color = color || "no color provided";
  }
}



//base class
//superclass is a parameter
const MyMixins = superclass =>
    class extends superclass {
        moveUp() {
            console.log('move up');
        }
        moveDown() {
            console.log('move down');
        }
        stop() {
            console.log('stop! in the name of love!');
        }
    };


class LeftAnimator {
  moveLeft() {
      console.log('move left');
    }
}

class PersonAnimator {
    moveRandomly() {
        /*..*/
    }
}

class myAnimator1 extends MyMixins(LeftAnimator) {};
class MyCar extends MyMixins(Car) {};

const myAnimator2 = new myAnimator1();
myAnimator2.moveLeft();
myAnimator2.moveDown();
myAnimator2.stop();

const MyCar2 = new MyCar({model: "ford", color:"blue"});
MyCar2.moveUp();
MyCar2.moveDown();


//classic js

var myMixins = {
  moveUp: function(){
  console.log( "move up" );
  },
};

function CarAnimator(){
  this.moveLeft = function(){
    console.log( "move left" );
  };
}

//_.extend( CarAnimator.prototype, myMixins );

//var myAnimator = new CarAnimator();
//myAnimator.moveLeft();



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
Decorator pattern
ability to add behavior to existing classes in a system dynamically

//Pseudo-classical Decorators
//Abstract Decorators


*/

  
class MacBook {
  constructor() {
      this.cost = 1000;
      this.screenSize = 11.6;
  }
  getCost() {
      return this.cost;
  }
  getScreenSize() {
      return this.screenSize;
  }
}

// Decorator 1
class Memory extends MacBook {
  constructor(macBook2) {
      super();
      this.macBook2 = macBook2;
  }

  getCost() {
      return this.macBook2.getCost() + 75; //adjust to return this.cost" +75, where cost is already in the masterclass
  }
}

// Decorator 2
class Insurance extends MacBook {
  constructor(macBook) {
      super();
      this.macBook = macBook;
  }

  getCost() {
      return this.macBook.getCost() + 100;
  }
}

let mb = new MacBook();
mb = new Memory(mb);
mb = new Insurance(mb);
console.log(mb.getCost());


////classical approach
function MacBook2() {
  this.cost = function () { return 997; };
  this.screenSize = function () { return 11.6; };
}

// Decorator 1
function memory2( macbook2 ) {
  var v = macbook2.cost();
  
  macbook2.cost = function() {
    return v + 75;
  };

}

var mb2 = new MacBook2();
memory2( mb2 );
console.log( mb2.cost() );


//Pseudo-classical Decorators
/*
Objects inside other objects of the same interface


*/


class Todo {
  constructor({ actions, name }) {
      // State the methods we expect to be supported
      // as well as the Interface instance being checked
      // against


      this.name = name;
      this.methods = actions;
  }
}


const properties = {
  name: 'Remember to buy the milk',
  date: '05/06/2016',
  actions: {
      summary() {
          return 'Remember to buy the milk, we are almost out!';
      },
      placeOrder() {
          return 'Ordering milk from your local grocery store';
      },
  },
};

const todoItem = new Todo(properties);

console.log(todoItem.methods.summary());


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
console.log("///////////classes");

/*
Class
a new syntax that does the exact same thing as the object 
constructors and prototypes


essential functions that execute on getting and setting a value
but look like regular properties to an external code






*/


//define property using set/get and defineProperty

let obj27 = {





  //
  get propName() {
    // getter, the code executed on getting obj.propName
    //just retrieve the info
    //called without () , read normally the property name
    //return this._name;
    return `${this.name} ${this.surname}`;

  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
    //split separates the string on spaces into two array inputs
    //places in array containing this and this
    if (value.length < 4) {
      console.log("Name of ( " + value + " ) is too short, need at least 4 characters");
      return;
    }

    [this.name, this.surname] = value.split(" ");
  },


};

//as setter/getter defined, we have a property propName read/write


console.log(obj27.propName);  //undefined yet, will return if defined
//obj27.propName = "John X";  //not changed if setter not defined
//console.log(obj27.propName);

obj27.propName = "Pete Armstrong";
console.log(obj27.propName); // Pete Armstrong

obj27.propName = "DJ"; // Name is too short...



//Accessor descriptors
Object.defineProperty(obj27,"fullName", {
  get () {
    return `${this.name} ${this.surname}`;

  },

  set (value) {
    [this.name, this.surname] = value.split(" ");
  }

});


//console.log(obj27.fullName);
//for(let key in obj27) console.log("for/in " + key); // name, surname


//can use one only of these two ways
//anything starting with an _ means it is internal and should not be touched from outside the object.



/*////////////////////////////////////////////////////////////////////*/

function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User("John", new Date(1992, 6, 1));

console.log( john.birthday ); // birthday is available
console.log( john.age );      // ...as well as the age


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

//class constructors
//typeof class is function
//special functions

// class User28 //declaration
// const NewUser = class User28
//can be anonymous


class User28 {

  height = 0;
  #width;               //private property starts with #

  constructor(name) { 
    this.name = name; 
  }

  sayHi() {   //called with ()
    //console.log(this.name); 
    return this.name;
  }

  //look at this
  ["Say" + "Bye"] () {
    console.log("Byee");
  }

  sayNay = () => {  //called without ()
    console.log(this.name);
  }

  #privateMethod () {

  }

  //look at this, runs by itself because not wrapped
  //school = prompt("what school ?", "ex");



  get secondName () {   //makes a method behave like a property does not need invoke
    return this.lastname;
    //return this.calcArea();

  }

  set secondName (value) {
    this.lastname = value;
    //this.setFirstNameMethod(value[0]); // method contains this.firstName = firstName;
    //this.setLastNameMethod(value[1]);
  }


}


//setter/getter
const Agent = new User28("John"); //use const ES6 syntax
Agent.secondName = "Lenin";
console.log(Agent);

//
Agent.SayBye();
console.log(User28.prototype); //proto exists for constructor only not instances
console.log(User28 === User28.prototype.constructor); // true

//
//Agent.school; //asks for school
//console.log(Agent.school); // the entered value


class worker extends User28 {     //all workers are persons but not all persons are workers
  constructor(firstname,lastname, job) {
    super(firstname,lastname);  //calling the constructor method of the person class
    this.job = job;
    this.hasJob = true; 

  }

  setJob () {
    this.job = job;
  }

  sayHi () {
    //super();          //super invokes the method it is in of the same name, constr/constr, sayHi()/sayHi()
  }

}


class Doctor extends worker {
  constructor (firstname, lastname, job, hospital_name) {
    super(firstname,lastname,job);
    this.hospital_name = hospital_name;
  }
} 


const DrMark = new Doctor("mark", "john", "Doc", "A1"); 
console.log(DrMark);  //inherits from worker and person !




//console.log(Object.getOwnPropertyNames(User28.prototype));
//constructor, sayHi, secondName

//Class methods are non-enumerable. 
//A class definition sets enumerable flag to false for all methods 
//in the "prototype".

//Classes always use strict automatically
//can use a single method without a constr. and use that method like a normal object
//remember you can use not all lines in class, etc.



/////////////////////////////////////////////////////////
//static properties cannot be directly accessed on instances of the class
//instead they are accessed on the class itself

//utility functions, config properties
//data not need to be replicated across instances

//In order to call a static method or property within 
//another static method of the same class, you can use the this keyword.



class ClassWithStaticMethod {

  //to access statics use classname.method/property or this.constructor
  constructor() {
    console.log("X" + ClassWithStaticMethod.staticProperty); // 'static property'
    console.log("X" + this.constructor.staticMethod()); // 'static property'
  }

  //not instance properties, class properties
  static staticProperty = 'someValue here';   //React feature, if error/unsupported use babel compiler
  static staticMethod() {
    return 'static method has been called ' + this.staticProperty;
    //this inside a static points to the Class, not the instances like other
  }
  static {  //static initialization block, can use more than one
    //console.log('Class static initialization block called'); //self calling
  }

  static get staticMethod2() {
    return ('static get method has been called ' + this.staticProperty).toLocaleUpperCase();
    //this inside a static points to the Class, not the instances like other
    //can be called here without (), just like a property
  }



}

console.log(ClassWithStaticMethod.staticProperty);
// Expected output: "someValue"
console.log(ClassWithStaticMethod.staticMethod());
// Expected output: "static method has been called."

console.log(ClassWithStaticMethod.staticMethod2);


let newGame = new ClassWithStaticMethod();
//console.log(newGame.staticMethod()); //Type error

class SubClassWithStaticField extends ClassWithStaticMethod {
  static subStaticField = super.staticMethod();
}



/////////////////////////////////////////////////////////
/*
super/extend

class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} roars.`);
  }
}

const l = new Lion("Fuzzy");
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.

const speak2 = l.speak();
speak2();  //undefined due to global restriction but works on function constr.


*/
/////////////////////////////////////////////////////////
/*

//“Class” notation favors “Inheritance over Composition”. opposing to functions


//in function constructors
//any thing that begins with this will be public
//regular var/const etc. variables are private
//however can be returned from a this method


//nodejs, react, redux, mongoDB databases


*/




/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
console.log("///////////Modules");
/*



/*

https://webpack.js.org/guides/getting-started/

node package manager
for adding an external library/js source to your main code
by using in the end libraryName().methodName();

Npm is used to use Node.js or Webpack
Node.js (implementation of CommonJS) allow import/export code across files
yarn is like npm but has few more features

Webpack
a powerful tool for building modules
IE8 and below are not supported, you will need to load a polyfill before using these expressions
With the introduction of ES6 Modules, the module pattern (IIFEs) 
is not needed anymore


transpiling code, 
converting code from one language to another similar language
Babel (closes to vanilla js) transpiles next generation JavaScript with features for older
ES2015+ to be compatible with ES5
and can configure webpack to use babel-loader
Typescript is a language that is identical to next generation JS
but also adds optional static typing

Questions for html script
defer 
async attr
nomodule  //new browsers to ignore this script, and older browsers to use this script
type=module does not load the result!





>>create root folder, and cd..

# npm init -y    //this will create the json
# npm install webpack webpack-cli --save-dev //install webpack tool will create nodes_module folder

>> now create dist/index.html and src/index.js
>> add an import line and a function that uses an imported property/method to .js and normal boiler plate to html
>>add import line to .js and script tag to html
src/JS: import wantedMethodOrPropertyName from 'wantedLibraryName';
dist/HTML:     <script src="main.js"></script>


>> from package.json file, put basic-template, remove main and add "private":true,
> and can add the following to package.json's script object to make it easier
"build": "webpack" // to use "npm run build" instead of "npx webpack"
"build": "webpack --progress --mode=production",  
"watch": "webpack --progress --watch"  "auto run WP on JS file change"

and make sure to put , before it in the object placing into


# npm install wantedLibraryName --save //install a wanted library if you will use it like moment/lodash


# npx webpack   //this will create the main.js file we scripted from "./node_modules/.bin/webpack"


>>if you want, can add a config file with basic-template "webpack.config.js" to configure some locations etc.
>>check https://webpack.js.org/configuration for more configs

//your directory should look like this
webpack-demo-folder
|- package.json
|- package-lock.json
|- webpack.config.js
|- /dist
  |- main.js
  |- index.html
|- /src
  |- index.js
|- /node_modules


////////more tools///////
/////properties
// --save-dev // state > development dependency not production server
//--mode=development
//--mode=production
// --progress shows percent progress
// ls node_modules //testing package installation

# ./node_modules/.bin/webpack index.js --mode=development
checks the index.js for any require statements to replace using webpack

# npm install @scope/private-package-name //installing a private package
# npm install <package_name>@<tag> //tag is the version wanted


// webpack-dev-server //tool, simple web server with live reloading
> npm install webpack-dev-server --save-dev
the add to package.json like before "serve": "webpack-dev-server --open"  
Now you can start your dev server by running the command:
> npm run serve
This will automatically open the index.html website in your browser 
with an address of localhost:8080 (by default).
Any time you change your JavaScript in index.js, 
webpack-dev-server will rebuild its own bundled JavaScript 
and refresh the browser automatically.


////// npm-init.js (root file)
contains the questions asked and fields created during the init process
so all package.json files contain a standard set of information

to add custom questions using a text editor, add questions with the prompt function
module.exports = prompt("what's your favorite flavor of ice cream, buddy?", "I LIKE THEM ALL");

//to add custom questions in this file, put this
module.exports = {
  customField: 'Example custom field',
  otherCustomField: 'This example field is really cool'
}

or can use # npm set init-author-name "example_user"


//////Loaders
webpack only understands JS and Json files
loaders allow it to process other types of files and convert them
into valid modules
that can be consumed by your application and added to the dependency graph
like .css files

//when come across a path that resolves to a txt file
inside of a require()/import statement
use the raw-loader to transform it
before you add it to the bundle

put under output 
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },

////////////////////
plugins;
tasks like bundle optimization, asset management and injection of environment variables

>> const webpack = require('webpack'); //to access built-in plugins
//at top

plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
//put after the module object
//which generates an html file for your application
//and automatically injects all your generated bundles into this file


////adding package.json main object
//name, "lowercase", one word with hyphens and underscores
//version, in the form of "x.x.x", and follow the semantic ver. guidelines
//author, "your name <email@example.com"



~~ just make sure to open .html to see the result




*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* lesson 2

https://webpack.js.org/guides/asset-management/
https://webpack.js.org/guides/output-management/

another webpack feature, 
process and manipulate the code during the compilation step
Sass to css
images to web optimized/compressed images


//////////////////////////////////////
Minifying is just removing unnecessary white-space 
and redundant like comments and semicolons. 
And it can be reversed back when needed.
speeds up page loading, making visitors and search engines friendly


Uglifying is transforming the code into an "unreadable" form by changing
variable names, function names, etc, to hide the original content. 
Once it is used there's no way to reverse it back.

//////////////////////////////////////loaders/plugins
before webpack, tools like grunt and gulp where used 
to process assets like images or any type of file
and move them from /src to /dist
webpack, dynamically bundle all dependencies/dependency graph

this is great because every module now explicitly states its dependencies
and will avoid bundling modules that aren't in use

there is a loader/built-in asset modules support


//add to config.json
>>const HtmlWebpackPlugin = require('html-webpack-plugin');

//and in its module object
  plugins: [
    new HtmlWebpackPlugin({
     title: 'Output Management',
     title: 'Development',
    }),
  ],



//////////////////////////////////////CSS
>>change the output from main.js file in html/config.json to bundle.js
to import a css file from within a JS module

# npm install --save-dev style-loader css-loader

//any file that ends with .css will be served to style-loader and css-loader
//this will enable to import "./style.css" and a <style> will be inserted into the head of the html file

>>add to config.json module.exports object
module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

module loaders can be changed, executed in reverse order
first loader passes its result to the next one and so forth

>>create src/style.css
>> import './style.css'; in js file
>>element.classList.add("importedClassName"); //which is imported from style.css
# npm run build


//////////////////////////////////////Images


>> add this to the module.exports{}>module{}>rules[] in config.json
  {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },


>> add .png to the src folder
>> add to the css imported   background: url('./icon.png'); 
to any class to use this image crossly




//////////////////////////////////////Fonts

>>add to config.json module>rules
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },

>>add to src the font files my-font.woff & my-font.woff2

>>add to css
@font-face {
  font-family: 'MyFont';
  src: url('./my-font.woff2') format('woff2'),
    url('./my-font.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}
use by font-family: 'MyFont';

>> npm build run



//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////Data files
loading data, like JSON files, CSVs, TSVs, and XML.


can naturally import JSON by
line : import Name from "./data.json"
only default. i.e no { } for the Name

can import any toml,yaml, json5 files as JSON module
by using a custom parser
# npm install toml yamljs json5 --save-dev
>> and putting in config.json
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

{
  test: /\.toml$/i,
  type: 'json',
  parser: {
    parse: toml.parse,
  },
  },
  {
  test: /\.yaml$/i,
  type: 'json',
  parser: {
    parse: yaml.parse,
  },
  },
  {
  test: /\.json5$/i,
  type: 'json',
  parser: {
    parse: json5.parse,
  },
},

>>and putting in js
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`




for CVs, TSVs, XML
use csv-loader, xml-loader
#npm install --save-dev csv-loader xml-loader

>>add to config.json module>rules
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },

add some data to /src 
data.xml
data.csv

>> add to js file
import Data from './data.xml';
import Notes from './data.csv';
..
console.log(Data);
console.log(Notes);


//////////////////////////////////////Global assets

group assets with the code that uses them
|– /components
 |  |– /my-component
 |  |  |– index.jsx
 |  |  |– index.css
 |  |  |– icon.svg
 |  |  |– img.png

As long as you've installed any external dependencies 
and your configuration has the same loaders defined, 
you can copy/move my-component in another folder/project.

or use "aliasing" to make them easier to import
https://webpack.js.org/configuration/resolve/#resolvealias



# npm uninstall css-loader csv-loader json5 style-loader toml xml-loader yamljs

trying to convert PDF files into TXT files, start by
# npm search pdf


//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
Output management

once start using hashes in filenames and outputting multiple bundles
it will be difficult to keep managing your index.html manually

>>make print.js file in src
and add in it
export default function printMe() {
  console.log('I get called from print.js!');
}


>>adding to HTML header
    <script src="./print.bundle.js"></script> <!--adding as new entry point-->
and change the output at the body, to dynamically generate bundle names based on entry points
    <script src="./index.bundle.js"></script>


>>change the module in config.json
from
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

to
  entry: {
    index: './src/index.js',
    print: './src/print.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },


  webpack generates print.bundle.js and index.bundle.js


//////////////////////////
what would happen if we changed the name of one of our entry points
or even added a new one,

the generated bundles would be renamed on a build
but the index.html file would still reference the old names

can be fixed with the HtmlWebpackPlugin
but it also will generate its own index.html and replace our index.html



# npm install --save-dev html-webpack-plugin

>>and add to config.json this property in the beginning
const HtmlWebpackPlugin = require('html-webpack-plugin');

>>add below entry object
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],




//////////////////////
adding to the output{} in config.json
    clean: true,

will clean the dist/ folder so only used files will be present from the build

//////////////////////
webpack manifest
webpack know what files are being generated
keeps track how all the modules map to the output bundles
WebpackManifestPlugin


*/


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
https://webpack.js.org/guides/development/
//////Development




//////source maps
when bundling a.js + b.js + c.js into bundle.js
and one of the source files contains an error, 
the stack trace  will point to bundle.js not the file its coming from
so we use using source maps, there are many types

for illustrative purposes (though not for production)
will use inline-source-map

>>add this line below entry in config.json
  devtool: 'inline-source-map',
this will tell you which file contains the error


///////Choosing a Development Tool
some text editors have a safe write that might interfere with the following tools
read Adjusting your text editor


to automatically compile your code whenever it changes
webpack's Watch Mode
webpack-dev-server
webpack-dev-middleware


//////using watch mode
>> package.json scripts> below test
    "watch": "webpack --watch",

# npm run watch
refresh and the change applies
CTRL+C to exit



//////using webpack-dev-server
comes with many configurable options, check its docs

# npm install --save-dev webpack-dev-server

>> add in config.json
below entry
  devServer: {
    static: './dist',
  },

this tells webpack-dev-server to serve the files
from the dist directory on localhost:8080
 
>> and below output in config.json
  optimization: {
    runtimeChunk: 'single',
  },

we have more than one entry point on a single HTML page
either each entry will be loaded at a different priority
or will end up with one entry point 


>> add to package.json's script tag
    "start": "webpack serve --open",
    "server": "node server.js",



# npm start
this will open the html by itself in the browser
and any saved change will refresh the page


check: https://webpack.js.org/guides/hot-module-replacement/


//////webpack-dev-middleware
wrapper that will emit files processed by webpack to a server

same as webpack-dev-server internally
but available in a separate package to allow more custom setups

#npm install --save-dev express webpack-dev-middleware

>>add to config.json's end of output object
    publicPath: '/',

will be used in our server script as well in order to make 
sure files are served correctly on http://localhost:3000

>>add to root server.js file
with the provided code

>> add to package.json scripts object
"server": "node server.js",

# npm run server

>>open the browser and go to
http://localhost:3000


//////
when using automatic compilation, 
when saving files, some Editors have "safe write" feature
that can interfere with recompilation

to disable
Sublime Text 3: Add atomic_save: 'false' to your user preferences.
JetBrains IDEs (e.g. WebStorm): Uncheck "Use safe write" in Preferences > Appearance & Behavior > System Settings.
Vim: Add :set backupcopy=yes to your settings.


There are several sweet features that you might want to use in future projects such as code-splitting, lazy-loading, and tree-shaking.
on the website to check out in the future

always use modules, import/export over a non-standard module system
you can always transpile to your preferred module system.

// best
import { es6 } from './AirbnbStyleGuide';
export default es6;

// bad
import * as AirbnbStyleGuide from './AirbnbStyleGuide';
export { es6 as default } from './AirbnbStyleGuide';


*/



/*/////////////////////////////////*/
/*/////////////////////////////////*/
/*/////////////////////////////////*/
/*
NPM Revision

in the plugin section
configured in config.json the plugin lines
changed the output js file from main to bundle in  html/config.json
just installed css loader
added to ./src : css file, image file
added to js file css import/use, image use, 
added to module.exports{}.module{}.rules > scc,img,font

in the output management section
added in the html header print.bundle
changed output to index.bundle.js
installed HtmlWebpackPlugin and added to config.js

in development
installed devserver, middleware
added devtool,watch,devserver, publicpath to config.json
added to package.json srcipt{} some configs


effect from basic
added in the html header print.bundle
changed output in html from main.js to bundle.js then index.bundle.js
changed output in config.json also


*/


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
console.log("///////////OPP Principles");
/*

these principles are not rules, they're helpful guidelines



//////Single responsibility

everything an class/object/module does should be part of one responsibility

separate DOM stuff from the application logic
function isGameOver() {
  if (gameOver){
    DOMStuff.gameOver(this.winner);
  }
}
and the isGameOver function should not not work on DOM anyway, 
that is another function in the game loop



//////Loosely couples objects

all our objects are intended to work together to form final app
individual objects stand alone as much as possible

but Tightly couples objects are objects that rely so heavily on each other
that removing or changing one will mean have to completely change another one

if we want to change the interface of a game,
we should be able to do that without completely re-working the game logic



SOLID: collection of design principles
The Single Responsibility Principle
The Open/Closed Principle
The Liskov Substitution Principle
The Interface Segregation Principle
The Dependency Inversion Principle


//////Single responsibility

helps improve maintainability by limiting the responsibilities
of an object to those which change for related reasons
By decoupling such responsibilities, we can create code 
that is more resilient to change.

established approach to making these determinations
to what behaviors constitutes a single responsibility

Object Role Stereotypes:
Information holder – an object designed to know certain information and provide that information to other objects.
Structurer – an object that maintains relationships between objects and information about those relationships.
Service provider – an object that performs specific work and offers services to others on demand.
Controller – an object designed to make decisions and control a complex task.
Coordinator – an object that doesn’t make many decisions but, in a rote or mechanical way, delegates work to other objects.
Interfacer – an object that transforms information or requests between distinct parts of a system.


""This violates the single responsibility principle, 
because the logic for logging the information should not 
be a responsibility of the Car class.


ask a question when designing
need to update every file writing instance of every class 
you’ve ever implemented a logger inside of.
The Car class can be changed, moved around 
or even deleted without affecting the logger class.

class ErrorLog {
class Car {   //that has its properties, methods, uses errorlog


any function can return a new object. 
When it’s not a constructor function or class, called a factory function.


const shapes = [
  circle(2),
  square(5),
  square(6)
]
const areas  = areaCalculator(shapes) //factory function
const output = sumCalculatorOputter(areas) //ff
console.log(output.JSON())
console.log(output.HAML())
console.log(output.HTML())
console.log(output.JADE())



//////Open-closed Principle

Open: able to add new features or components to the application 
without breaking existing code
Closed: should not introduce breaking changes to existing functionality


//////Liskov substitution principle
All this is stating is that every subclass/derived class 
should be substitutable for their base/parent class.

//////Interface segregation principle
A client should never be forced to implement an interface 
that it doesn’t use or clients shouldn’t be forced to depend on methods they do not use.

//////Dependency inversion principle
Entities must depend on abstractions not on concretions. 
It states that the high level module must not depend on the 
low level module, but they should depend on abstractions.



////Higher order functions
callback functions like filter

var isDog = function (animal) {
  return animal.species === "dogs";
}

var dogs = animals.filter(isDog);
var otherAnimals = animals.reject(isDog);

functions are values, can be separated into small tasks, composed together using higher order for example





////// reducing-coupling
coupling: when one module directly references/knows about another module

//ordering module, create, read, update, and delete orders (i.e., CRUD)
//delivery module, estimate, begin, complete etc.

any module should be easily swapped out at any time for a 
different module. Reusability is also a major reason to minimize coupling.

even if the delivery time is not estimated, the code and order is still placed

patterns like observer pattern or publish/subscribe
using a mediator object to further minimize coupling between modules by isolating them
like when the watch tower mediates between airplanes

Loose coupling is very important for promoting code reuse, 
independent testability, interchangeability, and protection against a single point of failure.
code can most certainly be highly scalable, maintainable, usable, 
reusable, sustainable, extensible, and so on.






object is the heart of object-oriented programming
Stop thinking about individual variables and functions and start thinking in terms of self-sufficient objects.

Class is not an object — it is the blueprint of an object. 
Classes are functions, and functions are objects in JavaScript.

const Book = function(getTitle, getAuthor) { 
  // Public method 
    this.giveTitle = function() {
        return title;
    }
    
  // Private method
  const summary = function() {
    return `${title} written by ${author}.`
  }
}




javascript is a prototype based language
and inheritance is achieved by using the prototype
pattern called Behavior Delegation Pattern or prototypal inheritance.

let Book = function(title, author) {
  Corebook.call(this, title, author)
}
Book.prototype = Object.create(Corebook.prototype);

let book2 = function() {}
book2.prototype = Object.create(book1.prototype);


book2.multiplicity = book1
//adds a property of book1, //Association

//Aggregation, independence, can live without
let publication = {
   "name": "new publication Inc", 
   "books": []
}
publication.books.push(book1);



//composition, object inside and object
const getSummary = () =>  ({
   summary :() => console.log(`book summary need to update.`)
});
const Book = (title, author) => {
   const data = { 
      title, 
      author  
   }
   
   return Object.assign({},
             getTitle(data), 
             getAuthor(data), 
             getSummary()
   )
}
let book1 = Book('The Alchemist', 'Paulo Coelho');
book1.title();



separating state logic from the UI controls 

*/



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
Dynamic User Interface Interactions


//Drop Down menus
hard coded in html, hide/reveal using js
should be able to create multiple drop downs without repeating js code

If you bundle your code into a module you can publish it to npm 
and then install and use it anytime you like


//Image-sliders
using previous-next functions to change the pictures in a nested div


//Forms
more complex constraints can be tested 
using the Constraint Validation API.

validity property
customError
patternMismatch
rangeOverflow
rangeUnderflow
stepMismatch
tooLong
typeMismatch
valueMissing
valid

*/


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
ESC6

ECMAScript is a standard (ES)
while JS is the most popular implementation of that standard
and builds on top of it

ES6 and ES2015 are the same thing
New editions (starting with 2015) will be named ES followed by the year of release: ES2015, ES2016, ES2017

Each release brings updates and new features to the language.
An update to ECMAscript can be expected annually.

install BABEL to allow support/use of new ES updates 
on older client's browsers

# npm install -D babel-loader @babel/core @babel/preset-env webpack

>>add the following to config.json > module > rules

    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ]
        }
      }
    }

>>You can pass options to the loader by using the options property:
>>add plugins below presets array
  plugins: ['@babel/plugin-proposal-class-properties']



////method 2

# npm install --save-dev @babel/core @babel/cli



>> add line of code

>> add plugins because they are the workers of babel
each plugin install its own NPM library
or use a preset
//add plugin that transpiles arrow functions
# npm install --save-dev @babel/plugin-transform-arrow-functions //X

# npm install --save-dev @babel/preset-env
Every preset is its own NPM dependency


>>add file .babelrc file to the root dir
this is a config file for babel, 
to tell to use the arrow functions plugin

>>add to .babelrc
{
  "plugins": ["@babel/plugin-transform-arrow-functions"]  //X
}

{
  "presets": ["@babel/preset-env"]  
  //the preset will be used inst. of arrow functions as its included
}


//run through babel
# npx babel input.js --out-file output.js



// the amount of code needed to support very old browsers is extreme
we need the new plugins only that are needed as most ES6 is already supported
so can tell which browsers excatly we want to support
done by adding lines to .browserlistrc 

>> not ie all   //not support any IE
>>  >0.25%      //only browsers with 0.25% market share or more

https://github.com/browserslist/browserslist


//can get a list of all browsers supported by your browserlist 
config by running following command

npx browserslist

webpack/babel course
https://blog.jakoblind.no/babel-preset-env/





*/


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
JSON
JavaScript Object Notation

will encounter when working with external servers or API's
the universal format for transmitting data on the web

commonly used for transmitting data in web applications
sending some data from the server to client etc

working with JSON using javascript, parsing(reading) to access, creating



json exists as a STRING, converted to JS in order to be accessed
javascript provides a global JSON object that has methods available
for converting between the two

string > js (deserialization)
js > string (serialization)


contains only properties, no methods
use double quotes, single quotes only for surrounding the whole object




how its written
{ name : [ object, object ] } name["object"][1]["objectProperty"][0]
[ object,object ]     // [0]["objectName"][0]

/////////////////////////////////JSON format
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
/////////////////////////////////


superHeroes.homeTown
superHeroes['active']
superHeroes['members'][1]['powers'][2]


////// ex1 to obtain json, use API fetch
make network requests to retrieve resources from a server via JS
we can update small sections of content without having to reload the entire page


when receiving a raw JSON string,
need to convert it to object
use text() then parse()

and when want to send an object/array across a network, 
need to convert to string, 
dates are not allowed and have to be converted to a string first using obj.age = obj.age.toString();
stringify()

const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);


//////
to work on dates, pass as a string first then use
The reviver parameter, a function that checks each property, 
before returning the value.



//////
to work on passed in functions
pass as a string first

const text = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
const obj = JSON.parse(text);
obj.age = eval("(" + obj.age + ")");

document.getElementById("demo").innerHTML = obj.name + ", " + obj.age();


//////
check https://jsonformatter.curiousconcept.com/#
to check your json formatting



*/

//add async to the function that uses the fetch API
//add await before the calls to any async functions

//ex1
async function populate() {

  const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  //const superHeroes = await response.json();
  const superHeroesText = await response.text();  //converting to JS
  console.log(superHeroesText);

  const superHeroes = JSON.parse(superHeroesText);
  console.log(superHeroes);

  populateHeader(superHeroes);



  console.log(JSON.stringify(superHeroes)); //convert to JSON



}

function populateHeader(obj) {
  const header = document.querySelector('header');
  const myH1 = document.createElement('h1');
  myH1.textContent = obj.squadName;
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
  header.appendChild(myPara);
}

populate();


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
Asynchronous code
functions that can happen in the background 
while the rest of code executes

//////////////////////////////////Callbacks
a function that is passed into another function as an argument
which is then invoked inside the outer function
Callbacks are functions that are executed asynchronously, 
or at a later different time.

it might:
Call the callback too early
Call the callback too late (or never)
Call the callback too few or too many times
Fail to pass along any necessary environment/parameters
Swallow any errors/exceptions that may happen


myDiv.addEventListener("click", function(){
  // do something!
})
//function is called when div is clicked


javascript does not run line 1, 2 etc. 
thus nesting functions too many causes callback hell

'asynchronous', aka 'async' just means 'takes some time' 
or 'happens in the future, not right now'.


var photo = downloadPhoto('http://coolcats.com/cat.gif')
// photo is 'undefined'!
In this case the gif might take a very long time to download, 
and you don't want your program to pause (aka 'block') 
while waiting for the download to finish.


downloadPhoto('http://coolcats.com/cat.gif', handlePhotoFunction)

handlePhotoFunction is passed to downloadPhoto but wont run until
downloadPhoto finishes its task, which could take a long time

to fix this
do not get into anonymous nesting
name the functions, keep their code out
use modules
handle errors early

keeping code simple, not nested and split up into small modules.

synchronous code - it sequentially runs top to bottom.


keep using the composition syntax to avoid callback triangles




//////////////////////////////////Promises
an object that might produce a value at some point in the future


const getData = function() {
  // go fetch data from some API...
  // clean it up a bit and return it as an object:
  return data
}

//getData takes time to evaluate and can be used before its evaluated

const myData = getData() // if this is refactored to return a Promise...
myData.then(function(data){ // .then() tells it to wait until the promise is resolved
  const pieceOfData = data['whatever'] // and THEN run the function inside
})


promises can be tested using setTimeout


//promise provides resolve and reject functions to the provided callback:

or var p = new Promise(function(resolve, reject) {
	// Do an async task async task and then...

	if( good condition) {
		resolve('Success!');
	}
	else {
		reject('Failure!');
	}
});


p.then(function(result) {   //when the promise is resolved
	/* do something with the result
}).catch(function() { //when the promise is rejected
	/* error :(
}).finally(function() {
   /* executes regardless or success for failure
});



Since a promise is always returned, you can always use the then and catch methods on its return value!


new Promise({...setTimeout}).then(fn).catch(fn);

new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(function() { reject('Done!'); }, 3000);
})
.then(function(e) { console.log('done', e); })
.catch(function(e) { console.log('catch: ', e); });
.finally(res => { console.log("finally") });  //regardless of success or failure


reject(Error('Data could not be found')); //sending an error to the catch




/////Promise.all
//only want to respond when all of them are completed

takes an array of promises

Promise.all([promise1, promise2]).then(function(results) { //results promise method
	// Both promises resolved
})
.catch(function(error){
  	// One or more promises was rejected
});


//Promise.race 
triggers as soon as any promise in the array is resolved or rejected
written like Prime.all



import loadImagePromised from './load-image-promised'

loadImagePromised('images/cat1.jpg)
  .then((img)=>{
    var imgElement = document.createElement("img");
    imgElement.src = img.src
    document.body.appendChild(imgElement);

  })

// also let whenCatLoaded = loadImagePromised('images/cat1.jpg);




  let addImg = (src) => {
    let imgElement = document.createElement("img");
    imgElement.src = img.src
    document.body.appendChild(imgElement);
  })


  Promise.all([
    loadImagePromised('url'),
    loadImagePromised('url'),
    loadImagePromised('url'),
  ]).then(images) => {
    images.forEach( img => addImg(img.src));
  }).catch((error) =>{
    //handle error later
  })

Promises are better than callbacks because they compose




/////////////////

javascript is single threaded, it can do one thing at a time
one call stack


doA( function(){
	doC();

	doD( function(){
		doF();
	} )

	doE();
} );

doB();

callback hell is skip from one function, to the next, to the next, 
and bounce all around the code base to "see" the sequence flow.
often very repetitive and not reusable in other steps or in other async flows 

//check for values before return
function timeoutify(fn,delay) {
	var intv = setTimeout( function(){
			intv = null;
			fn( new Error( "Timeout!" ) );
		}, delay )
	;

	return function() {
		// timeout hasn't happened yet?
		if (intv) {
			clearTimeout( intv );
			fn.apply( this, [ null ].concat( [].slice.call( arguments ) ) );
		}
	};
}




/////////////////
Promise
once my future value was ready, I exchanged my value-promise 
for the value itself.

add().then(function(returnedPromiseAllDotThenValue){   //where add returns Proimise all.this which is a promise value
    console.log(returnedPromiseAllDotThenValue)        //we can use on it .then also ?!
});

why ? Promises are an easily repeatable mechanism 
for encapsulating and composing future values.


once a Promise is resolved, it stays that way forever
it becomes an immutable value at that point
and can then be observed as many times as necessary.
safe to pass that value around to any party 
and know that it cannot be modified accidentally or maliciously


Promise.all creates a promise 
then chained with .then creates another promise

.then can take two functions as arguments
either by code or name
first: for fulfillment, second: for rejection



var p2 = p.then ( function fullfilled (){

});


//////
var p = new Promise( function(X,Y){
	// X() for fulfillment
	// Y() for rejection
} );


//////
var rejectedTh = {
	then: function(resolved,rejected) {
		rejected( "Oops" );
	}
};

var rejectedPr = Promise.resolve( rejectedTh );


////
function fulfilled(msg) {
	console.log( msg );
}

function rejected(err) {
	console.error( err );
}

p.then(
	fulfilled,
	rejected
);


higher-order function
A function that takes other functions as arguments/returns functions as its result 

callback-function
function that is passed as an argument
called back by the higher order function

Each .then() returns a newly generated promise object,

chain .then
(promise D, (promise C, (promise B, (promise A) ) ) )

let handleFulfilledA = function (tweets) {
  console.log(tweets);
  return get("data/friends.json");
}

myPromise
  .then(handleFulfilledA) 1
  .then(handleFulfilledB) 2
  .then(handleFulfilledC) 3
  .catch(handleRejectedAny);
with each then return variable to next then for input 

Promise.resolve();
returns a new promise, that is resolved with the given value
if the value (has .then) returned promise will follow it
otherwise will be fulfilled with the value

Promise.reject();


Promise.all()
Fulfills when all of the promises fulfill; rejects when any of the promises rejects.

Promise.allSettled()
Fulfills when all promises settle.

Promise.any()
Fulfills when any of the promises fulfills; rejects when all of the promises reject.

Promise.race()
Settles when any of the promises settles. In other words, fulfills when any of the promises fulfills; rejects when any of the promises rejects.

Promise()
Creates a new Promise object. The constructor is primarily used to wrap functions that do not already support promises.


code
https://www.youtube.com/watch?v=vQ3MoXnKfuQ
https://www.youtube.com/watch?v=yswb4SkDoj0


var isMomHappy = false;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

// call our promise
var askMom = function () {
    willIGetNewPhone
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
             // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom didn't buy it
            console.log(error.message);
             // output: 'mom is not happy'
        });
};




var showOff = function (phone) {
    var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';

    return Promise.resolve(message);
};


// call our promise
var askMom = function () {
      console.log('before asking Mom'); // log before (1)

    willIGetNewPhone
    .then(showOff) // chain it here
    .then(function (fulfilled) {
            console.log(fulfilled);
         // output: 'Hey friend, I have a new black Samsung phone.' (3)
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
         // output: 'mom is not happy'
        });
            console.log('after asking mom'); // log after (2)

};

askMom();


() asynchonous
the code will run without blocking or waiting for the result. 
Anything that needs to wait for a promise to proceed is put in .then.

remote call to get the result, you need to wait, and you can’t get the result immediately.
You don’t want your entire process to be blocked while waiting for the result.

*/


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

fetching data from a server - displaying it creatively on their site
server containing: blog posts, user data, high scores for a game etc.
the methods of accessing and then using that data are essentially the same

servers serve data for external use (referred to as API's)
Application programming interfaces

a waiter running back and forth between applications and databases
and devices to deliver data and create connectivity
 
requesting data from an API
accessed through URL's

specifics for any API are usually documented on the service's website
in most cases you will have to create an account and request an API key

like the:
https://openweathermap.org/current
https://openweathermap.org/price

secure your api keys
"my key had been spotted by a bot that continually searches GitHub for API keys.
Don’t trust .gitignores and gems like Firago for keeping your data safe, 
these may work as a first layer of protection – 
but should be backed up by another level of security.
store it in a private repo if not on your local machine. And lastly, if your API keys get out on the web"


" Amazon was offering a 1 year free trial of AWS, 
with a limited cap on uploads. I figured I’d give it a shot, 
hook into S3 and host my images there.

I knew my API key needed to be safe, so I installed the Figaro"


wait for the key,


//////Fetching Data
get data from the API into our code

XMLHttpRequest //years ago
libraries like axios and superagent 

>>browser fetch
fetch(url).then().catch()



For security reasons, by default, browsers restrict HTTP requests 
to outside sources (which is exactly what we’re trying to do here).
https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
https://javascript.info/fetch-crossorigin

fixed by adding mode:cors parameter to the fetch function

fetch('url.url.com/api', {
  mode: 'cors'
});

fetch is an async request




fetch can be used by other technologies like "Service workers"
single logical place to define other http related concepts
such as CORS and extensions to http

and differs from jQuery.ajax()
wont reject on HTTP 404 or 500, only on network failure
unless called with credentials option set to include
  wont send/set cookies sent back in cross-origin responses


can accept a second parameter init object
that allows you to control a number of different settings




*/



const newImage = document.querySelector('.imageAPI');

fetch('https://api.giphy.com/v1/gifs/translate?api_key=xk53LAHxmWHiXw63IIkWi8pQXy0Vns2E&s=cats', { mode: 'cors' })
.then(function(response) {
  return response.json();   //will output a promise
})
.then(function(response) {
  console.log(response.data.images.original.url); //will output the image's url
});

//EX/
/*
Expand on our little project here by adding a button that fetches a new image without refreshing the page.
Add a search box so users can search for specific gifs. 
You should also investigate adding a .catch() to the end of the promise chain in case Giphy doesn’t find 
any gifs with the searched keyword. Add a default image, or an error 
message if the search fails.
*/

/*
//2nd parameter to fetch
// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });

/*


Note that mode: "no-cors" only allows a limited set of headers in the request:
Accept
Accept-Language
Content-Language
Content-Type with a value of application/x-www-form-urlencoded, 
  multipart/form-data, or text/plain


o cause browsers to send a request with credentials included 
on both same-origin and cross-origin calls, add credentials: 'include'



more on credentials property
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


//////Uploading JSON data
const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})


//////Uploading a file
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]); //formData.append(`photos_${i}`, photo);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})



//////
Request() accepts exactly the same parameters as the fetch() method. 
You can even pass in an existing request object to create a copy of it:

const myHeaders = new Headers();

const myRequest = new Request('flowers.jpg', {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default',
});

fetch(myRequest)


//////
The Headers interface allows you to create your own headers object 
via the Headers() constructor


//////
if (window.fetch) {
  // run my fetch request here
} else {
  // do something with XMLHttpRequest?
}



*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

check this list of useful public api's:
https://github.com/n0shake/Public-APIs#captcha
https://github.com/public-apis/public-apis


async and await : two keywords that can help
make async read more like sync

async function getPersonsInfo(name) { //async functions allows using await on promises
  const people = await server.getPeople();   //await is like .then? and makes code skip for now/pause this block until gets the value
  const person = people.find(person => { return person.name === name });
  return person;
}.catch(err => {
  console.log(err); //handle error using catch normally
});

automatically/always returns a promise
Other values are wrapped in a resolved promise automatically.
returning in an async function is the same as resolving a promise.
throwing an error will reject the promise.

We can catch that error using try..catch, the same way as a regular throw:
throw?
We can catch such errors using a global unhandledrejection event handler


async function f() {
  return 1;
}

f().then(alert); // 1

//you can name any function async
server.getPeople().then(async (people) => {
  people.forEach(person => {
    // do something asynchronously for each person
  });
});

await is pretty simple: it tells JavaScript to wait 
for an asynchronous action to finish before continuing the function. 
It’s like a ‘pause here until done and cont the next block’ keyword.
used in place of then


//another way of handling errors
async function getPersonsInfo(name) {
  try {
    const people = await server.getPeople();
    const person = people.find(person => { return person.name === name });
    return person;
  } catch (error) {
    // Handle the error any way you'd like
  }
}


//await does not work on the global scope


//the previous API example
  const img = document.querySelector('img');

  async function getCats() {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats', {mode: 'cors'});
    const catData = await response.json();
    img.src = catData.data.images.original.url;
  }
  getCats();



In modern browsers, await on top level works just fine


//await accepts a thened promise return
//but what is this then/resolve class ?
If await gets a non-promise object with .then, it calls that method providing the built-in functions resolve and reject as arguments (just as it does for a regular Promise executor). Then await waits until one of them is called (in the example above it happens in the line (*)) and then proceeds with the result.

class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve);
    // resolve with this.num*2 after 1000ms
    setTimeout(() => resolve(this.num * 2), 1000); // (*)
  }
}

async function f() {
  // waits for 1 second, then result becomes 2
  let result = await new Thenable(1);
  alert(result);
}

f();

///////////////////
Async class methods

class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }
}

new Waiter()
  .wait()
  .then(alert); // 1 (this is the same as (result => alert(result)))



// wait for the array of results
let results = await Promise.all([
  fetch(url1),
  fetch(url2),
  ...
]);



////
throw, convert promise to async promise

function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson('https://javascript.info/no-such-user.json')
  .catch(alert); // Error: 404

async function loadJson(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json;
    return json;
  }
  throw new Error(response.status);
}




async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  // shows 10 after 1 second
  wait().then(result => alert(result));
}

f();



function addPromise(x){
  return new Promise(resolve => {
    // Code goes here...   
    // resolve()  //add inputs here to be returned on resolve
                  //which can be wrapped in a settimeout argument
  });
}
addPromise(10).then((sum) => {
  console.log(sum);
});


async function addAsync(x) {
  const a = await doubleAfter2Seconds(10);
  const b = await doubleAfter2Seconds(20);

  return a+b;

}



let docs = [{}, {}, {}];
let promises = docs.map((doc) => db.post(doc));

//
let results = [];
for (let promise of promises) {
  results.push(await promise);
}

//
let results = await Promise.all(promises);

console.log(results);



Async functions are an empowering new concept in "ES7" ?

async
const [wes,scott] = await Promise.all([wesPromise,scottPromise]);


cont fruits = ["peach" "apple"];
const smoothie = fruits.map(v => getFruit(v));

const fruitLoop = async() => {
  for await (const emoji of pineapple){
    log(emoji);
  }
}


*/



