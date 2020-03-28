/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const NUMBER_OF_ITEMS = 20;

export enum VisibilityFilters {
  SHOW_LEARNING = 'SHOW_LEARNING',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
}

export type VisibilityFilterState = {
  filter: VisibilityFilters;
  numberOfItems: number;
};

const initialState: VisibilityFilterState = {
  filter: VisibilityFilters.SHOW_LEARNING,
  numberOfItems: NUMBER_OF_ITEMS,
};

const filtersSlice = createSlice({
  name: 'visibilityFilter',
  initialState,
  reducers: {
    setVisibilityFilter(state: VisibilityFilterState, { payload }: PayloadAction<VisibilityFilters>) {
      state.filter = payload;
      state.numberOfItems = NUMBER_OF_ITEMS;
    },
    increaceNumberOfItems(state: VisibilityFilterState) {
      state.numberOfItems += NUMBER_OF_ITEMS;
    },
  },
});

export const { setVisibilityFilter, increaceNumberOfItems } = filtersSlice.actions;

export default filtersSlice.reducer;
