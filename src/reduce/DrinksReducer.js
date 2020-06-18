import { getFilteredDrinks } from "../api/api";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sectionCount: 0,
  drinks: [],
};

const drinksReducer = createSlice({
  name: "Drinks",
  initialState,
  reducers: {
    addDrinks(state, action) {
      state.drinks.push(action.payload);
    },
    clearDrinks(state) {
      state.sectionCount = 0;
      state.drinks = [];
    },
    setSectionCountAC(state, action) {
      state.sectionCount = action.payload;
    },
  },
});
export const {
  addDrinks,
  clearDrinks,
  setSectionCountAC,
} = drinksReducer.actions;
export const loadNextSection = () => async (dispatch, getState) => {
  const { Drinks, Filters } = getState();
  const count = ++Drinks.sectionCount;
  if (count >= Filters.checkedFilters.length) return true;
  dispatch(setSectionCountAC(count));
  await dispatch(fetchDrinks());
  return false;
};

export const fetchDrinks = () => async (dispatch, getState) => {
  const { Drinks, Filters } = getState();
  const count = Drinks.sectionCount;
  const filter = Filters.checkedFilters[count];
  const { data } = await getFilteredDrinks(filter);
  dispatch(addDrinks({ filter, data: data.drinks }));
};

export default drinksReducer.reducer;
