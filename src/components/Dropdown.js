import React from 'react';
import { Dropdown } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch } from "react-redux"

import {sortByReviews,sortByRate,sortByPriceInc,sortByPriceDec} from "../redux/ProductsSlice"

function DropdownFilter() {
    const dispatch= useDispatch()
    return <div className="dropdown-container">
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sort By 
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item  onClick={()=>dispatch(sortByReviews())}>Total Reviews</Dropdown.Item>
                <Dropdown.Item onClick={()=>dispatch(sortByRate())}>Avg. Customer Review</Dropdown.Item>
                <Dropdown.Item onClick={()=>dispatch(sortByPriceInc())}>Price: Low to High</Dropdown.Item>
                <Dropdown.Item onClick={()=>dispatch(sortByPriceDec())}>Price: High to Low</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>;
}

export default DropdownFilter;
