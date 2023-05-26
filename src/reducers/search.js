import {
  CHANGE_INPUT_VALUE,
  RESULT_SEARCH_PRODUCT,
  RESULT_SEARCH_ESTABLISHMENT,
  SAVE_INVENTORY_ESTABLISHMENT,
} from 'src/actions/search';

export const initialState = {
  searchProductInputValue: '',
  searchProductSelectValue: 'name',
  searchEstablishmentInputValue: '',
  searchEstablishmentSelectValue: '',
  searchEstablishmentResult: [],
  inventoryEstablishment: [],
  searchProductResult: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_INVENTORY_ESTABLISHMENT:
      return {
        ...state,
        inventoryEstablishment: action.inventory,
      };
    case RESULT_SEARCH_PRODUCT:
      return {
        ...state,
        searchProductResult: action.products,
      };
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.fieldName]: action.fieldValue,
      };
    case RESULT_SEARCH_ESTABLISHMENT: {
      return {
        ...state,
        searchEstablishmentResult: action.establishments,
      };
    }
    default:
      return state;
  }
};

export default reducer;
