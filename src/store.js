import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modal/modalSlice";
import orderReducer from "./features/order/orderSlice";

export const  store = configureStore({
    reducer :{
        modal : modalReducer,
        order : orderReducer
    }
})