import {createSlice} from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        isLoggedIn: false,  
        email: "",
        password: "",
        basket:[{
            id : 1,
            category:"electronics",
            description:"lorem ipsum dolor"
        },{
            id:2,
            category:"sports",
            description:"lorem ipsum dolor"
        }
        ]
    },
    reducers:{
        login:(state) => {
            state.isLoggedIn =true
        },
        logout:(state) => {
            state.isLoggedIn =false
        },
        saveMail: (state,action)=> {
            state.email = action.payload
        },
        savePassword: (state,action) => {
            state.password=action.payload
        }
    }
})

export const {login, logout,saveMail,savePassword} =userSlice.actions
export default userSlice.reducer