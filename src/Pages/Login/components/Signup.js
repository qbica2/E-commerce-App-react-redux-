import React from 'react'
import { useFormik } from 'formik';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF,faGooglePlusG,faLinkedinIn } from '@fortawesome/free-brands-svg-icons' 
import Validations from "./Validations"

import {useDispatch} from "react-redux"
import {saveMail,savePassword} from "../../../redux/UserSlice"

function Signup() {

    library.add(faFacebookF,faGooglePlusG,faLinkedinIn);

    const dispatch = useDispatch()

    const closeSignUp=()=>{
        document.getElementById('container').classList.remove("right-panel-active")
    }


    const {handleSubmit,handleChange,handleBlur,values,errors,touched} = useFormik({
        initialValues: {
            email: '',
            password: "",
            passwordConfirm: "",
            
        },
        onSubmit: values => {
            dispatch(saveMail(values.email));
            dispatch(savePassword(values.password));
            closeSignUp()
            
        },
        validationSchema: Validations
    });

    return (
        <div className="form-container sign-up-container">
            <form onSubmit={handleSubmit}>
                <h1 className="h1">Create Account </h1>
                <div className="social-container">
                    
                    <a href="#" className="social"><i><FontAwesomeIcon icon={['fab','facebook-f']} /></i></a>
                    <a href="#" className="social"><i><FontAwesomeIcon icon={['fab','google-plus-g']} /></i></a>
                    <a href="#" className="social"><i><FontAwesomeIcon icon={['fab','linkedin-in']}/></i></a>
                </div>

                <span className="span">or use your email for registration</span>

                
                <input 
                type="email" 
                name="email" 
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                />
                {errors.email && touched.email && (<div className="errors">{errors.email}</div>)}
                
                <input 
                placeholder="Password"
                type="password" 
                name="password" 
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                />

                {errors.password && touched.password && (<div className="errors">{errors.password}</div>)}
                
                <input 
                placeholder="Confirm Password"
                type="password" 
                name="passwordConfirm" 
                value={values.passwordConfirm}
                onChange={handleChange}
                onBlur={handleBlur}
                />

                {errors.passwordConfirm && touched.passwordConfirm && (<div className="errors">{errors.passwordConfirm}</div>)}


                <button className="logbtn" type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;