import React, { useState }from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons' 
import {useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"
import {login} from "../../../redux/UserSlice"

function Signin() {
    
    library.add(faFacebookF,faGooglePlusG,faLinkedinIn);

    const [input,setInput] = useState("")
    const [pass,setPass] = useState("")

    const dispatch = useDispatch()

    const mail = useSelector(state => state.user.email)
    const password = useSelector(state=> state.user.password)

    let navigate= useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(input===""){
            alert("Please enter valid email")
            return false
        }
        if(pass===""){
            alert("Please enter valid password")
            return false
        }
        if(input!==mail||password!==pass){
            alert("wrong email or password")
            return false
        }
        dispatch(login())
        navigate("/")
    }
    


    return (
        <div className="form-container sign-in-container">
            <form action="#" onSubmit={(e)=>handleSubmit(e)}>
                <h1 className="h1">Sign in</h1>
                <div className="social-container">
                    <a href="#" className="social"><i><FontAwesomeIcon icon={['fab','facebook-f']} /></i></a>
                    <a href="#" className="social"> <i><FontAwesomeIcon icon={['fab','google-plus-g']} /></i></a>
                    <a href="#" className="social"> <i><FontAwesomeIcon icon={['fab','linkedin-in']}/></i></a>
                </div>
                <span className="span">or use your account</span>
                <input type="email" placeholder="Email" onChange={(e)=>setInput(e.target.value)} value={input} />
                <input type="password" placeholder="Password" onChange={(e)=>setPass(e.target.value)} value={pass} />
                <a href="#" className="forgot">Forgot your password?</a>
                <button className="logbtn" type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default Signin;