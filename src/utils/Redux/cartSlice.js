import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["burger", "pizza","pasta"],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating the state over here
      state.items.push(action.payload);
    },
    removerItem: (state) => {
      state.items.pop(action);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removerItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
