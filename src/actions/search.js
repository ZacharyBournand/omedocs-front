// --ACTIONS LIST-- //

// onChange
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const CHANGE_SELECT_INPUT_VALUE = 'CHANGE_SELECT_INPUT_VALUE';

// search product
export const SEARCH_PRODUCT = 'SEARCH_PPRODUCT';
export const RESULT_SEARCH_PRODUCT = 'RESULT_SEARCH_PRODUCT';

// search establishment
export const SEARCH_ESTABLISHMENT = 'SEARCH_ESTABLISHMENT';
export const RESULT_SEARCH_ESTABLISHMENT = 'RESULT_SEARCH_ESTABLISHMENT';

// inventory establishment
export const FETCH_INVENTORY_ESTABLISHMENT = 'FETCH_INVENTORY_ESTABLISHMENT';
export const SAVE_INVENTORY_ESTABLISHMENT = 'SAVE_INVENTORY_ESTABLISHMENT';

// --ACTIONS CREATOR-- //
export const changeInputValue = (fieldValue, fieldName) => ({
  type: CHANGE_INPUT_VALUE,
  fieldValue,
  fieldName,
});

export const searchProduct = () => ({
  type: SEARCH_PRODUCT,
});

export const resultSearchProduct = (products) => ({
  type: RESULT_SEARCH_PRODUCT,
  products,
});

export const searchEstablishment = () => ({
  type: SEARCH_ESTABLISHMENT,
});

export const resultSearchEstablishment = (establishments) => ({
  type: RESULT_SEARCH_ESTABLISHMENT,
  establishments,
});

export const fetchInventoryEstablishment = (id) => ({
  type: FETCH_INVENTORY_ESTABLISHMENT,
  id,
});

export const saveInventoryEstablishment = (inventory) => ({
  type: SAVE_INVENTORY_ESTABLISHMENT,
  inventory,
});
