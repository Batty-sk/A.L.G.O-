import { createSlice } from "@reduxjs/toolkit";


const CanvasSlice = createSlice({
    name:'canvas',
    initialState:{
        Source:[],
        Target:[],
        FilledP:[]
    },
    reducers:{
        setSource:(state,action)=>{
            state.Source = action.payload

        },

        setTarget:(state,action) =>{
            state.Target=action.payload
        },
        setFilledPixels:(state,action)=>{
            console.log('filled pixels:',action.payload)
           state.FilledP = action.payload
            
        }
    }
})

export const {setSource, setTarget,setFilledPixels} = CanvasSlice.actions //named export
export default CanvasSlice.reducer // default export  */