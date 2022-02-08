import { configureStore } from "@reduxjs/toolkit";

import carouselSlice from './CarouselSlice'
import userSlice from "./UserSlice"
import productSlice from "./ProductsSlice"
import basketSlice from "./BasketSlice"
import ordersSlice from "./OrdersSlice"

export const store = configureStore({
    reducer:{
        carousel:carouselSlice,
        user:userSlice,
        products:productSlice,
        basket:basketSlice,
        orders:ordersSlice

    }
})