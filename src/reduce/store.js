import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { drinkReducer } from "./DrinksReducer";
import {filtersReducer} from "./FIltersReducer";

const reducers = combineReducers({ Drinks: drinkReducer, Filters:filtersReducer });

export const store = createStore(reducers, applyMiddleware(thunk));
