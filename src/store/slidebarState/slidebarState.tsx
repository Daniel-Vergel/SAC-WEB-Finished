import { createSlice } from "@reduxjs/toolkit";

export const SlidebarSlice = createSlice({
  name: "slidebarState",
  initialState: {
    menuOpen: false,
  },

  reducers: {
    closeOpenMenu: (state) => {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export const { closeOpenMenu } = SlidebarSlice.actions;
