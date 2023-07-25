import logo from './logo.svg';
import './App.css';

import React from 'react';
import {Link,Route,Switch} from 'react-router-dom'
import Nav from './Nav';
import Home from './home';
import About from './about';
import Error from './404';
import UserData from './userdata';

function App() {
 
  return (
    <div className="App">

        {/* <Nav/> */}
        {/* <Switch>
          <Route path="/about"> <About/></Route>
          <Route path="/" exact={true}><Home /></Route>
          <Route path="*"><Error /></Route>
        </Switch> */}

        <UserData/>
    </div>
    
  );
}


export default App;

