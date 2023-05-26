// action list
export const DELETE_ROW_FROM_INVENTORY = 'DELETE_ROW_FROM_INVENTORY';
export const SAVE_NEW_QUANTITY_FROM_INVENTORY =
  'SAVE_NEW_QUANTITY_FROM_INVENTORY';
export const HANDLE_CHANGE_QUANTITY_VALUE = 'HANDLE_CHANGE_QUANTITY_VALUE';
export const DELETE_ROW_FROM_STATE = 'DELETE_ROW_FROM_STATE';
export const SAVE_NEW_PRODUCT_IN_INVENTORY = 'SAVE_NEW_PRODUCT_IN_INVENTORY';
export const SUBMIT_ADD_PRODUCT = 'SUBMIT_ADD_PRODUCT';
export const FETCH_INVENTORY = 'FETCH_INVENTORY';
export const SAVE_INVENTORY = 'SAVE_INVENTORY';
export const SAVE_NEW_QUANTITY = 'SAVE_NEW_QUANTITY';
// action creators
export const deleteRowFromInventory = (rowId) => ({
  type: DELETE_ROW_FROM_INVENTORY,
  rowId,
});

export const deleteRowFromState = (rowId) => ({
  type: DELETE_ROW_FROM_STATE,
  rowId,
});

export const saveNewQuantityFromInventory = (fieldValue, fieldId) => ({
  type: SAVE_NEW_QUANTITY_FROM_INVENTORY,
  fieldValue,
  fieldId,
});

export const handleChangeQuantityValue = (value, fieldName) => ({
  type: HANDLE_CHANGE_QUANTITY_VALUE,
  value,
  fieldName,
});

export const saveNewProductInInventory = (drug) => ({
  type: SAVE_NEW_PRODUCT_IN_INVENTORY,
  drug,
});

export const submitAddProduct = () => ({
  type: SUBMIT_ADD_PRODUCT,
});

export const fetchInventory = () => ({
  type: FETCH_INVENTORY,
});

export const saveInventory = (drugs) => ({
  type: SAVE_INVENTORY,
  drugs,
});

export const saveNewQuantity = (NewQuantity, productId) => ({
  type: SAVE_NEW_QUANTITY,
  NewQuantity,
  productId,
});
