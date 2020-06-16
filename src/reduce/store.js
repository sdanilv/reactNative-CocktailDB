import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { drinkReducer } from "./DrinksReducer";

const reducers = combineReducers({ Drinks: drinkReducer });

export const store = createStore(reducers, applyMiddleware(thunk));
