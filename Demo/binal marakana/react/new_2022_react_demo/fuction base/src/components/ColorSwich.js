import React from 'react'
import { useState } from 'react'

export default function Colorswich() {
    const[colortheme , setColorTheme] = useState('theme-white')
    const handleClick = (theme) =>{
        console.log("=========", theme);
        setColorTheme(theme)
    }

  return (
    <div className='App'>
        <div className='theme-options'>
            <div id='theme-white' className='sub_color' onClick={() => handleClick('theme-white')}></div>
            <div id='theme-blue'  className='sub_color'  onClick={() => handleClick('theme-blue')}></div>
            <div id='theme-orange'  className='sub_color'  onClick={() => handleClick('theme-orange')}></div>
            <div id='theme-green'  className='sub_color'  onClick={() => handleClick('theme-green')}></div>
        </div>
        <div className={`content-box ${colortheme}`}> 
            <h3>Multiple Themes</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda laboriosam non quo, odio nulla dolores ex magni. Ad qui eaque omnis impedit aliquid, a nemo nulla vero sint fugiat natus. </p>
        </div>
  </div>
  )
}
