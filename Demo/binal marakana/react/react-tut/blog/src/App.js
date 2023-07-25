import logo from './logo.svg';
import './style.scss';
import Demo from './Demo';
import Classcom from './Classcom';
import State from './state';
import Student from './Props';
import Propsupate from './propsupdate';
import IfElse from './If_else';

import  Navbar from './component/navbar';
import Mainpage from './component/mainpage';

import React,{useState} from 'react'



function App() {
  var data = "binal marakana";
  function Apple()
  {
    return(<div>apple Component</div>)
  }
  function btnclick()
  {
    alert("fuction called");
  }

  return (
    <div className="App">
        {/* <h1>{data}</h1>
        <Demo />
        <Classcom/>
        <Apple/>
        <Composing/>
        <button onClick={btnclick}>click me</button>
        <State/>
        
        <Student name={"binal"} email="binal@gmail.com" other={{address:'delhi',mobile:"000"}}/>
        <Student name={"AAa"} email="A@gmail.com" other={{address:'surat',mobile:"000"}}/>
        <Student name={"bbb"} email="bB@gmail.com" other={{address:'rajkot',mobile:"000"}}/>
        
        <Propsupate /> */}

        {/* <Classcom/>
        <Getvalue/>
        <Hideshow/>
        <Basicform/> 
        <IfElse/>
        */}

        {/* < Navbar/>
        <Mainpage/>
        <button>click</button> */}

        <Fvalidation/>
    </div>
  );
}

//---------- Composing Components--------------

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
function Composing() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

//---------- Get input value---------------

function Getvalue(){
  const [name,setName] = useState(null)
  const [print,setPrint] = useState(false)

  function Getdata(val)
  {
    console.log(val.target.value)
    setName(val.target.value)
    setPrint(false)
  }
  return(
    <div>
        <h1>get input box value</h1>
        {/* <h3 class="name">{name}</h3> */}
        {
          print?
          <h3 class="name">{name}</h3>
          :null
        }
        <input type="text" onChange={Getdata}/>
        <button onClick={()=>setPrint(true)}>print data</button>
    </div>
  )
}

//---------- Hide Show ---------------

function Hideshow(){

  const [status,setPrint] = useState(true)
  return(
    <div>
        {
          status?
          <h3>Hello world</h3>
          :null
        }
        {/* <button onClick={()=>setPrint(false)}>hide</button>
        <button onClick={()=>setPrint(true)}>show</button> */}

        <button onClick={()=>setPrint(!status)}>Toggle</button>
    </div>
  )
}


//--------- basic form tutorial -----------
function Basicform()
{
  const[name,setName]=useState("");
  const[tnc,setTnc]=useState(false);
  const[interest,setInterest]=useState("");

  function getFromData(e)
  {
    console.log(name,tnc,interest);
    e.preventDefault()
  }
  return(
    <div>
        <h1 className='main_title'>Handle form in React</h1>
        <form onSubmit={getFromData}>
            <input type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)}/><br />
            <select onChange={(e)=>setInterest(e.target.value)}>
                <option>Select option</option>
                <option>Marvel</option>
                <option>Dc</option>
            </select> <br/><br/>
            <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span>Accept Terms and condition</span> <br/><br/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

//--------- basic form tutorial using class-----------
class Fvalidation extends React.Component{
  state = {
    username:"",
    errors:{
      username:"",
    }
  }
  handleUsernameChange = (e) =>
  {
    this.setState({username:e.target.value})
  }
  handleSubmit = (e)=>
  {
    e.preventDefault()
    console.log(this.state)
    if(!e.target.value)
    {
      this.setState({errors: {username:'username is required'}})
    }else{
      this.setState({errors: {username:' '}})

    }
  }
  render()
  {
    return(
      <div>
        <h1 className='main_title'>Handle form in React</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">username</label> <br></br>
            <input type="text" placeholder="enter name" onChange={this.handleUsernameChange} value={this.state.username}/><br />
            <p style={{color:'red'}}>{this.state.errors.username}</p>
            <button type="submit">Submit</button>
        </form>
    </div>
    )
  }
}

export default App;

