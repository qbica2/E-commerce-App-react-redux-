import React,{ useState, useEffect} from "react";
import Header from "../../components/Header";
import Catagories from "../../components/Catagories";
import Empty from "./Empty";

import "./style.css";

import {useNavigate} from "react-router-dom"

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { useSelector, useDispatch } from "react-redux";
import {changeCount} from "../../redux/BasketSlice"
import {addtoOrders} from "../../redux/OrdersSlice"

function Basket() {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.items);
  const isLoggedIn= useSelector(state => state.user.isLoggedIn);

  const [total,setTotal] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {

      const oneItemPrice =basket.map(item=> item.price*item.count)
      setTotal(oneItemPrice.reduce((a, b) => a + (b || 0), 0).toFixed(2));
}, [basket])

  const handleIncrease = (id) => {
    
   const newItem= basket.map(item => {
      if(item.id === id){
        return{
          ...item,
          count: item.count + 1
        }
        
      }
      return item;
    })
    dispatch(changeCount(newItem));
  }

  const handleDecrease = (id) => {
    const newItem= basket.map(item => {
      if(item.id === id){
        return{
          ...item,
          count: item.count - 1
        }
        
      }
      return item;
    })
    dispatch(changeCount(newItem));
  }

  const handleChange = (value,id) => {
    const newItem= basket.map(item => {
      if(item.id === id){
        return{
          ...item,
          count: Number(value)
        }
        
      }
      return item;
    })
    dispatch(changeCount(newItem));
  }

  const handleRemove = (id) => {
    const newItem= basket.filter(item => item.id !== id);
    dispatch(changeCount(newItem));
  }

  const handleOrder = () => {

    const newObj = {
      id:Math.floor(Math.random() * 10000000) + 1, 
      products:basket, 
      date:new Date().toLocaleString(["en-GB"]),
      total:total 
     }
     dispatch(changeCount([]))
     dispatch(addtoOrders(newObj));
  }

  return (
    <div className="App">
      <Header />
      <Catagories />
      {basket.length=== 0 ? <Empty/> :<div className="basket-big-container">
        <div className="basket-items">
        <div className="basket-header">
        <div>Shopping Cart {basket.length===0 ? "" : <span style={{paddingLeft: 10,fontSize: 20}}>{basket.length} {basket.length===1 ? "product" : "products"}</span>} </div>
        {basket.length===0 ? "" : <button className="delete-all-button" onClick={()=>dispatch(changeCount([]))}>Delete All</button>}
        </div>
          {basket.map((item) => (
            <div key={item.id} className="basket-item">
              <div className="basket-item-img">
                <img src={item.image} alt="" className="basket-img" />
              </div>
              <div className="basket-item-details">
                <div className="basket-item-title-price">
                  <div>{item.title}</div>
                  <div>{item.price}$ </div>
                </div>
                <div className="basket-item-buttons">
                  <div className="product-count-container">
                    {
                    item.count===1 ? 
                    <DeleteForeverIcon onClick={()=>handleRemove(item.id)}/> 
                    : 
                    <RemoveIcon onClick={()=>handleDecrease(item.id)}/>}
                    <input type="number" className="product-count" value={item.count} 
                    onChange={(e)=>handleChange(e.target.value,item.id)}/>
                    <AddIcon onClick={()=>handleIncrease(item.id)}/>
                  </div>
                  <div className="delete-icon-div"> 
                    <DeleteForeverIcon sx={{ fontSize: 36 }} onClick={()=>handleRemove(item.id)}/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="basket-right">
              <div className="total-price">{total} <span style={{fontSize: '24px'}}>$</span></div>
              
              {isLoggedIn ? <button className="total-button" onClick={()=>handleOrder()}>Complete the Order</button> : <button className="total-button" onClick={()=>navigate("/login")}>Sign in to Continue</button>}       
        </div>
      </div> }
      
    </div>
  );
}

export default Basket;
