import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRouted from "../App";
import Profile from "./profile";

const RouteSwitch = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<AppRouted />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default RouteSwitch;


// component={Profile}
//if both elements appear, this is because both share
//the / in path, so wrap them in a <Switch></Switch>
//and sort the <Route>s

//exact only if its / render this component

//want to view two components