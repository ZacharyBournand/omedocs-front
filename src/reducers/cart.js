import {
  ADD_ARTICLE_TO_CART,
  DELETE_ARTICLE_FROM_CART,
  CLOSE_DIALOG_BOX,
  OPEN_DIALOG_BOX,
  INCREASES_ARTICLE_QUANTITY,
  DECREASES_ARTICLE_QUANTITY,
  CLEAR_CART,
} from 'src/actions/cart';

// J'importe la fonction permettant de charger le localStrage
import { loadState } from 'src/locaStorage';

// J'enregistre le localStrage dans une constate
const persistedState = loadState();

// Mise en place de l'initialState de l'application
export const initialState = {
  cart: persistedState ? persistedState.cart : [],
  pharmacyToOrder: persistedState ? persistedState.pharmacyToOrder : null,
  validationBox: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
        pharmacyToOrder: null,
      };
    case ADD_ARTICLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        pharmacyToOrder: action.pharmacyId,
      };
    case DELETE_ARTICLE_FROM_CART:
      return {
        ...state,
        cart: [...state.cart.filter((article) => Number(article.id) !== Number(action.articleId))],
        pharmacyToOrder: state.cart.length === 1 ? null : state.pharmacyToOrder,
      };

    case CLOSE_DIALOG_BOX:
      return {
        ...state,
        validationBox: false,
      };
    case OPEN_DIALOG_BOX:
      return {
        ...state,
        validationBox: true,
      };
    case DECREASES_ARTICLE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (Number(item.id) === Number(action.articleId)) {
            if (item.quantityToBuy === 0) {
              return item;
            }
            item.quantityToBuy -= 1;
          }
          return item;
        }),
      };
    case INCREASES_ARTICLE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (
            Number(item.id) === Number(action.articleId) &&
            Number(item.quantityToBuy < item.quantity)
          ) {
            item.quantityToBuy++;
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

export default reducer;
