import React, { useState } from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import { Link } from "react-router-dom"

import { useSelector,useDispatch } from "react-redux"
import {logout} from "../redux/UserSlice"

function User() {
    const [infoClicked, setInfoClicked] = useState(false) 
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    const email = useSelector(state => state.user.email)

    const dispatch=useDispatch()

    const handleLogOut = () =>{
        if(window.confirm("are you sure")){
            dispatch(logout())
        }
    }

    if (isLoggedIn) {
        return (
            <div className="user-container">
                {
                    infoClicked ?
                        <div className="info-clicked">
                            <div className="options">
                                <Link to="/orders">Orders</Link>
                                <Link to="/">Wallet</Link>
                                <Link to="/" onClick={()=>handleLogOut()}>Log Out</Link>
                            </div>
                            <div>
                                <ArrowDropUpIcon onClick={() => setInfoClicked(false)} />
                            </div>
                        </div>
                        :
                        <div className="user-bar">
                            <PersonOutlineIcon />
                            <div className="user-inside-bar">
                                <div className="hesabım">Account</div>
                                <div className="username">{email}</div>
                            </div>
                            <KeyboardArrowDownIcon onClick={() => setInfoClicked(true)} />
                        </div>
                }
            </div>
        );
    }

    else {
        return(
            <div className="unlogged-user-container">
                <PersonOutlineIcon />
                <Link to="/login" className="a">Login</Link>
                <Link to="/login" className="a">Sign Up</Link>

            </div>
        )
    }


}

export default User;
