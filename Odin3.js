
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

index
= backend
= frameworks
= http requests
= scroll events
= theme toggle (ex)
= show range input slider value (ex)
= toggle billing (ex)
= check validity (form) (ex)
= show hide div below input (ex)
= submit a form without leaving a page (ex)
= add invalid style on submit (ex)


understanding the backend
the browser cares about whether it has been sent a 
properly formatted html, css, and javascript files

HTTP request and send out some HTML

if running on cloud, you may be restricted to those languages
that your cloud provided has installed on their platform

and avoid having the servers "borrowing" from can't understand your code

languages like: PHP, C#, Ruby, Python, Java
all those languages perform the same functions just using different syntax

front-end languages live in the browser itself, so not need installation
back-end languages must be installed to run

we also installed nodejs previously


////Frontend////
JS is used to communicate with the back-end through API's
for more advanced functionality

Angular or React are used front end to make easier app building
to focus more on the unique aspects of the web app

also these skills are needed for front-end:
Communicating with APIs (Application Programming Interfaces)
Front-end web frameworks like Angular.js or React.js
Cross-browser optimization
Knowledge of user experience (UX) design for websites or web apps



////Backend////
application logic and data management

Server: computer receives requests
App: application running on the server that 
      listens for requests
      retrieves information from the database
      sends a response
Database: used to organize and persist data



working with applications, databases, servers 
to handle the application logic and data management functionality of a web app

//Applications
these technologies interact with the front end using APIs
APIs developed using the back end languages 
by backend developers for front end developers to integrate with them

logic about how to respond to requests based on the http verb
and the uniform resource identifier URI
pairing these is called a route/routing
using frameworks like Express or Ruby on Rails

a web application needs a caching system to reduce the load
on the database and to handle large amounts of traffic
Memcaches and Redis are the most widespread cashing system





//Databases
back-end developers interact with database management systems
like PostgreSQL, SQL Server or MySQL
Structured Query Language to read, write, modify and delete data
at least know the basics even if using NoSQL database like MongoDB
sorting all the date for the application

relational and non-relational(sub divided into several categories)



//Servers
Web Applications and databases are typically deployed on a server
such as Apache or NGINX
providing computing resources, data storage capabilities for running the app
needs basic linux os knowledge to maintain the servers
computer listens for incoming requests

status codes indicate what happened when the server received the request
might serve up an HTML file, send data as JSON
or send back only an HTTP status code like 404
indicating what happened when the server received the request




//frameworks
Django, flask offer basic capabilities for accepting http requests
building web page templates and more


so the back-end developer skills are:
. backend language like python, java, php, js
. building and maintaining APIs
. backend frameworks like flask or django
. SQL
. knowledge of database management systems
. common algorithms and data structures
. basic server management


it’s important to consider which aspect of web development 
is a better fit for your talents, interest and passions
as the numbers differ but not that much.

backend learning often starts with learning front end as well
to better collaborate

backend skills can be me with js for front-end developers
if it does not affect the interface

////Full Stack Development
web technology stacks include
MEAN: MongoDB, Express, angular and Node
LAMP: Linux, Apache, MySQL and PHP/Python
JAMstack: javaScript, APIs and Markup


*/
/*////////////////////////////////////////////////////////////////////*/
/*

Modern websites are dynamic
content generated on the fly, 
one of more scripts that run on the web server each time the page is accessed
scripts generate the content of the page
sent to the user's web browser

-processing incoming webpage request
-running a script to generate HTML
-accessing data from a database using SQL queries
-storing or updating records in a database
-encrypting and decrypting data
-handling file uploads and downloads
-processing user input via javascript


code runs on the server
receives requests from the clients
contains the logic to send to the appropriate data back to the client

clients: 
browsers that make requests for the HTML and js codes to use
mobile application, application running on another server, web enabled smart appliance


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

API, collection of clearly defined methods of communication
between different software components

defined by the types of requests that it can handle
which is determined by the routes that it defines
and the types of responses that the client can expect 
to receive after hitting those routes


major websites with users all over the world 
will have many different servers, 
and direct users to the server closest to them

1) url of product
2) server redirection
3) request received
4) event listeners to HTTP verb GET of this product are triggered
code runs on server between request and response, middleware

5) server code makes a database query for info about this product
6) server receives the data needed and ready to send
the response header will contain an http status code 200 
to indicate request success

7) response travels across the internet to the client's computer
9) client's computer receives the response and uses it to render


/*////////////////////////////////////////////////////////////////////*/
/*
frameworks

code libraries
preventing code repetition, 
gives organization and order to files using hierarchy
standardize how developers write their code

thus helping others understand out code
focus on the features rather than the configurations

typically open source

frontend
backend
CSS

choosing a ui framework
comes to preference in appearance, goals of the site

frontend frameworks
in most cases written in javascript
functionality, interactivity of your website

backend
different languages





*/


/*////////////////////////////////////////////////////////////////////*/
/* 12/12

Http
TCP 
for transfer of resources to happen
manage many types of internet connections
protocol both devices follow to communicate

when a url is entered from client
you are asking to open a TCP channel to the server that responds to that url
HTTP GET sent
server then responds and closes the TCP channel


connection
- after typing a url
- browser extract the http part of link indicating the network protocol to use
- then takes the domain name from the url
- asks the internet DNS to return an ip address

- using the http protocol specified, clients knows the destination's ip address
- it opens a connection to the server at that address
- 

Request:
GET / HTTP/1.1
Host: www.codecademy.com

v1.1 uses one connection more than once
v1.0 separate connection to the server every resource

Response:
HTTP/1.1 200 OK         < server understands the protocol
Content-Type: text/html < type of content will be sent, MIME Types


HTTP/1.1 404 NOT FOUND  < understands but status code not found

HTTPS, http secure, supported by many servers, allows encrypt data
that send and receive



GET - retrieve a specific/collection resources b id
POST - create a new resource/update resource on the server
PUT - update a specific resource by id
DELETE - remove a specific resource by id


GET /articles/23
Accept: text/html, application/xhtml


for each HTTP verb there are expected status codes 
a server should return upon success
GET - return 200(OK)




*/

/*////////////////////////////////////////////////////////////////////*/
/*


client and sever codes are separate
but each side knows what format of messages to send to the other

REST interface, 
different clients hit the same REST endpoints
same actions, receive the same responses

through the use of resources rather than commands
because of that REST do not rel on the implementation of interfaces






*/



/*////////////////////////////////////////////////////////////////////*/
/*

JavaScript libraries (such as jQuery, React.js, and Zepto.js) 
and frameworks (such as Angular, Vue, Backbone, and Ember) 
for faster and easier web development.

automation frameworks
jest, enzyme, chai



Backend Frameworks
Ruby (Ruby on Rails)
Python (Django, Flask, Pylons)
PHP (Laravel)
Java (Spring)
Scala (Play)

Node.js, a JavaScript runtime, is also used for backend programming.



to develop a web application
select: sever, database, programming language, framework
and front-end tools

realize what you are planning to build in order to puck the appropriate tools
tool set provides unique advantages for you web application

complexity, loads, latency
Integration with third-party solutions
Developer availability
test easiness
Developer salaries depending on technologies they work with
Security apps
Horizontal scalability > number of users growth
Vertical scalability > new components adding without damaging its performance


facilitate the development process and significantly reduce TTM
Time to market


/*////////////////////////////////////////////////////////////////////*/
/*

server side web frameworks, web application frameworks

make it easier to write, maintain, scale web applications
tools and libraries that simplify common web development tasks

routing urls to appropriate handles
interacting with databases
supporting sessions and user authorization
formatting output e.g html, json, xml
improving security against web attacks

frameworks > code > to work with https requests and responses

interacting with easier hight level code
rather than lower level networking primitives

a framework provide simple mechanisms to map url patterns to specific handler functions
as different resources accessible through distinct urls would be hard to maintain
because you can change the url used to deliver a particular feature 
without having to change the underlying code

django can pass info encoded in the structure of the url by
defining capture patterns in the url mapper





abstraction layer is referred as an ORM
object relational mapper
database layer that abstracts database read, write, query and delete operations


can replace the underlying database without necessarily needing
to change the code that uses it

basic validation of data can be implemented within the framework
easier and safer to check that data is correct type of database field








to consider when choosing a web framework
effort to learn
productivity  (purpose, opinionated, tools given, encouraging dev practices)
performance
caching support for high requests
scalability
web security


Django - python
rapid and clean development
tools included
fast, secure, very scalable
easy to read and maintain
good for blogs and news articles

Flask - python
flask is good for embedded items

Express - nodejs/javascript
fast, unopinionated, flexible
browserless env for running js


Deno - javascript
built ontop of chrome v8 and rust
support for webAssembly


Ruby on Rails
similar design and philosophy to django
routing urls, accessing database, generating html, formatting data as JSON or XML
do not repeat yourself patten
mvc 

Laravel - PHP
ASP.NET
Mojolicious - perl
Spring boot -java




LAMP (Linux, Apache, MySQL, PHP/Perl/Python) 
is a package that contains a web server (Apache). 

Frameworks are libraries help you develop faster



learning how to program is much more than just learning a language
its about learning 
how to research, 
solve difficult problems
building an engineering mindset
working on complex problems and code bases
communicating effectively with other developers
much more


think about the task at hand as a programming problem, 
not a language problem.





*/





/*////////////////////////////////////////////////////////////////////*/
/*20/12

// Scroll each paragraph so the start is also hidden
const paras = document.querySelectorAll("p");

for (const para of paras) {
  para.scroll(100, 0);
}

/ * scrolling with overflow
The JavaScript Element.scrollTop/scrollLeft property may be used 
to scroll an HTML element even when overflow is set to hidden.
property gets or sets the number of pixels that an element's 
content is scrolled vertically.


div.addEventListener("scroll", (event) => {
  console.log(div.scrollTop);
});

function isOverflowing(element) {
      return element.scrollWidth > element.offsetWidth;
}


element.scrollTo({
  top: 100,
  left: 100,
  behavior: 'smooth'/'instant'
});


*/

/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
// get variable from inline style
//element.style.getPropertyValue("--my-var");

// get variable from wherever
//getComputedStyle(element).getPropertyValue("--my-var");

// set variable on inline style
//element.style.setProperty("--my-var", jsVar + 4);


/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
// var theme toggle
function setTheme() {
      const root = document.documentElement;
      const newTheme = root.className === 'dark' ? 'light' : 'dark';
      root.className = newTheme;
      
      document.querySelector('.theme-name').textContent = newTheme;
    }
    
    document.querySelector('.theme-toggle').addEventListener('click', setTheme)



/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
//show range input slider value
const price = document.querySelector("#price");
const output = document.querySelector(".price-output");

output.textContent = price.value;

price.addEventListener("input", () => {
  output.textContent = price.value;
})


//based on the check button disable or enable below input node list
//useful when user do not want to add these information
// Wait for the page to finish loading
document.addEventListener(
      "DOMContentLoaded",
      () => {
        // Attach `change` event listener to checkbox
        document
          .getElementById("billing-checkbox")
          .addEventListener("change", toggleBilling);
      },
      false
    );
    
    function toggleBilling() {
      // Select the billing text fields
      const billingItems = document.querySelectorAll('#billing input[type="text"]');
      // Select the billing text labels
      const billingLabels = document.querySelectorAll(".billing-label");
    
      // Toggle the billing text fields and labels
      for (let i = 0; i < billingItems.length; i++) {
        billingItems[i].disabled = !billingItems[i].disabled;
    
        if (
          billingLabels[i].getAttribute("class") === "billing-label disabled-label"
        ) {
          billingLabels[i].setAttribute("class", "billing-label");
        } else {
          billingLabels[i].setAttribute("class", "billing-label disabled-label");
        }
      }
    }
    

/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
client-side validation

Built-in form validation 
- uses HTML normal form validation (type or required or pattern)
- not as customizable as JavaScript validation.
- if user tries to send data, the browser will block the form and display an error message

when "Required" the input will be invalid till suitable input is put

regex:
a
abc
ab?c  //a, optional b, c
ab*c  //a, 0->unlimited b, c
a|b   //a or b not both
[Bb]anana|[Cc]herry

HTML Validation:
the type
required attribute
pattern
maxlength/minlength
max/min on numbers


/*////////////////////////////////////////////////////////////////////*/
/* JS validation and customizing messages

for button,fieldset,input,output,select,textarea

.validationMessage //returns message describing validation concerns
.validity  //returns a validityState //has many states to check online*
.valid //returns true if element meets all its validation
.valueMissing  //true if required attribute but no value
.willValidate //true if element will be validated when form is submitted

.checkValidity(); //checks whether any inputs are subject to constraint validation.
.reportValidity();  //reports invalid fields using events useful with preventDefault() in an onSubmit event handler
.setCustomValidity(message);  //element is invalid if set this message and the specified error is displayed
.myform.noValidate = true; //disable default validation and error messages and validate function on submit event



//ex//check validity
const email = document.getElementById("mail");

email.addEventListener("input", (event) => {  //blur event, live validity
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});
//end//

//define custom validation message
const nameInput = document.querySelector('[name="name"]');

nameInput.addEventListener('invalid', () => {
    nameInput.setCustomValidity('Please enter your name.');
 });


//
    const message = event.target.validationMessage;






/////////////////////////////////
retrieve the value of a form control in js
use the value property or getAttribute("value")
one for current value and the other for initial value


if (event.target.checked) {
    // show additional below div field
            additionalField.hidden = true;

} else {
   // hide additional below div field
           additionalField.hidden = false;

}


/////////////////////////////////
submit a form without leaving a page
 onsubmit event, then use event.preventDefault() 
 to prevent the default behavior, and send the FormData using the Fetch API.

 const formElement = document.querySelector('form');

if (formElement) {
    formElement.addEventListener('submit', (event) => {
        const formData = new FormData();

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        
        event.preventDefault();
    })
}



/////////////////////////////////
Clicking on Show Password, changes the type attribute of the 
password field from type="password" to type="text", and the <button> 
text changes to 'Hide Password'.

/////////////////////////////////
// validate form on submission
//and apply an invalid class to its parent element
function validateForm(e) {
  const form = e.target;
  if (form.checkValidity()) {
    // form is valid - make further checks
  }
  else {
    // form is invalid - cancel submit
    e.preventDefault();
    // apply invalid class
    Array.from(form.elements).forEach(i => {
      if (i.checkValidity()) {
        // field is valid - remove class
        i.parentElement.classList.remove('invalid');
      }
      else {
        // field is invalid - add class
        i.parentElement.classList.add('invalid');
      }
    });
  }
};


*/


