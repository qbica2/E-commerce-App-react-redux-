import {createSlice} from '@reduxjs/toolkit'


export const basketSlice = createSlice({
    name: 'basket',
    initialState:{
        items: [],
    },
    reducers:{
        AddtoBasket: (state,action)=>{
            console.log(action.payload)
            state.items.push(action.payload)
        }
    }
})

export const {AddtoBasket} = basketSlice.actions
export default basketSlice.reducer