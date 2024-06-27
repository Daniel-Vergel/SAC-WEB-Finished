import { createSlice } from "@reduxjs/toolkit";

export const AsuntoSlice = createSlice({
  name: "asuntoState",
  initialState: {
    expanded: false,
  },

  reducers: {
    toggleExpand: (state) => {
      state.expanded = !state.expanded;
    },
  },
});

export const { toggleExpand } = AsuntoSlice.actions;
