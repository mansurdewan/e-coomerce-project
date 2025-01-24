import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cartSlice";
import productsReducer from "./features/productsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
  },
});

export default store;
