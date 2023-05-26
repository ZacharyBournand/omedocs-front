// ACTION LIST
export const CLOSE_MODAL_PRODUCT = 'CLOSE_MODAL_PRODUCT';
export const OPEN_MODAL_PRODUCT = 'OPEN_MODAL_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const OPEN_VALIDATION_CHANGE_MODAL = 'OPEN_VALIDATION_CHANGE_MODAL';
export const CLOSE_VALIDATION_CHANGE_MODAL = 'CLOSE_VALIDATION_CHANGE_MODAL';
export const OPEN_ERROR_INPUT_VALIDATION = 'OPEN_ERROR_INPUT_VALIDATION';
export const CLOSE_ERROR_INPUT_VALIDATION = 'CLOSE_ERROR_INPUT_VALIDATION';
// PopList
export const CLOSE_POP_LIST_API = 'CLOSE_POP_LIST_API';
export const OPEN_POP_LIST_API = 'OPEN_POP_LIST_API';
export const APPLY_INFO_DRUGS_API = 'APPLY_INFO_DRUGS_API';
// ouverture/fermeture page inscription
export const OPEN_CLOSE_ACCORDION = 'OPEN_CLOSE_ACCORDION';
// Loading
export const ON_OFF_LOADING = 'ON_OFF_LOADING';
// ouverture / fermeture LeftMenu
export const OPEN_CLOSE_MENU = 'OPEN_CLOSE_MENU';
// Count
export const FETCH_COUNT = 'FETCH_COUNT';
export const SAVE_COUNT = 'SAVE_COUNT';

// ACTION CREATORS
export const closeModalProduct = () => ({
  type: CLOSE_MODAL_PRODUCT,
});

export const openModalProduct = () => ({
  type: OPEN_MODAL_PRODUCT,
});

export const addProduct = (value, field) => ({
  type: ADD_PRODUCT,
  field,
  value,
});

export const closeSnackbar = () => ({
  type: CLOSE_SNACKBAR,
});

export const openSnackBar = (message, typeColor) => ({
  type: OPEN_SNACKBAR,
  message,
  typeColor,
});

export const openValidationChangeModal = () => ({
  type: OPEN_VALIDATION_CHANGE_MODAL,
});

export const closeValidationChangeModal = () => ({
  type: CLOSE_VALIDATION_CHANGE_MODAL,
});

export const openErrorInputValidation = (message) => ({
  type: OPEN_ERROR_INPUT_VALIDATION,
  message,
});

export const closeErrorInputValidation = () => ({
  type: CLOSE_ERROR_INPUT_VALIDATION,
});

export const closePopListApi = () => ({
  type: CLOSE_POP_LIST_API,
});

export const openPopListApi = () => ({
  type: OPEN_POP_LIST_API,
});

export const applyInfoDrugsApi = (name, cis) => ({
  type: APPLY_INFO_DRUGS_API,
  name,
  cis,
});

export const closeOpenAccordion = () => ({
  type: OPEN_CLOSE_ACCORDION,
});

export const onOffLoading = () => ({
  type: ON_OFF_LOADING,
});

export const openCloseMenu = () => ({
  type: OPEN_CLOSE_MENU,
});

export const fetchCount = () => ({
  type: FETCH_COUNT,
});

export const saveCount = (count) => ({
  type: SAVE_COUNT,
  count,
});
