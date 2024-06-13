import { configureStore } from "@reduxjs/toolkit";
import { prodsReducer } from "./slices/prods";
import { authReducer } from "./slices/auth";
import { searchReducer } from "./slices/searchs";


//impo


const store = configureStore({
    reducer:{
        prods: prodsReducer,
        auth: authReducer,
        searchs: searchReducer

    }
});

export default store;