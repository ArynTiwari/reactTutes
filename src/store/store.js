import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter";
import todoSlice from "./slices/todo";
import cartSlice from "./slices/cart";
import product from "./slices/product";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: todoSlice,
    cart: cartSlice,
    product: product,
  },
});
