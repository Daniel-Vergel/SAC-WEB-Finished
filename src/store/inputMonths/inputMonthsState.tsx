import { createSlice} from "@reduxjs/toolkit";


interface InputMonthsState {
    months: string; 

  }

const initialState: InputMonthsState = {
    months: "3 meses",

  };

export const InputMonthsSlice = createSlice({
  name: "inputMonthsState",
  initialState,
  reducers: {
    setChangeMonths: (state, action) => {
        state.months = action.payload;
    },
  },
});

export const { setChangeMonths } = InputMonthsSlice.actions;