import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ValueState {
  inputValue: string | number;
}

const initialState: ValueState = {
  inputValue: "",
};

export const ValueSlice = createSlice({
  name: "valueState",
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string | number>) => {
      state.inputValue = action.payload;
    },
  },
});

export const { setInputValue } = ValueSlice.actions;
