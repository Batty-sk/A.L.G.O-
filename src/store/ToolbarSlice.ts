import { createSlice } from "@reduxjs/toolkit";


const Toolbar = createSlice({
    name:'toolbar',
    initialState:{
        trash:1,
        new_map:1,
    },
    reducers:{
        changeMap:(state,action) =>{
            state.new_map+=1
        },
        deleteMap:(state,action) =>{
            state.trash+=1
        }
    }
})