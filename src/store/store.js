import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "../reducers/todoReducer";


const store=configureStore({
    reducer:rootReducers
})

export default store