import React, { useEffect } from 'react';

import Header from '../../components/Header'
import Catagories from '../../components/Catagories'
import Loading from '../../components/Loading'
import DropdownFilter from '../../components/Dropdown'
import Filter from '../../components/Filter'

import { getProductsByCategory,changeFilterType,checkedFourStar, checkedTwoStar, checkedOneStar,checkedThreeStar} from "../../redux/ProductsSlice"
import { useDispatch, useSelector } from "react-redux"
import {AddtoBasket} from "../../redux/BasketSlice"

import "./style.css"
import StarIcon from '@mui/icons-material/Star';
import { orange } from "@mui/material/colors"
import { grey } from "@mui/material/colors"
import CircleIcon from '@mui/icons-material/Circle';


import { Link } from "react-router-dom"

let filtered= []

function Electronics() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.products.productsByCategory)
  const status = useSelector(state => state.products.status)
 
  const filter = useSelector(state=>state.products.filter)

  const basketItems = useSelector(state=>state.basket.items)


  useEffect(() => {
    dispatch(getProductsByCategory("electronics"))
    dispatch(changeFilterType("All"))
    dispatch(checkedFourStar(false))
    dispatch(checkedThreeStar(false))
    dispatch(checkedTwoStar(false))
    dispatch(checkedOneStar(false))
    
  }, [dispatch])

  const handleAddtoBasket = (item,id) => {
    const findBasketitem = basketItems.find(item=>item.id === id)
    if(findBasketitem){
      alert("ürün zaten sepetinizde")
      return false
    }
    let newObj={...item,count:1}
    dispatch(AddtoBasket(newObj))
  }

  if(filter.filterType === "All"){
    filtered=data
  }
  if(filter.filterType === "1"){
    filtered= data.filter(item=>item.price<50)
  }
  if(filter.filterType === "2"){
    filtered= data.filter(item=>(item.price>=50)&&(item.price<100))
  }
  if(filter.filterType === "3"){
    filtered= data.filter(item=>(item.price>=100)&&(item.price<250))
  }  
  if(filter.filterType === "4"){
    filtered= data.filter(item=>(item.price>=250)&&(item.price<500))
  }
  if(filter.filterType === "5"){
    filtered= data.filter(item=>(item.price>=500)&&(item.price<1000))
  }
  if(filter.filterType === "6"){
    filtered= data.filter(item=>item.price>=1000)
  }

  if(filter.fourStarCheck){
    filtered= data.filter(item=>item.rating.rate>=4)
  }
  if(filter.threeStarCheck){
    filtered= data.filter(item=>(item.rating.rate<4)&&(item.rating.rate>=3))
  }
  if(filter.twoStarCheck){
    filtered= data.filter(item=>(item.rating.rate<3)&&(item.rating.rate>=2))
  }
  if(filter.oneStarCheck){
    filtered= data.filter(item=>(item.rating.rate<2)&&(item.rating.rate>=1))
  }

  if(filter.fourStarCheck &&filter.threeStarCheck){
    filtered= data.filter(item=>item.rating.rate>=3)
  }
  if(filter.fourStarCheck&&filter.twoStarCheck){
    filtered= data.filter(item=>(item.rating.rate>=4)||((item.rating.rate<3)&&(item.rating.rate>=2)))
  }
  if(filter.fourStarCheck&&filter.oneStarCheck){
    filtered= data.filter(item=>(item.rating.rate>=4)||((item.rating.rate<2)&&(item.rating.rate>=1)))
  }
  if(filter.threeStarCheck&&filter.twoStarCheck){
    filtered= data.filter(item=>(item.rating.rate<4)&&(item.rating.rate>=2))
  }
  if(filter.threeStarCheck&&filter.oneStarCheck){
    filtered= data.filter(item=>((item.rating.rate<4&&item.rating.rate>=3)||(item.rating.rate>=1&&item.rating.rate<2)))
  }
  if(filter.twoStarCheck&&filter.oneStarCheck){
    filtered= data.filter(item=>((item.rating.rate<3)))
  }
  if(filter.fourStarCheck&&filter.threeStarCheck&&filter.twoStarCheck){
    filtered=data.filter(item=> item.rating.rate>=2)
  }
  if(filter.fourStarCheck&&filter.threeStarCheck&&filter.oneStarCheck){
    filtered=data.filter(item=> item.rating.rate>=3||item.rating.rate<2)
  }
  if(filter.fourStarCheck&&filter.twoStarCheck&&filter.oneStarCheck){
    filtered=data.filter(item=> item.rating.rate>=4||item.rating.rate<3)
  }
  if(filter.threeStarCheck&&filter.twoStarCheck&&filter.oneStarCheck){
    filtered=data.filter(item=> item.rating.rate<4)
  }
  if(filter.fourStarCheck&&filter.threeStarCheck&&filter.twoStarCheck&&filter.oneStarCheck){
    filtered=data
  }

  // fiyat + yıldız

  if(filter.filterType === "1"&&filter.fourStarCheck){
    filtered= data.filter(item=>item.price<50&&item.rating.rate>=4)
  }
  if(filter.filterType === "1"&&filter.threeStarCheck){
    filtered= data.filter(item=>item.price<50&&(item.rating.rate<4&&item.rating.rate>=3))
  }
  if(filter.filterType === "1"&&filter.twoStarCheck){
    filtered= data.filter(item=>item.price<50&&(item.rating.rate<3&&item.rating.rate>=2))
  }
  if(filter.filterType === "1"&&filter.oneStarCheck){
    filtered= data.filter(item=>item.price<50&&(item.rating.rate<2&&item.rating.rate>=1))
  }
  if(filter.filterType === "1"&&filter.fourStarCheck&&filter.threeStarCheck){
    filtered= data.filter(item=>item.price<50&&item.rating.rate>=3)
  }
  if(filter.filterType === "1"&&filter.fourStarCheck&&filter.twoStarCheck){
    filtered= data.filter(item=>item.price<50&&((item.rating.rate>=4)||((item.rating.rate<3)&&(item.rating.rate>=2))))
  }
  if(filter.filterType === "1"&&filter.fourStarCheck&&filter.oneStarCheck){
    filtered= data.filter(item=>item.price<50&&((item.rating.rate>=4)||((item.rating.rate<2)&&(item.rating.rate>=1))))
  }
  if(filter.filterType === "1"&&filter.threeStarCheck&&filter.twoStarCheck){
    filtered= data.filter(item=>item.price<50&&(item.rating.rate<4)&&(item.rating.rate>=2))
  }
  if(filter.filterType === "1"&&filter.threeStarCheck&&filter.oneStarCheck){
    filtered= data.filter(item=>item.price<50&&((item.rating.rate<4&&item.rating.rate>=3)||(item.rating.rate>=1&&item.rating.rate<2)))
  }
  if(filter.filterType === "1"&&filter.twoStarCheck&&filter.oneStarCheck){
    filtered= data.filter(item=>item.price<50&&item.rating.rate<3)
  }
  if(filter.filterType==="2"&&filter.fourStarCheck){
    filtered=data.filter(item=>(item.price>=50&&item.price<100)&&item.rating.rate>=4)
  }
  if(filter.filterType==="2"&&filter.threeStarCheck){
    filtered=data.filter(item=>(item.price>=50&&item.price<100)&&(item.rating.rate<4&&item.rating.rate>=3))
  }
  if(filter.filterType==="2"&&filter.twoStarCheck){
    filtered=data.filter(item=>(item.price>=50&&item.price<100)&&(item.rating.rate<3&&item.rating.rate>=2))
  }
  if(filter.filterType==="2"&&filter.oneStarCheck){
    filtered=data.filter(item=>(item.price>=50&&item.price<100)&&(item.rating.rate<2&&item.rating.rate>=1))
  }
  if(filter.filterType === "2"&&filter.fourStarCheck&&filter.threeStarCheck){
    filtered= data.filter(item=>(item.price>=50&&item.price<100)&&item.rating.rate>=3)
  }
  if(filter.filterType === "2"&&filter.fourStarCheck&&filter.twoStarCheck){
    filtered= data.filter(item=>(item.price>=50&&item.price<100)&&((item.rating.rate>=4)||((item.rating.rate<3)&&(item.rating.rate>=2))))
  }
  if(filter.filterType === "2"&&filter.fourStarCheck&&filter.oneStarCheck){
    filtered= data.filter(item=>(item.price>=50&&item.price<100)&&((item.rating.rate>=4)||((item.rating.rate<2)&&(item.rating.rate>=1))))
  }
  if(filter.filterType === "2"&&filter.threeStarCheck&&filter.twoStarCheck){
    filtered= data.filter(item=>(item.price>=50&&item.price<100)&&((item.rating.rate<4)&&(item.rating.rate>=2)))
  }
  if(filter.filterType === "2"&&filter.threeStarCheck&&filter.oneStarCheck){
    filtered= data.filter(item=>(item.price>=50&&item.price<100)&&((item.rating.rate<4&&item.rating.rate>=3)||(item.rating.rate>=1&&item.rating.rate<2)))
  }
  if(filter.filterType === "2"&&filter.twoStarCheck&&filter.oneStarCheck){
    filtered= data.filter(item=>(item.price>=50&&item.price<100)&&item.rating.rate<3)
  }
  if(filter.filterType==="3"&&filter.fourStarCheck){
    filtered=data.filter(item=>(item.price>=100)&&(item.price<250)&&item.rating.rate>=4)
  }
  if(filter.filterType==="3"&&filter.threeStarCheck){
    filtered=data.filter(item=>(item.price>=100)&&(item.price<250)&&(item.rating.rate<4&&item.rating.rate>=3))
  }
  if(filter.filterType==="3"&&filter.twoStarCheck){
    filtered=data.filter(item=>(item.price>=100)&&(item.price<250)&&(item.rating.rate<3&&item.rating.rate>=2))
  }
  if(filter.filterType==="3"&&filter.oneStarCheck){
    filtered=data.filter(item=>((item.price>=100)&&(item.price<250))&&(item.rating.rate<2&&item.rating.rate>=1))
  }
  if(filter.filterType === "3"&&filter.fourStarCheck&&filter.threeStarCheck){
    filtered= data.filter(item=>((item.price>=100)&&(item.price<250))&&item.rating.rate>=3)
  }
  if(filter.filterType === "3"&&filter.fourStarCheck&&filter.twoStarCheck){
    filtered= data.filter(item=>((item.price>=100)&&(item.price<250))&&((item.rating.rate>=4)||((item.rating.rate<3)&&(item.rating.rate>=2))))
  }
  if(filter.filterType === "3"&&filter.fourStarCheck&&filter.oneStarCheck){
    filtered= data.filter(item=>((item.price>=100)&&(item.price<250))&&((item.rating.rate>=4)||((item.rating.rate<2)&&(item.rating.rate>=1))))
  }
  if(filter.filterType === "3"&&filter.threeStarCheck&&filter.twoStarCheck){
    filtered= data.filter(item=>((item.price>=100)&&(item.price<250))&&((item.rating.rate<4)&&(item.rating.rate>=2)))
  }
  if(filter.filterType === "3"&&filter.threeStarCheck&&filter.oneStarCheck){
    filtered= data.filter(item=>((item.price>=100)&&(item.price<250))&&((item.rating.rate<4&&item.rating.rate>=3)||(item.rating.rate>=1&&item.rating.rate<2)))
  }
  if(filter.filterType === "3"&&filter.twoStarCheck&&filter.oneStarCheck){
    filtered= data.filter(item=>((item.price>=100)&&(item.price<250))&&item.rating.rate<3)
  }
  if(filter.filterType==="5"&&filter.fourStarCheck){
    filtered=data.filter(item=>((item.price>=500)&&(item.price<1000))&&item.rating.rate>=4)
  }
  if(filter.filterType==="5"&&filter.threeStarCheck){
    filtered=data.filter(item=>((item.price>=500)&&(item.price<1000))&&(item.rating.rate<4&&item.rating.rate>=3))
  }
  if(filter.filterType==="5"&&filter.twoStarCheck){
    filtered=data.filter(item=>((item.price>=500)&&(item.price<1000))&&(item.rating.rate<3&&item.rating.rate>=2))
  }
  if(filter.filterType==="5"&&filter.oneStarCheck){
    filtered=data.filter(item=>((item.price>=500)&&(item.price<1000))&&(item.rating.rate<2&&item.rating.rate>=1))
  }
  if(filter.filterType === "5"&&filter.fourStarCheck&&filter.threeStarCheck){
    filtered= data.filter(item=>((item.price>=500)&&(item.price<1000))&&item.rating.rate>=3)
  }
  if(filter.filterType === "5"&&filter.fourStarCheck&&filter.twoStarCheck){
    filtered= data.filter(item=>((item.price>=500)&&(item.price<1000))&&((item.rating.rate>=4)||((item.rating.rate<3)&&(item.rating.rate>=2))))
  }
  if(filter.filterType === "5"&&filter.fourStarCheck&&filter.oneStarCheck){
    filtered= data.filter(item=>((item.price>=500)&&(item.price<1000))&&((item.rating.rate>=4)||((item.rating.rate<2)&&(item.rating.rate>=1))))
  }
  if(filter.filterType === "5"&&filter.threeStarCheck&&filter.twoStarCheck){
    filtered= data.filter(item=>((item.price>=500)&&(item.price<1000))&&((item.rating.rate<4)&&(item.rating.rate>=2)))
  }
  if(filter.filterType === "5"&&filter.threeStarCheck&&filter.oneStarCheck){
    filtered= data.filter(item=>((item.price>=500)&&(item.price<1000))&&((item.rating.rate<4&&item.rating.rate>=3)||(item.rating.rate>=1&&item.rating.rate<2)))
  }
  if(filter.filterType === "5"&&filter.twoStarCheck&&filter.oneStarCheck){
    filtered= data.filter(item=>((item.price>=500)&&(item.price<1000))&&item.rating.rate<3)
  }
  if(filter.filterType === "1"&&filter.fourStarCheck&&filter.threeStarCheck&&filter.twoStarCheck){
    filtered=data.filter(item=>(item.price<50)&&(item.rating.rate>=2))
  }
  if(filter.filterType === "1"&&filter.fourStarCheck&&filter.threeStarCheck&&filter.oneStarCheck){
    filtered=data.filter(item=>((item.price<50)&&(item.rating.rate>=3||item.rating.rate<2)))
  }
  if(filter.filterType==="1"&&filter.fourStarCheck&&filter.twoStarCheck&&filter.oneStarCheck){
    filtered=data.filter(item=>((item.price<50)&&(item.rating.rate>=4||item.rating.rate<3)))
  }
  if(filter.filterType==="1"&&filter.threeStarCheck&&filter.twoStarCheck&&filter.oneStarCheck){
    filtered=data.filter(item=>((item.price<50)&&(item.rating.rate<4)))
  }
  if(filter.filterType==="1"&&filter.fourStarCheck&&filter.threeStarCheck&&filter.twoStarCheck&&filter.oneStarCheck){
    filtered=data.filter(item=>(item.price<50))
  }
  if(filter.filterType==="2"&&filter.fourStarCheck&&filter.threeStarCheck&&filter.twoStarCheck){
    filtered=data.filter(item=>(item.price>=50&&item.price<100)&&(item.rating.rate>=2))
  }
  if(filter.filterType==="2"&&filter.fourStarCheck&&filter.threeStarCheck&&filter.oneStarCheck){
    filtered=data.filter(item=>(item.price>=50&&item.price<100)&&((item.rating.rate>=3||item.rating.rate<2)))
  }
  if(filter.filterType==="2"&&filter.fourStarCheck&&filter.twoStarCheck&&filter.oneStarCheck){
    filtered=data.filter(item=>(item.price>=50&&item.price<100)&&((item.rating.rate>=4||item.rating.rate<3)))
  }
  if(filter.filterType==="2"&&filter.threeStarCheck&&filter.twoStarCheck&&filter.oneStarCheck){
    filtered=data.filter(item=>(item.price>=50&&item.price<100)&&(item.rating.rate<4))
  }
  if(filter.filterType==="2"&&filter.fourStarCheck&&filter.threeStarCheck&&filter.twoStarCheck&&filter.oneStarCheck){
    filtered=data.filter(item=>(item.price>=50&&item.price<100))
  }
  if(filter.filterType==="3"&&filter.fourStarCheck&&filter.threeStarCheck&&filter.twoStarCheck){
    filtered=data.filter(item=>((item.price>=100)&&(item.price<250))&&(item.rating.rate>=2))
  }
  if(filter.filterType==="3"&&filter.fourStarCheck&&filter.threeStarCheck&&filter.oneStarCheck){
    filtered=data.filter(item=>((item.price>=100)&&(item.price<250))&&((item.rating.rate>=3||item.rating.rate<2)))
  }
  if(filter.filterType==="3"&&filter.fourStarCheck&&filter.twoStarCheck&&filter.oneStarCheck){
    filtered=data.filter(item=>((item.price>=100)&&(item.price<250))&&((item.rating.rate>=4||item.rating.rate<3)))
  }
  if(filter.filterType==="3"&&filter.threeStarCheck&&filter.twoStarCheck&&filter.oneStarCheck){
    filtered=data.filter(item=>((item.price>=100)&&(item.price<250))&&(item.rating.rate<4))
  }
  if(filter.filterType==="3"&&filter.fourStarCheck&&filter.threeStarCheck&&filter.twoStarCheck&&filter.oneStarCheck){
    filtered=data.filter(item=>(item.price>=100)&&(item.price<250))
  }
  if(filter.filterType==="5"&&filter.fourStarCheck&&filter.threeStarCheck&&filter.twoStarCheck){
    filtered=data.filter(item=>((item.price>=500)&&(item.price<1000))&&(item.rating.rate>=2))
  }
  if(filter.filterType==="5"&&filter.fourStarCheck&&filter.threeStarCheck&&filter.oneStarCheck){
    filtered=data.filter(item=>((item.price>=500)&&(item.price<1000))&&((item.rating.rate>=3||item.rating.rate<2)))
  }
  if(filter.filterType==="5"&&filter.fourStarCheck&&filter.twoStarCheck&&filter.oneStarCheck){
    filtered=data.filter(item=>((item.price>=500)&&(item.price<1000))&&((item.rating.rate>=4||item.rating.rate<3)))
  }
  if(filter.filterType==="5"&&filter.threeStarCheck&&filter.twoStarCheck&&filter.oneStarCheck){
    filtered=data.filter(item=>((item.price>=500)&&(item.price<1000))&&(item.rating.rate<4))
  }
  if(filter.filterType==="5"&&filter.fourStarCheck&&filter.threeStarCheck&&filter.twoStarCheck&&filter.oneStarCheck){
    filtered=data.filter(item=>(item.price>=500)&&(item.price<1000))
  }


  return (
    <div className="App">
      <Header />
      <Catagories />
      <DropdownFilter />
      <div className="content">
        <Filter />
        <div className="products-content" >
          {
             filtered.map((item) => (
              <div key={item.id} className="product">
                <Link to={`/${item.id}`} className="product-image-div">
                  <img src={item.image} alt={item.category} className="product-image" />
                </Link>
                <Link to={`/${item.id}`} className="description">
                  <div >{item.title}</div>
                  <div className="product-price">{item.price}$</div>
                  <div><StarIcon sx={{ color: orange[500] }} /><span style={{ fontWeight: 'bold' }}>{item.rating.rate}</span> {" "} <CircleIcon sx={
                    { fontSize: 6, color: grey[800] }} /> <span style={{ fontWeight: 'bold' }}>{item.rating.count}</span>  Değerlendirme</div>
                </Link>
                <div className="product-buttons">
                  <div>
                    <button className="Addbasket" onClick={()=>handleAddtoBasket(item,item.id)}>Sepete Ekle</button>
                  </div>
                </div>

              </div>
            )
            )
          }
        </div>

      </div>
      {
        status === "loading" && <Loading />
      }
    </div>
  )
}

export default Electronics;
