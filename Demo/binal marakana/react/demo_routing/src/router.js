import React, { Component } from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./pages/not-found";
class Routers extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      };
    }
    render() {
      return (
        <>
      
          <Switch>
                <Route path="*" component={NotFound} />
          </Switch>
       
            
        </>
      );
    }
  }
  export default Routers;
