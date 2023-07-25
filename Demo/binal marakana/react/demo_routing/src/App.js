import logo from './logo.svg';
import React, { Component } from "react";
import Routers from "./router";
import history from "./history";
import {BrowserRouter as Router} from "react-router-dom";


class App extends Component{
 render(){
  return (
    <Router>

      <Routers history={history} />
    </Router>
   
  );
 }
  
}

export default App;

