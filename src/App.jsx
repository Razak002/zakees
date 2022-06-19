import React from 'react'
import'./App.css'
import Typed from 'react-typed'
import mcii from  './Assets/mcii.png'
import { Link } from 'react-router-dom'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <logo><h1>provee</h1></logo>
      
          <ul id='list'>
            <li>
              <Link to='/'>home</Link>
              </li>
            <li>
              <Link to='/contact'>contact</Link>
              </li>
            <li>
              <Link to='/about'>about</Link>
              </li>
          </ul>
          
        </div>
      </div>
      <div className="main">
        <h1>web development & web design</h1>
        <p><i>I design stunning websites for your business</i></p>
        <p><i>if u're looking for a professional website then you are welcome</i></p>
      </div>
      <div className="teach">
      <h2>!!!ALSO  DO NOT FORGET I ALSO RUN </h2>
      <div className="main">
      <Typed
                 className='typed-text'
                 strings={['Web Design','Web Development','facebook Ads','Google Ads']}
                 typeSpeed={40}
                 backSpeed={60}
                 loop
                 />
                 </div>
                 </div>
              
      <div className="img">
      <img src={mcii} alt="img" />
      </div>
    </>
  )
}

export default App