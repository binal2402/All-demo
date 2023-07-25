import logo from './logo.svg';
import './App.css';
import User from './FuntionPass';
import Member from './member';

import React from 'react';
import Render from './render';

import WillUnmounts from './WillUnmount';


function App() {
  function getData()
  {
    alert("hello")
  }
  const [name,setName]=React.useState("binal")
  return (
    <div className="App">
        {/* <User data={getData}/>
        <User data={getData}/>
        <User data={getData}/>
        <User data={getData}/>
        <div>
            <Member data={getData}/>
        </div> */}

        {/* <Render/> */}
        <Remove/>
    </div>
  );
}

class Remove extends React.Component{
  constructor()
  {
      console.log("constructor")

      super();
      this.state={
          show:true
      }
  }
  render()
  {
    return(
      <div className="app">
        {
          this.state.show ? <WillUnmounts/>:<h1>child coponents</h1>
        }
           <button onClick={()=>this.setState({show:!this.state.show})}>toggle</button>
      </div>
     
    )
  }
}

export default App;

