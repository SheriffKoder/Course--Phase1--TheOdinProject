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


/*////////////////////////////////////////////////////////////////////*/
/* [DOM Manoeuvering]

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




/*////////////////////////////////////////////////////////////////////*/
/* List Switcher
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



/*////////////////////////////////////////////////////////////////////*/
/* textNode
the text for h1,p etc without using innerHTML */

//const h1 = document.createElement('h1');
//const TextNode = document.createTextNode('Hello World');
//h1.appendChild(TextNode);
//document.body.appendChild(h1);




/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* variable types and naming


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
CONST Constant (unchanging), cannot be reassigned otherwise will cause error
const 

uppercase constants writing method, const COLOR_RED = "";
for facts hardcoded in code and easy to remember/use than their values
value is known prior to execution and directly written into the code.

be descriptive, human readable good names, naming is an important skill


//*--------------------*//*
//*--------------------*//*

declared with var, are either function-scoped or global-scoped. 
> they skip the block they are in, IF here for example
and if in function variables skip the block they are in (function or loop)
 

function sayHi () {

  if (x=1) {
  var test = true; // use "var" instead of "let"
  }

  alert(test); // out of declaration block and outputs true , 
               // but if let will error not defined
               // outputs even if IF branch not execute

  for (var i = 0; i < 10; i++) {
  }
  alert(i); //outputs 10

  //var test; //can be defined here also


}

sayHi();
alert(test); //outputs undefined either ways


VAR can be defined multiple times but LET does not get declared more than once
var user = ;
var user = ;

SO:
1) var can be defined/used anywhere in the code and code will define it at code starts
2) var can be defined in a non executing branch if, etc
3) var name can be re-defined



* function go() { }(); // <-- can't call Function declaration

best use let and const instead of var







/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* Arithmetic operands


+ addition, - subtraction, * multiplication, 
** exponation power, / division, % modulus, ++ increment, -- decrement
operand +(operator) operand 

8 % 3 (returns 2, as three goes into 8 twice, leaving 2 left over).


cannot 3++;,  
can varName++; //which has a value of 3

x+= 2, -=, *=, /= 
number + number = number


let z = x ** 2;   // x power 2
let z = Math.pow(x,2);



JavaScript will try to convert strings to numbers in all numeric operations:
* , / , - but not +

so 
number + string = string  // "10"+ 20  = 1020
string + string = string // "10"+ "20" = 1020
solution
number + Number(string)



//arithmetic priority
>precedence/flow of calculation left to right
parentheses ()
then Multiplication (*) and division (/) have higher  
then addition (+) and subtraction (-)



numbers in js are 
64-bit floating point, 
integers 15 digit long precision 
decimals are a maximum of number of 17 

Floating point arithmetic is not always 100% accurate:
To solve the problem above, it helps to multiply and divide:

let x = 0xFF;   // FF Hexadecimal

//converting from js decimal to octal, binary etc
//myNumber2.toString(number_type_base); 

//rounding a float number using .toFixed();
const lotsOfDecimal = 1.766584958675746364;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2); // 1.77

to fixed of 2 floats





/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* NaN (not a number)

let x = "10";
let y = "10Apple";
let z = x / y; //NaN
let o = isNaN(z); //true

console.log(o);


let x2 = NaN; 
// NaN + number = NaN
//NaN+String = NaNString  

let x3 = typeof NaN; //number
let x4 = typeof Infinity; //number


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* Infinity


let myNumber = 2;
while (myNumber != Infinity) { // Execute until Infinity
    myNumber = myNumber * myNumber;
}

let x5 =  2 / 0; //Division by 0 = Infinity


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*null and undefined

alert( '' == false ); // true
alert( null === undefined ); // false  object/undefined
alert( null == undefined ); // true

when converted to a number, null becomes 0
alert( null > 0 );  // (1) false, because co mparisons convert it to 0
alert( null == 0 ); // (2) false, because null in equality would be only equal to undefined
alert( null >= 0 ); // (3) true

when converted to a number, undefined becomes NaN
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

to avoid these tricks, use === with null/undefined, 
and do not use >= like comparisons

array[-1] or [length+x] undefined









/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* Strings and its methods


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* \
const string_with_quotemark = 'this string\'ve got a quote mark';

//string line breaks using \n
const text = "this text has a \n new line break";

\0 null character
\ space

\
new line

\' , \"
\\ backslash
\r carriage return
\v vertical tab
\t tab
\b backspace
\f form feed
\uXXXX


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* template literals : ` ${var}`

//combine a variable/number, with a string using template_literals
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"


//can calculate
${ (score / highestScore) * 100 } 


//respects line breaks and puts them into output
const output = 
`I like the song.
I gave it a score of 90%.`;



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* STRING creation, converting and methods



//Creating a string
strings written between "", '', ``, 
let x = String("");
let string4 = new String('string'); //type object

let s1 = new String("2 + 2");
eval(s1); //returns 2+2
eval(s1.valueOf() )); //returns 4 
// string objects are converted to primitive with valueOf() method.


//but
let s1 = "2 + 2";
eval(s1); //returns 4 directly


/////////////////////////////////////////////////////
//Converting

Number(myString)
toString(myString)

let s1 = null;
let s2 = String(s1);
console.log(s2); //"null" // not use toString();

//convert a string into an array
let text = "a b c d e f";
const myArray = text.split(""); 
myArray is an array

text.split(" ")//split on , " ", | pipe, output before first occurrence of this condition


/////////////////////////////////////////////////////
//javascript treats strings as objects when executing 
methods and properties 


let text = "word of mouth";
let length_count = text.length;
let part_of_text = text.slice(7); // text from 7 onwards
let part_of_text = text.slice(7,10); // from 7-12, count starts at 0
let part_of_text = text.slice(-10,-7); // counting from end of string, starts 1
let part_of_text = text.slice(-7); // text from -7 backwards

text.substring(7,10); //same as slice but does not support -ve numbers starts from 0
text.substr(7,3);     //same as slice but the second parameter defines the length of the output string
text.substr(7);       //

let newText = text.replace("mouth", "mind"); //replaces the string part "mouth" with "mind"
//replaces only the first match, new string is returned not modify the original

let newText = text2.replace(/Mouth/i, "mind"); //replace case in-sensitive
let newText2 = text2.replace(/Mouth/gi, "mind"); //global match, all matches AND case in-sensitive

text.toUpperCase();
text.toLowerCase(); //toLocaleLowerCase("tr")


let text3 = text1.concat(" ", text2); //can be used instead of the + way
let text5 = text4.trim(); // removes white space "surrounding the string"
let text5 = text4.trimStart(); // removes white space "beginning the string"
let text5 = text4.trimEnd(); // removes white space "beginning the string"

string.includes("h"); //true if has this h letter
string.endsWith("h"); //true if ends with this letter //startsWith
string.indexOf("h"); //returns location of h, or -1 if not found


//3 x's at the start
text.padStart(3, "x"); // xxtext 
text.padEnd(3, "x"); // xxtext


let text = "HELLO WORLD";
let char = text.charAt(0); //returns H
let char = text.charCodeAt(0); //returns the unicode UTF-16 i.e 72
text[0] // returns H


/*////////////////////////////////////////////////////////////////////*/
/* Extras


\ude04 //emoji smile


let a = 1;
Boolean(a); // true


When values of different types are compared, 
they get converted to numbers (with the exclusion of a strict equality check).


let date1010 = new Date().getDay(); //gets the day number of today 0-6
let day;




/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* switch

//if there is a match the relevant block will be executed 
//if no matches then default

// break out of the switch block,  
// otherwise will continue to next block, 
// can be skipped in last case

//default can be put in any line but watch for break;
//If multiple cases matches a case value, the first case is selected.
//switch cases use strict equality comparison


let expression = "22";

switch(expression) {

  case "22":
        // code block
          break;

  case y:
  case z:                 //y and z use the same code
        // code block
        break;

  default:
        // code block

}









/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* Logical Operators and truthy comparisons

|| (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).

&& is higher priority than ||


if ("0") {
  //true because only empty string is false and 0 is converted on comparison/equality
}

//letter comparison according to their unicode value
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

*/


//// OR || chain 
//let value1;
//let value2 = alert(1);
//let value3 = "string3";
//let value4 = "string4";
//let value5 = 0;
//let result = value1 || value2 || value3 || value4; 
// executes value2 (but it returns undefined) so will output string3 only. left to right, once find it quits, original form
//a chain of OR || returns the first truthy value or the last one if no truthy value is found.

//let result2 =  value1 || value1 || value5 || "Anonymous"; // output Anonymous
//can be useful if all values not exist/false we output a string or a function/alert

//console.log(result);
//console.log(result2);

////AND && chain, 
//let result3 = value2 && value2 && value1 && value3 & value5;
//if all true outputs the last true value 
//if all false otherwise the first value if all false 
//if true and false, returns the first false

//console.log(result3);







//// Examples ////

// alert( alert(1) && alert(2) );
// executes  alert(1) then undefined(value of alert1 as it returns nothing) then stops
// undefined && undefined


// && executes before ||
/// alert( null || 2 && 3 || 4 ); //returns 3
// null(false) || 3(true) || 4(true)


// a && b || c && d     


////logical instead of if
//let x = 1;
//(x > 0) && alert( 'Greater than zero!' );

//let val = 5;
//let result615 = !val;    //returns !true = false
//console.log(result615); //false


//!! (not not) is !false, gives true
/*
let result616 = (!!"string"); //true, can be used to check on strings
console.log(result616);


if (-1 || 0) alert( 'first' );  //-1 is true so it executes
if (null || -1 && 1) alert( 'third' ); //executes false||true









/*12/10*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/


/*////////////////////////////////////////////////////////////////////*/
/* ? operator and its chaining


select_id.addEventListener('change', setWeather);
const choice = select.value;


//Ternary Operator
// condition ? true run/return this code : false run/return this code instead

let accessAllowed = age > 18 ? "adult" : "not adult";
let message = (age < 3) ? 'Hi, baby!' :   (age < 18) ? 'adult!' : (age < 100) ? 'grown!';



// greeting = isBirthday
//   ? 'Happy birthday Mrs. Smith — we hope you have a great day!'
//  : 'Good morning Mrs. Smith.';

//if greeting = birthday, output this, else output this



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

/*
regular expressions allows to check a string of characters like passwords


    ////wrapping//
    /   / forward slash at start and end
    / ninja / checks for matching the word ninja within a whole text

    ////flags//
    /g after final slash, all matches
    /i after the final slash case insensitive

    /   /g


    ////including and excluding//
    [ng]inja ,  square brackets means match n or g in first position
    [^pe]inga ,   match everything instead p and e


    / [no][io]nja / i
    //NInja case insenstive


    ////ranges
    [a-z] , range letters from a to z
    [a-zA-Z], lowercase range and  uppercase range

    ////repetitions
    [0-9][0-9][0-9] , three numbers from 0 to 9
    [0-9]+ , any repetitions
    [0-9]{3}, how many times would like it to repeat
    [0-9]{5,8} 5 to 8 characters long
    [0-9]{5,8} at least 5 characters long

    / [A-Z][A-Z]nja / i
    //NInja case insenstive



    ////metacharacters
    \d match any digit character (like [0-9])
    \w match any word character like (a-z A-Z also 0-9 and _)
    \s match a whitespace character (spaces, tabs etc)
    \t match a tab character only

    / \d\s  / digit 0-9 then the second character a whitespace type

    / \w\w nja / i
    //NInja case insenstive


    ////special characters
    +   , at least one or more, any repetitions
    []  , character set
    [^] , anything except after the negate symbol
    ?   , zero-or-one times, makes preceding char optional
    .   , any character except new line/enter
    *   , 0-or-more (something like +)  

    \   , escapes the next character like in meta
    if want to use a special character, use \ before it \*

    / h?e?llo  /    => llo still a match
    / a[a-z]?  /    => a, aa both match
    / car.    /     => car (not match because its asking for a character) 
                      card,cars (match)
    
    / M?r?.?[A-Z][A-Z]nja / i
    //Mr.NInja or NInja case insenstive

    
    ////only want the specified length/expression
    / ^[a-z]{3}$  /         3 letters not more
    the beginning ^ and the end $ of the field





    | means or
    / [p|t|v]?flag /     //[p or t or v](optional) then flag

*/




/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

DOM change
breakpoints
add css pseudo state
check scripts from the resources panel
css properties in alphabetical order

Done: 
from the middle bar in dev tools, styles >
> CSS add class
> CSS add :hover etc
> CSS change margins etc.
> CSS view layers specifity layer-icon

> to view only selected CSS
from the middle bar in dev tools, computed
show all, opaque is the inherited styles

scroll down in style to see also styles
and @supports 
@scope which overrides the global css 



... vertical dots
type, show rendering > view print
> type, Show Coverage > view used html,css,js coverage


Right click the element
Force state > hover
press H and node is hidden, Del for Delete
Copy > Copy JS path

console


//Responsive
... add device type, change to mobile(no-touch) for hover ability

throttle for mid/low, lowers the 3G/cpu performance from your device's capability
can throttle separately from network and performance

Right ... button, more tools > sensors
change geolocation and also orientation


//Sources tab
contains navigator, file viewer, js console

on js file, right click, open link in sources panel, will show script

breakon, break on attribute notifications, will show the line causing that attribute





*/


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* console tricks

//styling the console %, 2nd parameter
console.log("%c i am a string", "font-size: 20px; color:red;");
console.warn("Warning here"); //warning style
console.error("error here"); //error style
console.info("info here"); //info style
console.assert(1===2, "that is wrong"); //on true no output, on false output this

const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "wrong class");

//console.clear(); //clear console

console.dir(p); //showing the actual element

                    //this enters as dog
const dogs = [{name:"snickers", age: 2}, {name:"popey", age: 3}];

dogs.forEach( (dog) => {

    console.group(`${dog.name}`); //groups console outputs by dog.name
    //.groupCollapsed

      console.log(`this is ${dog.name}`);
      console.log(`${dog.name}`);

    console.groupEnd(`${dog.name}`);

});


//how many used this console
console.count('wes');
console.count('wes');
console.count('wes');


// timing
console.time('fetching data');
fetch('https://api.github.com/users/sheriffkoder')
  .then (data => data.json())
  .then (data => {
        console.timeEnd("fetching data");
        console.log(data);
  });


console.table(dogs); //displays in a table



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*Functions

imagine taking one of the scripts and bundling into a little package
to be used over and over again

*/


//combine all array items together in a string
const myArray = ['I', 'love', 'chocolate', 'frogs'];
const madeAString = myArray.join(' '); //, by default
console.log(madeAString);

//
function hello (name = "chris") {
    //console.log(name);
}


//
document.getElementById("regex");
regex.addEventListener('keydown', logKey);

function logKey (event) {
    //console.log(`you pressed "${event.key}" `);
}

////variations: asynchronous and arrow
//regex.addEventListener('keydown', function  (event) {} );
//regex.addEventListener('keydown',           (event) => {});

//ommiting the brackets if one line
regex.addEventListener('keydown',           (event) => console.log(`you pressed "${event.key}" `) );


//map() takes each item in the array in turn
//takes the value returned by that function and adds it to a new array
//here, return item * 2;
const original_array = [1, 2, 3];
const doubled_array = original_array.map( (item) => item * 2   );
// item.length , each item's length  is returned in a new array


console.log(doubled_array);


/*////////////////////////////////////////////////////////////////////*/
/*

keep parts of code locked away in functions to avoid
js files shadowing similar named variables and items


////if the text parameter is not passed, the value "no text given".

//function showMessage(from, text = "no text given") {
}

////anotherFunction executed if text is not given
//function showMessage( from, text = anotherFunction() )
or check with if text===undefined, 
or text = text || "not given"
or alert(count ?? "not given"); //nullish coalescing operator


//return; //causes function to exit immediately //undefined
not use new line in return unless in parentheses in the first line


a function should do exactly what is suggested by its name no more.
separate actions, make names action informative


*/



function checkAge(age) {
  return (age > 18)? true : confirm('Did parents allow you?');
  //return (age > 18) || false;
}

console.log(checkAge(20));


function min (a,b) {
  //return (a > b)? a : b;
  return (a>b) || b;
}

console.log(min(2,3));

console.log(power(2,2));
//power is x ** p but use loops
//math.pow(x,p)
// pow = (x, p) => n ** n;

function power (n, p) {

  let y = n;
  let i = 0;

  while (i < (p-1) ) {
    
    y = y * n;
    i++;
  
  }
  
  return y;
}

let power2 = function (n, p) {  //expression

  let y = n;
  let i = 0;

  while (i < (p-1) ) {
    
    y = y * n;
    i++;
  
  }
  
  return y;
};



////copy the function to another name
let pow = power; //power can be a declaration or expression name
let pow2 = power2; //power can be a declaration or expression name

console.log("power resuse " + pow2(2,2));

//function declarations can not have ; at the end
//function expressions can have ; at the end, as its a variable declaration
//but it actually did not matter on trying



////passing a function Expression to another function
function mathematics (power_expr) {
  console.log("passed function " + power_expr(2,2));
}
mathematics(power2); //callbacks - function arguments
//mathematics(function() {} );


//function declarations are preferred to be used 
//because of their un dependance flow of execution on and readability



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

/*

Arrow functions

let func = (arg1, arg2, ... ) = > expression
let func = arg1 => expression
let func = () => expression     //if no parameter

func();


//if age then use this function, else func is another function
let func = (age > 18) ?
    () => alert('hello'):
    () => alert ('greetings');

can ommit {} if one line



////Ex
let ask = (question, yes, no) => {
    if (confirm(question)) yes();     //confirm alerts y/n
    else no();
}

ask ("agree ? ", () => alert("you agreed"), () => alert("you not agree"));


////Ex
let lastLetter = (inText) => console.log(inText.charAt(inText.length-1));
lastLetter("text");




var, to the immediate function body (function scope)
let, to the immediate enclosing block donated by {} block scope

console.log(window.var); // var
console.log(window.let); // undefined




*/



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/* Problem solving /* take sticky-notes from here */
/*

high performance, scalability
making lots of programs

slowdown and think through the steps

(1) understand the problem (write)
paper, english, make sense, diagram it

(2) plan (interface, output, input)
what about the interface, 
what is the desired output, 

(3) input execution using pseudo code,
the art of turning a problem into code without even knowing how to code.
given inputs, what are the steps to return that output
write code in readable language, 
divide into smaller tasks
work on one by one and if one you do not know can easily tackle
as comments that will guide the production of real code

When a user inputs a number
Loop from 1 to the entered number
If the current number is divisible by 3 then print "Fizz"
If the current number is divisible by 5 then print "Buzz"
If the current number is divisible by 3 and 5 then print "FizzBuzz"
Otherwise print the current number


//for numbers that divide by 3 without a remainder print Fizz
if (i % 3 === 0) {



have a framework of providing solutions
valuable skill equal to code proficiency, debugging and system design


1) understand 
most hard problems are hard because you don't understand them
you understand by explaining it in plain simple english  

2) plan
take time to analyze the problem and process information
“Given input X, what are the steps necessary to return output Y?”

3) Divide
do not solve one big problem, break into sub problems
sub-problem, that does not depend on others being solved


4) reduce 
reduce complexity for problem on focus and expand on success

5) Stuck
a. go step by step to check if something wrong
debugging flow over your code written and check what it is executing 

b. reassess, step back, look at the problem from another perspective
anything can be abstracted to a more general approach ?
i.e lost in details and overlook general principles that would solve the problem at a more general level
b.1 another way to reassess is to start again from scratch

c. Research for a solution
even if you solved it, can learn new things


////Practice problem solving
daily challenges one at least on Coderbyte
Each time, you’ll develop strength, wisdom, and perspective.


Repetitive programming techniques


*/


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
error messages provide developers with a treasure trove of knowledge
and will tell everything about how to resolve

parse error messages and warning without fear

error is an object, 
consisting of name/type and a message




*/
