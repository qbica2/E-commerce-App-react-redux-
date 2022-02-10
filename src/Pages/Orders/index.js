import React from "react";
import Header from "../../components/Header";
import Catagories from "../../components/Catagories";
import Empty from "./Empty"

import style from "./orders.module.css";

import { useSelector } from "react-redux";

function Orders() {
  const orders = useSelector((state) => state.orders.items);

  return (
    <div className="App">
      <Header />
      <Catagories />
      
      <div className={style.header}>Orders</div>
      {orders.length===0 ? <Empty /> :      <div className={style.container}>
        {orders.map((item) => (
          <div className={style.order} key={item.id}>
            <div className={style.orderHeader} >
              <div>Order No: <span style={{fontWeight:"bold"}}>{item.id}</span></div>
              <div>{item.date}</div>
              <div className={style.total}>{item.total} $</div>
            </div>
            {item.products.map((product) => (
              <div className={style.products} key={product.id}>
                <div className={style.imageDiv}>
                    <img src={product.image} alt="adsa" className={style.image} />
                </div>
                <div className={style.title}>{product.title} <div>{product.price} $</div> </div>
                <div className={style.count}>x{product.count}</div> 
                <div className={style.productTotal}>{product.price*product.count} $</div>
              </div>
            ))}
          </div>
        ))}
      </div> }

    </div>
  );
}

export default Orders;
