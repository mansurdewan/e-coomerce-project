import { createSlice } from "@reduxjs/toolkit";
import getProducts from "../../getData/products";
const products = await getProducts();
const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.items.push(products?.find(({ id }) => id === payload));
    },
    removeFromCart: (state, { payload }) => {
      // Remove the product from the cart array based on the product ID
      const filteredProducts = state.items?.filter(({ id }) => id !== payload);
      state.items = filteredProducts;
    },
    clearCarts: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCarts } = cartSlice.actions;
export default cartSlice.reducer;
