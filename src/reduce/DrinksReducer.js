import { getFilteredDrinks } from "../api/api";

const FETCH_DRINKS = "DRINK_DB/DRINKS/FETCH_DRINKS";
const SET_SECTION_COUNT = "DRINK_DB/DRINKS/SET_SECTION_COUNT";
const CLEAR_DRINKS = "DRINK_DB/DRINKS/CLEAR_DRINKS";

const initialState = {
  sectionCount: 0,
  drinks: [],
};

export const drinkReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DRINKS:
      return { ...state, drinks: [...state.drinks, action.drinks] };
    case CLEAR_DRINKS:
      return { ...state, drinks: [], sectionCount: 0 };
    case SET_SECTION_COUNT:
      return { ...state, sectionCount: action.count };
    default:
      return state;
  }
};

const addDrinks = (drinks) => ({
  type: FETCH_DRINKS,
  drinks,
});
export const clearDrinks = () => ({
  type: CLEAR_DRINKS,
});

export const setSectionCountAC = (count) => ({
  type: SET_SECTION_COUNT,
  count,
});

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
  if(!filter) return ;
  const { data } = await getFilteredDrinks(filter);
  dispatch(addDrinks({ filter, data: data.drinks }));
};
