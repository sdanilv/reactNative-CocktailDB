import { combineReducers } from "redux";

import DrinksReducer from "./DrinksReducer";
import FiltersReducer from "./FIltersReducer";
import { configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
  Drinks: DrinksReducer,
  Filters: FiltersReducer,
});
export default configureStore({ reducer: reducers });
