import { configureStore } from "@reduxjs/toolkit";
import authslice from "./authslice"

const store=configureStore({
    reducer:{
        auth:authslice
    },
    devTools:true
})

export default store;