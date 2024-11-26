import { TProduct } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";

interface cartState {
  products: (TProduct & { cartQuantity: number })[];
}

const initialState: cartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseQuantityInCart: (state, action) => {
      console.log("hey");
      const existProduct = state.products?.find(
        (product: TProduct) => product._id === action.payload._id
      );
      if (existProduct) {
        existProduct.cartQuantity++;
      } else {
        state.products.push({ ...action.payload, cartQuantity: 1 });
      }
    },
    decreaseQuantityInCart: (state, action) => {
      const existProduct = state.products?.find(
        (product: TProduct) => product._id === action.payload
      );
      if (existProduct) {
        if (existProduct.cartQuantity === 1) {
          state.products = state.products.filter(
            (product) => product._id !== action.payload
          );
        } else {
          existProduct.cartQuantity--;
        }
      }
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
  },
});

export const {
  increaseQuantityInCart,
  decreaseQuantityInCart,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
