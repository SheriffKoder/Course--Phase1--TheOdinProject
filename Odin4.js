/* index
js writing styles
Linters and prettier

Function-constructors, prototypes, inheritance
Object-constructors

set, get 
what the new assignment does
*/


/*
jQuery
it is not needed anymore
popular for doing things like DOM manipulation, AJAX calls
but may be used in older systems


Coding style
consistent in indenting, quote style
so become more maintainable and easier to read



////////good practices////////
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
use CONST instead of VAR for all references
if will reassign use LET better than VAR for its scope properties

use const item = {}; instead of new Object();


const lukeSkywalker = 'Luke Skywalker';
const obj = {
    
    lukeSkywalker, //this kind is put here first

    value: 1,

    addValue(value) {
        return atom.value + value;
    },

    'data-blah': 5, //quote used on multi word names only

};


Use array spreads ... to copy arrays instead of for loops
const itemsCopy = [...items];

or convert an object to an array
const objectname = [...foo]; //but not use when adding methods inline to it

//use line breaks in multi line arrays
const objectInArray = [
  1,
  {
    id: 2,
  },
];


//
function getFullName(user) {
  const { firstName, lastName } = user; // instead of const firstName = user.firstName;
  return `${firstName} ${lastName}`;
}

//
const [first, second] = arr; // first = arr[0], second = arr[1]


//// another way of returning
function processInput(input) {
  // then a miracle occurs
  return { left, right, top, bottom };
}
// the caller selects only the data they need
const { left, top } = processInput(input);


//strings more than 100 chars not written in multiple lines
//   return `How are you, ${name}?`; better than   return 'How are you, ' + name + '?';




check other stylings in this lesson
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

  //use extends and super to take from a previous class's constructor
  class Town extends City {
    constructor (name) {
      super(name)
    }
  }

  const myTown = new Town("Cairo");
  console.log(myTown.name);

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
object2.__proto__ = object1;

//any function will have this prototype property now
Function.prototype.mybind = function () {};



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
