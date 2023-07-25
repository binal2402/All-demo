import React, { useState} from 'react'
import './App.css';
import About from './components/About';
import NavbarProps from './components/NavbarProps';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import ColorSwich from './components/ColorSwich';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  

  const ShowAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#05324c';
      ShowAlert("dark mode has been enabled","success");
      document.title = 'Dark mode'
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      ShowAlert("Light mode has been enabled","success");
      document.title = 'Light mode'

    }
  }
  return (
    <>
    <Router>

      {/* <NavbarProps title="TextUtils" aboutText="About Us"/> */}
      {/* <NavbarProps/> */}
      <NavbarProps title="TextUtils" modetype={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>

      <div className='container my-3'>
          <Routes>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/" element={<TextForm showAlert={ShowAlert} heading="Enter the text to analyze below" modetype={mode}/>}/>
          </Routes>
        <ColorSwich/>
      </div>
    </Router>

    </>
  );
}

export default App;
