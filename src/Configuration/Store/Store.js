import { configureStore } from "@reduxjs/toolkit";
import { todoSlice}  from "../Reducers/todoSlice"
export  const Store = configureStore({
    reducer :{
       todos : todoSlice.reducer
    }
})