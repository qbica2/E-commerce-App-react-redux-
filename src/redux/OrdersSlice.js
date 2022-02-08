import {createSlice} from "@reduxjs/toolkit"


export const ordersSlice = createSlice({
    name: "orders",
    initialState: {
        items: [],
    },
    reducers:{
        addtoOrders: (state, action) => {
            state.items.push(action.payload)
        }
    }
})

export const {addtoOrders} = ordersSlice.actions
export default ordersSlice.reducer