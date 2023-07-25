import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

const App  = () =>{
  const[Progress,setProgress] = useState(0)
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;

    return (
      <Router>
      <div>
          <Navbar/>
          {/* <News apiKey={this.key} setProgress = {setProgress} pageSize={pageSize} country="in" category="sport"/> */}
          <LoadingBar
            color='#f11946'
            progress={Progress}
          />
          <Routes>
            <Route path="/business" element={<News ApiKey={apiKey} setProgress = {setProgress} pageSize={pageSize} key="business" country="in" category="business"/>}></Route>
            <Route path="/entertainment" element={<News ApiKey={apiKey} setProgress = {setProgress} pageSize={pageSize} key="entertainment" country="in" category="entertainment"/>}></Route>
            <Route path="/health" element={<News ApiKey={apiKey} setProgress = {setProgress} pageSize={pageSize} key="health" country="in" category="health"/>}></Route>
            <Route path="/science" element={<News ApiKey={apiKey} setProgress = {setProgress} pageSize={pageSize} key="science" country="in" category="science"/>}></Route>
            <Route path="/sports" element={<News ApiKey={apiKey} setProgress = {setProgress} pageSize={pageSize} key="sports" country="in" category="sports"/>}></Route>
            <Route path="/technology" element={<News ApiKey={apiKey} setProgress = {setProgress} pageSize={pageSize}  key="technology" country="in" category="technology"/>}></Route>
            <Route path="/general" element={<News ApiKey={apiKey} setProgress = {setProgress} pageSize={pageSize} country="in"  key="general" category="general"/>}></Route>
            <Route path="/" element={<News ApiKey={apiKey} setProgress = {setProgress} pageSize={pageSize} country="in"  key="general" category="general"/>}></Route>
          </Routes>
      </div>

      </Router>
    )
}

export default App

