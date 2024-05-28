import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [], // Use "cart" as a more common naming convention
};

const cartSlice = createSlice({
  name: "cart", // Use "cart" for consistency
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1; // Use "quantity" for clarity
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const filteredCart = state.cart.filter((item) => item.id !== action.payload);
      state.cart = filteredCart;
    },

    removeSingleItem: (state, action) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        // Remove the item entirely if quantity reaches 0
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      }
    },

    emptyCart: (state, action) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, removeSingleItem, emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
