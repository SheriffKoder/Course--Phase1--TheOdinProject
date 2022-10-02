/*
getElementById();
getElementsByClassName('x'); 
//all elements with this class name and then becomes an array of elements
getElementsByTagName('x'); //array
.querySelector();   //returns the 'first element', any selector tag/class/id
querySelectorAll();

const btn = document.getElementById('btn');
btn.addEventListener('click', function x() {}  );
//     btn.classList.add('button')


[DOM Manoeuvering]
.lastElementChild //its last child
.children[3] //its child #3
.parentNode
.nextElementSibling
.previousElementSibling

document.insertBefore(newNode, existingNode)
parentEl.insertBefore(createEl, firstchildEl)
parentEl.replaceChild(createEl, firstchildEl)
parentEl.removeChild(firstchildEl)

btn.classList.toggle('button_blue'); //toggle the class on and off


*/


let btn = document.getElementById('btn');
btn.addEventListener('click', addClassFunction);

function addClassFunction () {
    btn.classList.toggle('button_blue');
}


/* List Switcher -----------------------------------------------------*/
/*take the input-container, add to it an event listener on change, 
this event will take the list and set to it a style of 
event's target's value which is input-container */

const container = document.querySelector(".container");
container.addEventListener("change", (event) => 
{
  const list = document.querySelector("ol");
  list.setAttribute("style", `list-style-type: ${event.target.value}`);
}

                            );

/* --------------------------------------------------------------------*/


/* textNode is the text for h1,p etc without using innerHTML */
//const h1 = document.createElement('h1');
//const TextNode = document.createTextNode('Hello World');
//h1.appendChild(TextNode);
//document.body.appendChild(h1);


/*////////////////////////////////////////////////////////////////////*/

/* //// javascript, adding new info ////

variables are storage containers
var, let, const                 // var was used in old browsers, and almost the same as let will discuss later

let user = 'john', age = 25;    //can add multiple variables in one line 

let user = 'john',              //multiline break
    age = 25;

//*--------------------*//*
name should be letters, digits, $, _ 
and not start with a digit, not use -
let $, let _ are correct

variable Apple and APPLE and apple
are all different variables, case matters

non-latin letters are allowed but not recommended


//*--------------------*//*
constant (unchanging), cannot be reassigned otherwise will cause error
const 

uppercase constants writing method, const COLOR_RED = "";
for facts hardcoded in code and easy to remember/use than their values
value is known prior to execution and directly written into the code.

be descriptive, human readable good names, naming is an important skill


//*--------------------*//*
declared with var, are either function-scoped or global-scoped. 
variables skip the block they are in (function or loop)

function sayHi () {

  if (true) {
  var test = true; // use "var" instead of "let"
  }

  alert(test); //outputs true , but if let will error not defined

  for (var i = 0; i < 10; i++) {
  }
  alert(i); //outputs i

}

sayHi();
alert(test); //outputs undefined either ways

*/

function sayHi () {

  if (true) {
  var test = true; // use "var" instead of "let"
  }

  alert(test); //outputs true , but if let will error not defined

  for (var i = 0; i < 10; i++) {
  }
  alert(i); //outputs i

}

sayHi();
alert(test); //outputs undefined either ways
