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
                Sıralama
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item  onClick={()=>dispatch(sortByReviews())}>Değerlendirme Sayısı</Dropdown.Item>
                <Dropdown.Item onClick={()=>dispatch(sortByRate())}>Ürün Puanı</Dropdown.Item>
                <Dropdown.Item onClick={()=>dispatch(sortByPriceInc())}>Fiyat Artan</Dropdown.Item>
                <Dropdown.Item onClick={()=>dispatch(sortByPriceDec())}>Fiyat Azalan</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </div>;
}

export default DropdownFilter;
