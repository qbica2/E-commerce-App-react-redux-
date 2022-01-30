import React from 'react'
import Signup from './components/Signup';
import Signin from './components/Signin';
import OverlayLeft from './components/OverlayLeft'
import OverlayRight from './components/OverlayRight'
import "./style.css";

function index() {
  return (
    <div className="loginpage">
    <div className="container" id="container">
      <Signup />
      <Signin />
      <div className="overlay-container">
        <div className="overlay">
          <OverlayLeft />
          <OverlayRight />
        </div>
      </div>
    </div>
    </div>
  )
}

export default index;
