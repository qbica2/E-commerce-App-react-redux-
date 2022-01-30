import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getProductsByCategory = createAsyncThunk("products/getProductsByCategory", async (category_name) => {
    const res = await axios(`https://fakestoreapi.com/products/category/${category_name}`)
    return res.data
})

export const getSingleProduct = createAsyncThunk("products/getSingleProduct", async (id) => {
    const res = await axios(`https://fakestoreapi.com/products/${id}`)
    return res.data
})

export const getAllProducts = createAsyncThunk("products/getAllProducts", async () => {
    const res = await axios(`https://fakestoreapi.com/products`)
    return res.data
})

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [],
        productsByCategory: [],
        singleProduct: {},
        status: "idle",
        sortBy: "",
        numberOfProductstoAddBasket: 0,
        filter:{
            filterType: "All",
            fourStarCheck:false,
            threeStarCheck:false,
            twoStarCheck:false,
            oneStarCheck:false,
            commentOne:false,
            commentTwo:false,
            commentThree:false,
            commentFour:false,
        }
    
    },
    reducers: {
        sortByReviews: (state) => {
            state.sortBy = "reviews"
            state.productsByCategory.sort((a, b) => { return b.rating.count - a.rating.count })
            state.allProducts.sort((a, b) => { return b.rating.count - a.rating.count })
        },
        sortByRate: (state) => {
            state.sortBy = "rate"
            state.productsByCategory.sort((a, b) => { return b.rating.rate - a.rating.rate })
            state.allProducts.sort((a, b) => { return b.rating.rate - a.rating.rate })
        },
        sortByPriceInc: (state) => {
            state.sortBy = "priceInc"
            state.productsByCategory.sort((a, b) => { return a.price - b.price })
            state.allProducts.sort((a, b) => { return a.price - b.price })
        },
        sortByPriceDec: (state) => {
            state.sortBy = "priceDec"
            state.productsByCategory.sort((a, b) => { return b.price - a.price })
            state.allProducts.sort((a, b) => { return b.price - a.price })
        },
        incrementNumber: (state) => {
            state.numberOfProductstoAddBasket += 1
        },
        decrementNumber: (state) => {
            state.numberOfProductstoAddBasket -= 1
        },
        changeFilterType: (state, action) => {
            state.filter.filterType = action.payload
        },
        checkedFourStar:(state,action) => {
            state.filter.fourStarCheck=action.payload
        },
        checkedThreeStar:(state,action) => {
            state.filter.threeStarCheck=action.payload
        },
        checkedTwoStar:(state,action) => {
            state.filter.twoStarCheck=action.payload
        },
        checkedOneStar:(state,action) => {
            state.filter.oneStarCheck=action.payload
        },
    },
    extraReducers: {
        [getProductsByCategory.fulfilled]: (state, action) => {
            state.status = "succedeed"
            state.productsByCategory = action.payload
        },
        [getProductsByCategory.pending]: (state, action) => {
            state.status = "loading"
        },
        [getProductsByCategory.rejected]: (state, action) => {
            state.status = "failed"
        },
        [getSingleProduct.fulfilled]: (state, action) => {
            state.singleProduct = action.payload
            state.status = "succedeed"
        },
        [getSingleProduct.pending]: (state, action) => {
            state.status = "loading"
        },
        [getSingleProduct.rejected]: (state, action) => {
            state.status = "failed"
        },
        [getAllProducts.fulfilled]: (state, action) => {
            state.allProducts = action.payload
            state.status = "succedeed"
        },
        [getAllProducts.rejected]: (state, action) => {
            state.status = "failed"
        },
        [getAllProducts.pending]: (state, action) => {
            state.status = "loading"
        }
    },
})

export const { sortByReviews, sortByRate, sortByPriceInc, sortByPriceDec, incrementNumber, decrementNumber, changeFilterType,checkedFourStar,checkedThreeStar,checkedOneStar,checkedTwoStar } = productsSlice.actions
export default productsSlice.reducer