import React from 'react'

function OverlayLeft() {

    const closeSignUp=(e)=>{
        document.getElementById('container').classList.remove("right-panel-active")
    }

    return (
            <div className="overlay-panel overlay-left">
                <h1 className="h1">Welcome Back!</h1>
                <p className="p">To keep connected with us please login with your personal info</p>
                <button className="logbtn ghost" onClick={closeSignUp}>Sign In</button>
            </div>
    )
}

export default OverlayLeft;