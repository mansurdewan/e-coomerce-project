import { createSlice } from "@reduxjs/toolkit";
import getProducts from "../../getData/products";
const products = await getProducts();
const initialState = {
  value: products || [],
  loading: false,
  error: null,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state) => {},
  },
});

export const { fetchProducts } = productsSlice.actions;
export default productsSlice.reducer;
