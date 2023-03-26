import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";

let store = configureStore({
    reducer:{
        cart:cartSlice.reducer
    }
});

export default store;
