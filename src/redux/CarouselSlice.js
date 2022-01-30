import {createSlice} from "@reduxjs/toolkit"

export const carouselSlice = createSlice({
    name: 'carousel',
    initialState:{
        value: 0,
    },
    reducers:{
        nextCarousel: (state,action)=> {
            if(state.total===state.value){
                return false;
            }
            state.value+=1
        },
        backCarousel: (state,action)=> {
            if(state.value===0){
                return false;
            }
            state.value-=1
        },
        selectCarousel: (state,action)=> {
            state.value=Number(action.payload)
        }
    }
})
export const {nextCarousel,backCarousel,selectCarousel} = carouselSlice.actions
export default carouselSlice.reducer