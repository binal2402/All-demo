import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 5;
  apiKey=process.env.REACT_APP_NEWS_API;

  state={
    progress:0
  }
  setProgress =(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <Router>
      <div>
          <Navbar/>
          {/* <News apiKey={this.key} setProgress = {this.setProgress} pageSize={this.pageSize} country="in" category="sport"/> */}
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route path="/business" element={<News ApiKey={this.apiKey} setProgress = {this.setProgress} pageSize={this.pageSize} key="business" country="in" category="business"/>}></Route>
            <Route path="/entertainment" element={<News ApiKey={this.apiKey} setProgress = {this.setProgress} pageSize={this.pageSize} key="entertainment" country="in" category="entertainment"/>}></Route>
            <Route path="/health" element={<News ApiKey={this.apiKey} setProgress = {this.setProgress} pageSize={this.pageSize} key="health" country="in" category="health"/>}></Route>
            <Route path="/science" element={<News ApiKey={this.apiKey} setProgress = {this.setProgress} pageSize={this.pageSize} key="science" country="in" category="science"/>}></Route>
            <Route path="/sports" element={<News ApiKey={this.apiKey} setProgress = {this.setProgress} pageSize={this.pageSize} key="sports" country="in" category="sports"/>}></Route>
            <Route path="/technology" element={<News ApiKey={this.apiKey} setProgress = {this.setProgress} pageSize={this.pageSize}  key="technology" country="in" category="technology"/>}></Route>
            <Route path="/general" element={<News ApiKey={this.apiKey} setProgress = {this.setProgress} pageSize={this.pageSize} country="in"  key="general" bcategory="general"/>}></Route>
            <Route path="/" element={<News ApiKey={this.apiKey} setProgress = {this.setProgress} pageSize={this.pageSize} country="in"  key="general" bcategory="general"/>}></Route>
          </Routes>
      </div>

      </Router>
    )
  }
}


