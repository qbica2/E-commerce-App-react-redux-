import React from 'react';
import { Link } from "react-router-dom"

import { changeFilterType,checkedFourStar, checkedThreeStar, checkedTwoStar, checkedOneStar} from "../redux/ProductsSlice"
import { useDispatch  } from "react-redux"

function Catagories() {
    const dispatch = useDispatch()

    const allClear = ()=>{
        dispatch(changeFilterType("All"))
        dispatch(checkedFourStar(false))
        dispatch(checkedThreeStar(false))
        dispatch(checkedTwoStar(false))
        dispatch(checkedOneStar(false))
    }
    return (
        <div className="navbar">
            <div className="dropdown">
                <Link to="/electronics" className="category" onClick={()=>allClear()}>Electronics</Link>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div className="dropdown">
                <Link to="/women" className="category" onClick={()=>allClear()}>Women's Fashion</Link>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div className="dropdown">
                <Link to="/man" className="category" onClick={()=>allClear()}>Men's Fashion </Link>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div className="dropdown">
                <Link to="/sports" className="category" onClick={()=>allClear()}>Sports</Link>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div className="dropdown">
                <Link to="/games" className="category" onClick={()=>allClear()}>Toys and Games</Link>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <div className="dropdown">
                <Link to="/jewelery" className="category" onClick={()=>allClear()}>Jewelery</Link>
                <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
        </div>
    )
}

export default Catagories;
