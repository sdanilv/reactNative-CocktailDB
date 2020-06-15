import {getFilteredDrinks, getFilters} from '../api/api';

const FETCH_DRINKS = "DRINK_DB/DRINKS/FETCH_DRINKS";
const FETCH_FILTERS = "DRINK_DB/DRINKS/FETCH_FILTERS";
const SET_FILTER = "DRINK_DB/DRINKS/SET_FILTER";

const initialState = { drinks: [],filters:[], filter: "Ordinary Drink" };

export const drinkReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DRINKS:
      return { ...state, drinks: [...action.drinks] };
    case FETCH_FILTERS:
      return { ...state, filters: [...action.drinks] };
    case SET_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};

const setDrinks = (drinks) => ({
  type: FETCH_DRINKS,
  drinks: [...drinks],
});
const setFilters = (filters) => ({
  type: FETCH_FILTERS,
  filters
});
const changeFilter = (filter) => ({
  type: SET_FILTER,
  filter
});

export const fetchDrinks = () => async (dispatch, getState) => {
  const { data } = await getFilteredDrinks(getState().Drinks.filter);
  dispatch(setDrinks(data.drinks));
};

export const fetchFilters = () => async (dispatch) => {
  const { data } = await getFilters();
  dispatch(setFilters(data.drinks));
};
