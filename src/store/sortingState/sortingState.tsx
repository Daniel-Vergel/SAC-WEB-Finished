import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ColumnSort {
  id: string;
  desc: boolean;
}

interface SortingState {
  sorting: ColumnSort[];
}

const initialState: SortingState = {
  sorting: [],
};

export const SortingSlice = createSlice({
  name: "sortingState",
  initialState,
  reducers: {
    setSorting: (state, action: PayloadAction<ColumnSort[]>) => {
      state.sorting = action.payload;
    },
  },
});

export const { setSorting } = SortingSlice.actions;
