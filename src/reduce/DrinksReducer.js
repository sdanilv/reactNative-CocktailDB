import { getFilteredDrinks, getFilters } from "../api/api";

const FETCH_DRINKS = "DRINK_DB/DRINKS/FETCH_DRINKS";
const FETCH_FILTERS = "DRINK_DB/DRINKS/FETCH_FILTERS";
const SET_CHECKED_FILTER = "DRINK_DB/DRINKS/SET_FILTER";
const SET_SECTION_COUNT = "DRINK_DB/DRINKS/SET_SECTION_COUNT";

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
      return { ...state, drinks: action.drinks};
    case FETCH_FILTERS:
      return { ...state, filters: action.filters };
    case SET_CHECKED_FILTER:
      return { ...state, checkedFilters: [...action.filters] };
    case SET_SECTION_COUNT:
      return { ...state, sectionCount: action.count  };
    default:
      return state;
  }
};

const setDrinks = (drinks) => ({
  type: FETCH_DRINKS,
  drinks,
});
const setFilters = (filters) => ({
  type: FETCH_FILTERS,
  filters,
});
export const setCheckedFiltersAC = (filters) => ({
  type: SET_CHECKED_FILTER,
  filters,
});
export const setectionCount = (filters) => ({
  type: SET_CHECKED_FILTER,
  count,
});

export const setCheckedFilters = (filters) => (dispatch) => {
  dispatch(setCheckedFiltersAC(filters));
  dispatch(fetchDrinks(0));
};
export const fetchDrinks = (number) => async (dispatch, getState) => {
  let drinks = [];
  for( const filter of getState().Drinks.checkedFilters){
// let filter =  getState().Drinks.checkedFilters[number]
    const { data } = await getFilteredDrinks(filter);
    await drinks.push({ filter, data: data.drinks });
  }
  dispatch(setDrinks(drinks));
};

export const fetchFilters = () => async (dispatch) => {
  const { data } = await getFilters();
  const filters = data.drinks.map((item) => item.strCategory);
  dispatch(setFilters(filters));
  dispatch(setCheckedFilters(filters));
};
