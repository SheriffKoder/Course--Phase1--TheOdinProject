/* index
js writing styles
Linters and prettier

Function-constructors, prototypes, inheritance
Object-constructors

set, get 
what the new assignment does

/*
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


//arrived in ES6
//npm and webpack before

adding an external library method to your code

HTML:   <script src="../../moment.min.js"></script> before default.js script tag, to be used for any defined after it
JS : librayName().methodName();

npm is used to not download each update for the library
yarn is an alternative but stull uses npm under the hood

npm package manager made for node.js
node.js a js runtime designed to run on the server not frontend

npm install
> npm init
generates new file named package.json
which is config file uses npm to save all project information
> npm install moment --save //download into node_modules folder and modifies json to keep track
(line 1481) HTML:   <script src="../../moment.min.js"></script> before default.js

share json file with other developers and they install required packages with npm install

node.js is an implementation of
CommonJS an ecosystem for js to run outside the browser
to allow js to import/export code across files without resorting to global variables
node.js a server side programming language

instead of (line 1481) to load js modules
var moment = require('moment'); //node js knows where to find moment within the directories

but the browser does not have file access, so it throws an error
bundler, a tool has access to file system to create a final output 
that is browser compatible (which does not need access to the file system)
it replaces all require with actual contents of each required file automatically

module bundler like Browserify and webpack(used in react)

step: install webpack, webpack-cli(allows usage of wp from cmd)
it is an npm package
> npm install webpack webpack-cli --save-dev
--save-dev this saves it as a development dependency, so it would be
needed in the development env, but not on the production server
will be reflected on the json file


> ./node_modules/.bin/webpack index.js --mode=development
command runs webpack tool that was installed in the node_modules folder
so it can check the index.js for any require statements to replace
into an output file called main.js
--mode=development outputs a code that is readable for developers
as opposed to --mode=production
use main.js instead of HTML :  <script src="dist/main.js"></script>


webpack can read options from a config file in the root directory
of the project named webpack.config.js
where the target file and mode option are stored

this line is run every time we change index.js
> ./node_modules/.bin/webpack

now any external scripts will be added with "require" statements
thus will have single js bundle file which is good for performance



//////////////////////////////////////
//////////////////////////////////////
transpiling code, converting code from one language to another similar language

for Css there are Sass, Less, Stylus etc.
for js the most popular transpiler was CoffeeScript 
but now Babel or TypeScript

Babel transpiles next generation JavaScript with features 
not yet available to all browsers
ES2015+ to be compatible with ES5

Typescript is a language that is identical to next generation JS
but also adds optional static typing

many people use babel as its closest to vanilla JS

continue out cmds lesson and install babel(which is an npm package)
these are three separate packages as dev dependencies
> $ npm install @babel/core @babel/preset-env babel-loader --save-dev
@babel/core //main part of babel
@babel/preset-env //preset defining which new js features to tanspile
babel-loader  //pkg enable babale to work with webpack

and can configure webpack to use babel-loader by adding/editing-to 
to the module exports of webpack.config.js this

  module: {  
    rules: [  
      {  
        test: /\.js$/,  
        exclude: /node_modules/,  
        use: {  
          loader: 'babel-loader',  
          options: {  
            presets: ['@babel/preset-env']  
          }  
        }  
      }  
    ]  
  } 


// index.js  
var moment = require('moment');
or 
import moment from 'moment';  //extra flexibility


//////////////////////////////////////
//////////////////////////////////////

task runner
tool that automates different parts of the build process
like minifying code, optimizing images, running tests etc.

in 2013 Grunt was the popular frontend taskrunner
now the popular choice is to be using the scripting 
capabilities built into npm package manager itself

adding to package.json script object property these properties
make using webpack easier

    "build": "webpack --progress --mode=production",  
    "watch": "webpack --progress --watch" 


now added two scripts build and watch
> npm run build (this will run webpack from the webpack.config.js edited)
> npm run watch (this uses --watch option instead to automatically 
                re-run webpack each time any JS file changes)

--progress shows percent progress
--mode=production //minimize the code for production


package.json can run webpack without having to specify 
the full path ./node_modules/.bin/webpack

webpack-dev-server, 
a separate tool which provides a simple web server with live reloading.


> npm install webpack-dev-server --save-dev
the add to package.json like before "serve": "webpack-dev-server --open"  


Now you can start your dev server by running the command:
> npm run serve

This will automatically open the index.html website in your browser 
with an address of localhost:8080 (by default).
Any time you change your JavaScript in index.js, 
webpack-dev-server will rebuild its own bundled JavaScript 
and refresh the browser automatically.


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/



*/