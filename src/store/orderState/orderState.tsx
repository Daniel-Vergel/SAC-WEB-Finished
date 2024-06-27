import { createSlice } from "@reduxjs/toolkit";

export const OrderSlice = createSlice({
  name: "orderState",
  initialState: {
    open: false,
  },

  reducers: {
    openOrder: (state) => {
      state.open = !state.open;
    },
  },
});

export const { openOrder } = OrderSlice.actions;
