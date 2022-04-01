import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginPage from "./Components/LoginPage";
import SignUpForm from "./Components/SignUpForm";
import LandingPage from "./Components/LandingPage";
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signUp" component={SignUpForm} />
  
      </Switch>
    </Router>
   
  );
}

export default App;
