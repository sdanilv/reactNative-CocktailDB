const GET_COCKTAILS = "COCKTAIL_DB/COCKTAILS/GET_COCKTAILS";

const initialState = { drinks: {} , filter: "Ordinary Drink"};

const cocktailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COCKTAILS:
      return { ...state, drinks: action.drinks };
    default:
      return state;
  }
};

const setCocktails = (drinks) => ({
  type:GET_COCKTAILS, action: {drinks}
})

const fetchCocktails = (filter="Ordinary Drink") => async dispatch => {
  const {drinks} = await getFilteredCocktails(filter)
  dispatch(setCocktails(drinks))

}
