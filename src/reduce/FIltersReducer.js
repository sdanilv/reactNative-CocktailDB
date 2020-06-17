import { getFilters } from "../api/api";
import { clearDrinks, fetchDrinks } from "./DrinksReducer";

const FETCH_FILTERS = "DRINK_DB/DRINKS/FETCH_FILTERS";
const SET_CHECKED_FILTER = "DRINK_DB/DRINKS/SET_FILTER";

const initialState = {
  filters: [],
  checkedFilters: [],
};

export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILTERS:
      return { ...state, filters: action.filters };
    case SET_CHECKED_FILTER:
      return { ...state, checkedFilters: [...action.filters] };
    default:
      return state;
  }
};

const setFilters = (filters) => ({
  type: FETCH_FILTERS,
  filters,
});

export const setCheckedFiltersAC = (filters) => ({
  type: SET_CHECKED_FILTER,
  filters,
});

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
