import { createSlice } from "@reduxjs/toolkit";


const CanvasSlice = createSlice({
    name:'canvas',
    initialState:{
        Source:[],
        Target:[],
        FilledPixels:new Set(),
    },
    reducers:{
        setSource:(state,action)=>{
            state.Source = action.payload

        },
        setTarget:(state,action) =>{
            state.Target=action.payload
        },
        setFilledPixels:(state,action)=>{
            state.FilledPixels = action.payload
        }
    }
})

/* export const {AddUser, DeleteUser,ToggleDarkTheme} = userSlice.actions //named export
export default userSlice.reducer // default export  */