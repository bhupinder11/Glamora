import { configureStore } from "@reduxjs/toolkit";
import formSlice from "../reducers/signUpreducer"


const store = configureStore({
    reducer:{
        form: formSlice
    },
   
}, window.__REDUX_DEVTOOLS_EXTENSION__?.() && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;