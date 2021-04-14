import { CHANGE_INPUT_VALUE, CHANGE_SELECT_INPUT_VALUE } from 'src/actions/search';

export const initialState = {
  searchProductInputValue: '',
  searchProductSelectValue: 'name',
  searchPharmacyInputValue: '',
  searchPharmacySelectValue: 'auvergne rhone alpes',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      console.log(action.fieldValue, action.fieldName);
      return {
        ...state,
        [action.fieldName]: action.fieldValue,
      };
    case CHANGE_SELECT_INPUT_VALUE:
      return {
        ...state,
        [action.fieldName]: action.fieldValue,
      };
    default:
      return state;
  }
};

export default reducer;
