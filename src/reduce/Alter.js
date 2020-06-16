import {getFilteredDrinks, getFilters} from '../api/api';

const FETCH_DRINKS = 'DRINK_DB/DRINKS/FETCH_DRINKS';
const FETCH_FILTERS = 'DRINK_DB/DRINKS/FETCH_FILTERS';
const SET_CHECKED_FILTER = 'DRINK_DB/DRINKS/SET_FILTER';
const SET_SECTION_COUNT = 'DRINK_DB/DRINKS/SET_SECTION_COUNT';
const CLEAR_DRINKS = 'DRINK_DB/DRINKS/CLEAR_DRINKS';

const initialState = {
  sectionCount: 0,
  openFilters: false,
  drinks: [],
  filters: [],
  checkedFilters: [],
};

export const drinkReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DRINKS:
      return {...state, drinks: [...state.drinks, action.drinks]};
    case CLEAR_DRINKS:
      return {...state, drinks: []};
    case FETCH_FILTERS:
      return {...state, filters: action.filters};
    case SET_CHECKED_FILTER:
      return {...state, checkedFilters: [...action.filters]};
    case SET_SECTION_COUNT:
      return {...state, sectionCount: action.count};
    default:
      return state;
  }
};

const addDrinks = (drinks) => ({
  type: FETCH_DRINKS,
  drinks,
});
const clearDrinks = () => ({
  type: CLEAR_DRINKS,
});

const setFilters = (filters) => ({
  type: FETCH_FILTERS,
  filters,
});
export const setCheckedFiltersAC = (filters) => ({
  type: SET_CHECKED_FILTER,
  filters,
});
export const setSectionCountAC = (count) => ({
  type: SET_SECTION_COUNT,
  count,
});

export const loadNextSection = () => (dispatch, setState) =>{
  dispatch(setSectionCountAC(setState().Drinks.sectionCount++))
};
export const setCheckedFilters = (filters) => (dispatch) => {
  dispatch(setCheckedFiltersAC(filters));
  dispatch(clearDrinks());
  dispatch(fetchDrinks());
  dispatch(setSectionCountAC(0));
};
export const fetchDrinks = () => async (dispatch, getState) => {
  const drinks = [];
  const count = getState().Drinks.sectionCount
  const filter = getState().Drinks.checkedFilters[count];
  const {data} = await getFilteredDrinks(filter);
  await drinks.push({filter, data: data.drinks});

  dispatch(addDrinks(drinks));
};

export const fetchFilters = () => async (dispatch) => {
  const {data} = await getFilters();
  const filters = data.drinks.map((item) => item.strCategory);
  dispatch(setFilters(filters));
  dispatch(setCheckedFilters(filters));
};
