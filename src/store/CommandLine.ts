import { createSlice } from "@reduxjs/toolkit";

const CommandLine = createSlice({
    name:'CommandLine',
    initialState:{
        run:false,
    },
    reducers:{
        setRun:(state,payload)=>{
            state.run=!state.run   //creating the trigger so everytime i click on the run it should take the 
            // values of the variable from the pixelCanvas and send it to the Algorithms..
        }
    }

})
export const{setRun}= CommandLine.actions
export default CommandLine.reducer