import { combineReducers } from "redux";

import DrinksReducer from "./DrinksReducer";
import FiltersReducer from "./FIltersReducer";
import RecipeReducer from "./RecipeReducer";
import { configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
  Drinks: DrinksReducer,
  Filters: FiltersReducer,
  Recipe: RecipeReducer
});
export default configureStore({ reducer: reducers });
