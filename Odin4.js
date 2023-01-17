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

*/

Person.prototype.sayNameTwoTimes = function() {
    console.log(this.name + " " + this.name);
}

player_one.sayNameTwoTimes();







/* 
Prototypal Inheritance 
constructior prototype, create object of another object's prototype
to use on the new constructor another's prototype which uses the same properties
*/
function Employee (name2) {
    this.name = name2;
}

Employee.prototype = Object.create(Person.prototype);

const mark = new Employee("mark");

mark.sayNameTwoTimes();

console.log(mark.constructor);