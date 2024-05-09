import { createSlice } from "@reduxjs/toolkit";


const CanvasSlice = createSlice({
    name:'canvas',
    initialState:{
        Source:[],
        Target:[],
        CanvasRef:null,
        FilledP:[]
    },
    reducers:{
        setSource:(state,action)=>{
            state.Source = action.payload

        },
        setCanvasRef:(state,action)=>{
            state.CanvasRef = action.payload
            console.log('canvas ref is being set to the store!!',action.payload)
        },
        setTarget:(state,action) =>{
            state.Target=action.payload
        },
        setFilledPixels:(state,action)=>{
            console.log('heheheh',action.payload)
           state.FilledP = Array.from(action.payload)
            
        }
    }
})

export const {setSource, setTarget,setFilledPixels,setCanvasRef} = CanvasSlice.actions //named export
export default CanvasSlice.reducer // default export  */