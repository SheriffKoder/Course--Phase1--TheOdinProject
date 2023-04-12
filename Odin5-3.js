

/*////////////////////////////////////////////////////////////////////*/
/*////////////////////////////////////////////////////////////////////*/
/*
Once your application has multiple pages, 
you need to set up a reliable routing system. 

to handle the component or page that should be rendered 
when navigating to a certain route.

For this we are going to use a package called react-router-dom.

Client-Side Routing
internal handling of routes inside the js file that is
rendered to the client (front-end)

Client-side routing helps in building single-page 
applications (SPAs) without refreshing as the user navigates. 

For example when a user clicks a navbar element, 
the URL changes and the view of the page is modified accordingly, 
within the client.

React Router is the standard routing library for React applications.
we can specify which component can be rendered based on the route. 
From version 4, react router uses dynamic routes (routing that takes place as your app is rendering).


How To Use React Router

create a react app
file called src/Profile.js

# npm i react-router-dom
will install dependencies 

create new file called RouteSwitch.js
file handles our routes



//RouteSwitch.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";

const RouteSwitch = () => {
  return (

    //BrowserRouter: Is a router, which uses the history API 
    //(pushState, replaceState and the popstate event) to keep 
    //your UI in sync with the URL. For completion we have to 
    //mention that there are other options than BrowserRouter, 
    //but for your current projects you can assume that 
    //BrowserRouter is at the root of all your projects.

    <BrowserRouter>

    //Renders the first child Route that matches the location.
    //Routes component is going to look through all your Routes 
    //and checks their path.
    //The first Route, whose path matches the url exactly will be rendered
    //all others will be ignored
    //
      <Routes>

      //Route: Those are our routes with a path, 
      //which equals the url path, and a component that 
      //should be rendered when we navigate to this url.

        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;

//when you go to link path /profile (of /page, /about)
the Profile element will show and App not

importing React, Profile/App
and few routing {BrowserRouter, Routes, Route}



////in index.js
import RouteSwitch from "./components/routeSwitch.js"; //

//allow routeSwitch.js to be run before App.js
const root = ReactDOM.createRoot(document.getElementById('rootDiv8'));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);


//learn more about routing
//look into the history of match object



In traditional websites, 
the browser requests a document from a web server, 
downloads and evaluates CSS and JavaScript assets, 
and renders the HTML sent from the server.

When the user clicks a link, it starts the process 
all over again for a new page.

Client side routing allows your app to update the URL 
from a link click without making another request for 
another document from the server. 
Instead, your app can immediately render some new UI 
and make data requests with fetch to update the page 
with new information.

This enables faster user experiences because the browser 
doesn't need to request an entirely new document or re-evaluate 
CSS and JavaScript assets for the next page. 
It also enables more dynamic user experiences with things 
like animation.

Client side routing is enabled by creating a Router 
and linking/submitting to pages with Link and <Form>:


Nested Routes
is the general idea of coupling segments of the URL
to component hierarchy and data
inspired from the Ember team which realized that in 
nearly every case, segments of the URL determine:
    The layouts to render on the page
    The data dependencies of those layouts

React Router embraces this convention with APIs 
for creating nested layouts coupled to URL segments and data.



//Dynamic Segments
//Ranked Route Matching
When matching URLs to routes, React Router will rank the 
routes according to the number of segments, static segments, 
dynamic segments, splats, etc. and pick the most specific match.
With ranked routes, you don't have to worry about route ordering.
https://reactrouter.com/en/main/start/overview

you rout the specific component not refresh the page or fetch the api






*/