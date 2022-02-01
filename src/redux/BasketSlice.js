import { createSlice } from '@reduxjs/toolkit'


export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        items: [],
    },
    reducers: {
        AddtoBasket: (state, action) => {
            state.items.push(action.payload)
        },
        AddtoBasketfromDetail: (state, action) => {
            state.items.push(action.payload)
        },
        changeCount: (state, action) => {
            state.items = action.payload
        }
    }
})

export const { AddtoBasket, AddtoBasketfromDetail, changeCount } = basketSlice.actions
export default basketSlice.reducer