import { configureStore } from "@reduxjs/toolkit";
import CanvasSlice from "./CanvasSlice";
import ToolbarSlice from "./ToolbarSlice";

const store = configureStore({
    reducer:{
        CanvasSlice:CanvasSlice,
        Toolbar:ToolbarSlice
    }
})

export default store