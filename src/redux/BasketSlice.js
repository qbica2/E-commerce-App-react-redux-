import {createSlice} from '@reduxjs/toolkit'


export const basketSlice = createSlice({
    name: 'basket',
    initialState:{
        items: [],
    },
    reducers:{
        AddtoBasket: (state,action)=>{
            // const {item,count} = action.payload
            // const findBasketitem = state.items.find(item=>item.id === id)
            
            // state.items.push({item,count})
            // state.items=[...state.items, {item,count}]
            state.items.push(action.payload)
        },
        AddtoBasketfromDetail : (state,action) => {
            //  const {data,count} = action.payload
            // console.log(action.payload)
            // state.items=[...state.items, {data,count}]
            console.log(action.payload)
            state.items.push(action.payload)

        }
    }
})

export const {AddtoBasket,AddtoBasketfromDetail} = basketSlice.actions
export default basketSlice.reducer