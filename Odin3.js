
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*

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
POST - create a new resource
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


Backend Frameworks
Ruby (Ruby on Rails)
Python (Django, Flask, Pylons)
PHP (Laravel)
Java (Spring)
Scala (Play)

Node.js, a JavaScript runtime, is also used for backend programming.





*/