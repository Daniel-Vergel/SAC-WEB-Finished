import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ValueStateRows {
  inputValueRows: number;
}

const initialState: ValueStateRows = {
  inputValueRows: 4,
};

export const ValueRowsSlice = createSlice({
  name: "inputValueRowsState",
  initialState,
  reducers: {
    setInputValueRows: (state, action: PayloadAction<number>) => {
      state.inputValueRows = action.payload;
    },
  },
});

export const { setInputValueRows } = ValueRowsSlice.actions;
