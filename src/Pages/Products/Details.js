import React, { useState, useEffect } from 'react';

import Header from '../../components/Header'
import Catagories from '../../components/Catagories'
import Loading from '../../components/Loading'

import { getSingleProduct, } from "../../redux/ProductsSlice"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { orange } from "@mui/material/colors"
import { grey } from "@mui/material/colors"
import "./style.css"

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import {AddtoBasketfromDetail,changeCount} from "../../redux/BasketSlice"

function Details() {
    let { id } = useParams();
    const dispatch = useDispatch()

    const status = useSelector(state => state.products.status)
    const data = useSelector(state => state.products.singleProduct)
    const [number, setNumber] = useState(0)
    const basketItems = useSelector(state=>state.basket.items)
    //datayı çekmeden render edilmesinin önüne geçmek için timeout koyduk
    const [fetch, setFetch] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFetch(true)
        }, 2000)

        return () => clearTimeout(timeout)
    }, [fetch])


    useEffect(() => {

        dispatch(getSingleProduct(id))

    }, [dispatch, id])

    const handleDecrement = () => {
        if (number === 0) {
            return false
        }
        setNumber(number - 1)
    }

    const handleAddtoBasket = (data,number) => {
        if(number === 0) {
            alert('adet 0 olamaz')
            return false;
        }
        const findBasketitem = basketItems.find(item=>item.id === data.id)
        if(findBasketitem){
            const newitem=basketItems.map(item=>{
                if(item.id === data.id){
                    return {
                        ...item,
                        count:item.count+number
                    }
                }
                return item
            })
            dispatch(changeCount(newitem))
        }else{
            let newObj={...data,count:number}
            dispatch(AddtoBasketfromDetail(newObj))
        }

        setNumber(0)
    }

    return (
        <div className="App">
            <Header />
            <Catagories />
            <div className="detail-container">
                <div className="detail-image-container">
                    <img src={data.image} alt="images" className="detail-image" />
                </div>
                <div className="detail-right-container">
                    <div>{data.title}</div>
                    <div className="detail-description">{data.description}</div>
                    <div className="detail-price">{data.price}$ </div>
                    {fetch && data.rating.rate < 5 && data.rating.rate > 4 && <div>{data.rating.rate}<StarIcon sx={{ color: orange[500] }} /><StarIcon sx={{ color: orange[500] }} /><StarIcon sx={{ color: orange[500] }} /><StarIcon sx={{ color: orange[500] }} /><StarHalfIcon sx={{ color: orange[500] }} /></div>}
                    {fetch && data.rating.rate < 4 && data.rating.rate > 3 && <div>{data.rating.rate}<StarIcon sx={{ color: orange[500] }} /><StarIcon sx={{ color: orange[500] }} /><StarIcon sx={{ color: orange[500] }} /><StarHalfIcon sx={{ color: orange[500] }} /></div>}
                    {fetch && data.rating.rate < 3 && data.rating.rate > 2 && <div>{data.rating.rate}<StarIcon sx={{ color: orange[500] }} /><StarIcon sx={{ color: orange[500] }} /><StarHalfIcon sx={{ color: orange[500] }} /></div>}

                    {fetch && data.rating.rate < 2 && data.rating.rate > 1 && <div>{data.rating.rate}<StarIcon sx={{ color: orange[500] }} /><StarHalfIcon sx={{ color: orange[500] }} /></div>}
                    {fetch && data.rating.rate < 1 && data.rating.rate > 0 && <div>{data.rating.rate}<StarHalfIcon sx={{ color: orange[500] }} /></div>}
                    <div >{fetch && data.rating.count}<span className="detail-description">Reviews </span></div>
                    <div className="detail-bottom">
                        <div className="product-count-container">
                            <RemoveIcon onClick={() => handleDecrement()} className="decrement" />
                            <input type="number" className="product-count" value={number} onChange={(e) => setNumber(e.target.value)} />
                            <AddIcon onClick={() => setNumber(Number(number) + 1)} className="increment" />
                        </div>
                        
                            <button className="detail-addbasket" 
                            onClick={()=>handleAddtoBasket(data,number)}><ShoppingCartIcon sx={{ color: grey[50] }}/>Add to Cart</button>
                        
                    </div>

                </div>
            </div>


            {
                status === "loading" && <Loading />
            }

        </div>
    );
}


export default Details;
