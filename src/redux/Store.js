import { configureStore } from "@reduxjs/toolkit";
import CartSlices from "./Slices/CartSlices";

export const store = configureStore({
  reducer: {
    cart: CartSlices,
  },
});
