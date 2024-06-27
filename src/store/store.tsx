import { configureStore } from "@reduxjs/toolkit";

import { ValueSlice } from "./inputValue/valueState";
import { ValueRowsSlice } from "./inputValueRows/inputValueRowsState";
import { SortingSlice } from "./sortingState/sortingState";
import { PaginationSlice } from "./paginationSate/paginationState";
import { AsuntoSlice } from "./asuntoExpandedState.tsx/asuntoState";
import { SlidebarSlice } from "./slidebarState/slidebarState";

export const store = configureStore({
  reducer: {
    valueState: ValueSlice.reducer,
    inputValueRows: ValueRowsSlice.reducer,
    sortingState: SortingSlice.reducer,
    PaginationState: PaginationSlice.reducer,
    asuntoState: AsuntoSlice.reducer,
    slidebarState: SlidebarSlice.reducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
