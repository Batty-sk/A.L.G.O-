import { configureStore } from "@reduxjs/toolkit";
import CanvasSlice from "./CanvasSlice";
import ToolbarSlice from "./ToolbarSlice";
import CommandLine from "./CommandLine";

const store = configureStore({
    reducer:{
        CanvasSlice:CanvasSlice,
        Toolbar:ToolbarSlice,
        Command:CommandLine,
    }
})

export default store