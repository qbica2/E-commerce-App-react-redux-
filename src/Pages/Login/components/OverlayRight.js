import React from 'react'

function OverlayRight() {
    const showSignUp =(e)=> {
        
        document.getElementById('container').classList.add("right-panel-active")
    }
    return (
        <div className="overlay-panel overlay-right">
            <h1 className="h1">Hello, Friend!</h1>
            <p className="p">Enter your personal details and start journey with us</p>
            <button className="logbtn ghost" onClick={showSignUp}>Sign Up</button>
        </div>
    )
}

export default OverlayRight;