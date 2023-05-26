import {
  DELETE_ROW_FROM_STATE,
  SAVE_NEW_PRODUCT_IN_INVENTORY,
  SAVE_INVENTORY,
  SAVE_NEW_QUANTITY,
} from 'src/actions/inventory';

export const initialState = {
  drugs: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_INVENTORY:
      return {
        ...state,
        drugs: [...action.drugs],
      };
    case SAVE_NEW_PRODUCT_IN_INVENTORY:
      return {
        ...state,
        drugs: [...state.drugs, action.drug],
      };
    case DELETE_ROW_FROM_STATE:
      return {
        ...state,
        drugs: state.drugs.filter((article) => article.id !== action.rowId),
      };
    case SAVE_NEW_QUANTITY:
      return {
        ...state,
        drugs: state.drugs.map((article) => {
          if (article.id === Number(action.productId)) {
            article.quantity = action.NewQuantity;
            return article;
          }
          return article;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
