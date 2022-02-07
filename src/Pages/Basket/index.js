import React from "react";
import Header from "../../components/Header";
import Catagories from "../../components/Catagories";

import "./style.css"

import {useSelector,useDispatch} from "react-redux";

function Basket() {

    const dispatch = useDispatch();
    const basket = useSelector(state => state.basket.items);

  return (
    <div className="App">
      <Header />
      <Catagories />
      <div className="basket-big-container">
        <div className="basket-items">
            {
                basket.map(item => (
                    <div className="basket-item">
                        <div className="basket-item-img">
                            <img src={item.image} alt="" className="basket-img"/>
                        </div>
                        <div className="basket-item-details">
                        <div>{item.title}</div>
                        <div >{item.price}$ </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="basket-right">

        </div>
      </div>
    </div>
  );
}

export default Basket;
