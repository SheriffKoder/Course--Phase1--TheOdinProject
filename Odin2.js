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


//moving the absolute position with js
//CSS #943 html #353 Js #527
/*
var left = 0;

  function frame() {
    var element = document.querySelector('.testdiv_1710');
    left += 2;
    element.style.left = left + 'px';
    if (left >= 300) {
      clearInterval(id);
    }
  }

  var id = setInterval(frame, 10);

  frame();


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
//*--------------------*//*

declared with var, are either function-scoped or global-scoped. 
> they skip the block they are in, IF here for example
and if in function variables skip the block they are in (function or loop)
 

function sayHi () {

  if (x=1) {
  var test = true; // use "var" instead of "let"
  }

  alert(test); // out of declaration block and outputs true , but if let will error not defined
              //outputs even if IF branch not execute

  for (var i = 0; i < 10; i++) {
  }
  alert(i); //outputs 10

  //var test; //can be defined here also


}

sayHi();
alert(test); //outputs undefined either ways


var can be defined multiple times but let does not get declared more than once
var user = ;
var user = ;

> var can be defined anywhere in the code and code will define it at code starts

> var can be defined in a non executing branch if, etc

* function go() { }(); // <-- can't call Function declaration

best use let and const

//*--------------------*//*
//*--------------------*//*

+ addition, - subtraction, * multiplication, ** exponation, / division, % modulus, ++ increment, -- decrement
operand +(operator) operand 

8 % 3 (returns 2, as three goes into 8 twice, leaving 2 left over).

cannot 3++;,  can var++;

x+= 2, -=, *=, /= 

let z = x ** 2;   // x power 2
let z = Math.pow(x,2);

number + number = number

JavaScript will try to convert strings to numbers in all numeric operations:
* , / , - but not +

so 
number + string = string  // "10"+ 20  = 1020
string + string = string // "10"+ "20" = 1020
solution
number + Number(string)



>calculation is left to right 

>precedence/flow of calculation
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




////////////////////////////
//// NaN ////////////////// not a number
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


// Infinity //
let myNumber = 2;
while (myNumber != Infinity) { // Execute until Infinity
    myNumber = myNumber * myNumber;
}

let x5 =  2 / 0; //Division by 0 = Infinity


////////////////////////////
////////////////////////////

////////////////////////////////////////////////////////
// Working with Strings methods //

const string_with_quotemark = 'this string\'ve got a quote mark';

//combine a variable/number, with a string using template_literals
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"

${ (score / highestScore) * 100 } can calculate

template_literals `` respects line breaks and puts them into output
const output = 
`I like the song.
I gave it a score of 90%.`;


//converting 
Number(myString)
toString(myString)

let length_count = text.length;
let text = "word of mouth";
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


text.padStart(3, "x"); // xxtext
text.padEnd(3, "x"); // xxtext

to use a number in string method, convert to string toString(number);

let text = "HELLO WORLD";
let char = text.charAt(0); //returns H
let char = text.charCodeAt(0); //returns the unicode UTF-16 i.e 72
text[0] // returns H


//convert a string into an array
let text = "a b c d e f";
const myArray = text.split(""); 
myArray is an array

text.split(" ")//split on , " ", | pipe, output before first occurrence of this condition

/*////////////////////////////////////////////////////////////////////*/
/*

javascript treats strings as objects when executing methods and properties 



strings written between "", '', ``, String("")
or by a string object // let string4 = new String('string'); //type object

a string can be treated as an array, string4[0];

console.log(`${a} is greater than ${b}`)


let s1 = "2 + 2";
eval(s1); //returns 4

let s1 = new String("2 + 2");
eval(s1); //returns 2+2
eval(s1.valueOf() )); //returns 4 // StrObj converted to primitive with valueOf() method.

console.log("hello,\
dude ");                   //continue string next line, nothing after the \ but enter

\ude04 //emoji smile


let s1 = null;
let s2 = String(s1);
console.log(s2); //"null" // not use toString();

let a = 1;
Boolean(a); // true

////////////////////////////////////////////////////////////////////

////////////////////////
//// null and undefined

alert( '' == false ); // true
alert( null === undefined ); // false  object/undefined
alert( null == undefined ); // true

when converted to a number, null becomes 0
alert( null > 0 );  // (1) false, because comparisons convert it to 0
alert( null == 0 ); // (2) false, because null in equality would be only equal to undefined
alert( null >= 0 ); // (3) true

when converted to a number, undefined becomes NaN
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

to avoid these tricks, use === with null/undefined, and do not use >= like comparisons

////////////////////////

When values of different types are compared, 
they get converted to numbers (with the exclusion of a strict equality check).





////////////////////////
//// switch

//if there is a match the relevant block will be executed if no matches then default
// break out of the switch block,  otherwise will continue to next block, can be skipped in last case
//default can be put in any line but watch for break;
//If multiple cases matches a case value, the first case is selected.
//switch cases use strict comparison


switch(expression) {

  case x:
        // code block
          break;

  case y:
  case z:                 //y and z use the same code
        // code block
        break;

  default:
        // code block

}

////////////////////////
////////////////////////

Logical Operators 
|| (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).



let date1010 = new Date().getDay(); //gets the day number of today 0-6
let day;


if ("0") {
  //true because only empty string is false and 0 is converted on comparison/equality
}


/*////////////////////////////////////////////////////////////////////*/
/*

//letter comparison according to their unicode value
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

*/


//// OR chain 
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

//let result3 = value2 && value2 && value1 && value3 & value5;
//if all true outputs the last true value 
//if all false otherwise the first value if all false 
//if true and false, returns the first false

//console.log(result3);


//alert( alert(1) && alert(2) );// exe alert(1) then undefined(value of alert1 as it returns nothing) then stops
//alert( null || 2 && 3 || 4 ); //returns 3

// a && b || c && d     // && executes before ||


////logical instead of if
//let x = 1;
//(x > 0) && alert( 'Greater than zero!' );

//let val = 5;
//let result615 = !val;    //returns !true = false
//console.log(result615); //false

//!!
/*
let result616 = (!!"string"); //true, can be used to check on strings
console.log(result616);


if (-1 || 0) alert( 'first' );  //-1 is true so it executes
if (null || -1 && 1) alert( 'third' ); //executes false||true


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*12/10

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


select_menu.addEventListener('change', () => select.value === 'black'
  ? update_function('black', 'white')
  : update_function('white', 'black')
);

/*theme switch *//*
function update_function (bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

calendar example 
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals





*/


var left = 0;

  function frame() {
    var element = document.querySelector('.testdiv_1710');
    left += 2;
    element.style.left = left + 'px';
    if (left >= 300) {
      clearInterval(id);
    }
  }

  var id = setInterval(frame, 100);

  frame();



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/

/*
regular expressions allows to check a string of characters like passwords


    ////wrapping//
    /   / forward slash at start and end
    / ninja / checks for matching the word ninja within a whole text

    ////flags//
    /g after final slash, all matches
    /i case insensitive

    ////including and excluding//
    [ng]inja ,  square brackets means match n or g in first position
    [^pe]inga ,   match everything instead p and e

    ////ranges
    [a-z] , range letters from a to z
    [a-zA-Z], lowercase range and  uppercase range

    ////repetitions
    [0-9][0-9][0-9] , three numbers from 0 to 9
    [0-9]+ , any repetitions
    [0-9]{3}, how many times would like it to repeat
    [0-9]{5,8} 5 to 8 characters long
    [0-9]{5,8} at least 5 characters long


    ////metacharacters
    \d match any digit character (like [0-9])
    \w match any word character like (a-z A-Z also 0-9 and _)
    \s match a whitespace character (spaces, tabs etc)
    \t match a tab character only

    / \d\s  / digit 0-9 then the second character a whitespace type



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
    
    only want the specified length/expression
    / ^[a-z]{3}$/ 3 letters not more
    the beginning ^ and the end $ of the field





*/