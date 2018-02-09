import * as actionTypes from './actions';

const initialState = {
    ingredients: null,
    totalPrice: 4
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            const newIngredient = {

            }
            return {
                ...state,
                ingredients: state.ingredients.concat(newIngredient)
            }
        case actionTypes.REMOVE_INGREDIENT:
            const 
    }
};

export default reducer;