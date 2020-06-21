import { createSlice } from "@reduxjs/toolkit";
import { getRecipe } from "../api/api";

const initialState = {
  recipe: {},
};

const recipeReducer = createSlice({
  name: "Recipe",
  initialState,
  reducers: {
    setRecipe(state, action) {
      state.recipe = action.payload;
    },
    clearRecipe(state) {
      state.recipe = {};
    },
  },
});

const { setRecipe, clearRecipe } = recipeReducer.actions;

export const fetchRecipe = (id) => async (dispatch) => {
  dispatch(clearRecipe());
  const { data } = await getRecipe(id);
  const recipe = await data.drinks[0];
  dispatch(setRecipe(recipe));
};

export default recipeReducer.reducer;
