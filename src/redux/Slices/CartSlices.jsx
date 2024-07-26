import { createSlice } from "@reduxjs/toolkit";

export const CartSlices = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { remove, add } = CartSlices.actions;
export default CartSlices.reducer;
