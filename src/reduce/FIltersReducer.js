import {createSlice} from '@reduxjs/toolkit';
import {getFilters} from '../api/api';
import {clearDrinks, fetchDrinks} from './DrinksReducer';

const initialState = {
  filters: [],
  checkedFilters: [],
};

const filtersReducer = createSlice({
  name: "Filters",
  initialState,
  reducers: {
    setFilters(state, action) {
      state.filters = action.payload;
      state.checkedFilters = action.payload;
    },
    setCheckedFiltersAC(state, action) {
      state.checkedFilters = action.payload;
    },
  },
});
export const { setFilters, setCheckedFiltersAC } = filtersReducer.actions;
export const setCheckedFilters = (filters) => (dispatch) => {
  dispatch(setCheckedFiltersAC(filters));
  dispatch(clearDrinks());
  dispatch(fetchDrinks());
};

export const fetchFilters = () => async (dispatch) => {
  const { data } = await getFilters();
  const filters = data.drinks.map((item) => item.strCategory);
  dispatch(setFilters(filters));
  dispatch(setCheckedFilters(filters));
};

export default filtersReducer.reducer;
