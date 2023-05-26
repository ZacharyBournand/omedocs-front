export const ADD_ARTICLE_TO_CART = 'ADD_ARTICLE_TO_CART';
export const DELETE_ARTICLE_FROM_CART = 'DELETE_ARTICLE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const CLOSE_DIALOG_BOX = 'CLOSE_DIALOG_BOX';
export const OPEN_DIALOG_BOX = 'OPEN_DIALOG_BOX';
export const SAVE_ORDER_IN_DB = 'SAVE_ORDER_IN_DB';
export const SAVE_IN_ORDER_HISTORY = 'SAVE_IN_ORDER_HISTORY';
export const SAVE_FETCHED_ORDERS_IN_STATE = 'SAVE_FETCHED_ORDERS_IN_STATE';
export const FECTH_SALES_HISTORY = 'FECTH_SALES_HISTORY';
export const SAVE_FETCHED_SALES_IN_STATE = 'SAVE_FETCHED_SALES_IN_STATE';
export const FETCH_ORDER_HISTORY = 'FETCH_ORDER_HISTORY';
export const INCREASES_ARTICLE_QUANTITY = 'INCREASES_ARTICLE_QUANTITY';
export const DECREASES_ARTICLE_QUANTITY = 'DECREASES_ARTICLE_QUANTITY';
export const CHANGE_ORDER_STATUS = 'CHANGE_ORDER_STATUS';
export const SAVE_ORDER_STATUS_IN_STATE = 'SAVE_ORDER_STATUS_IN_STATE';

export const addArticleToCart = (payload, pharmacyId, pharmacyEmail) => ({
  type: ADD_ARTICLE_TO_CART,
  payload,
  pharmacyId,
  pharmacyEmail,
});

export const deleteArticleFromCart = (articleId) => ({
  type: DELETE_ARTICLE_FROM_CART,
  articleId,
});

export const closeDialogBox = () => ({
  type: CLOSE_DIALOG_BOX,
});

export const openDialogBoxAction = () => ({
  type: OPEN_DIALOG_BOX,
});

export const increasesArticleQuantity = (articleId) => ({
  type: INCREASES_ARTICLE_QUANTITY,
  articleId,
});

export const descreasesArticleQuantity = (articleId) => ({
  type: DECREASES_ARTICLE_QUANTITY,
  articleId,
});

export const saveOrderInDb = (totalPrice) => ({
  type: SAVE_ORDER_IN_DB,
  totalPrice,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const fetchOrderHistory = (userId) => ({
  type: FETCH_ORDER_HISTORY,
  userId,
});

export const fetchSaleHistory = () => ({
  type: FECTH_SALES_HISTORY,
});

export const saveInOrderHistory = (payload) => ({
  type: SAVE_IN_ORDER_HISTORY,
  payload,
});

export const saveFetchedOrdersInState = (payload) => ({
  type: SAVE_FETCHED_ORDERS_IN_STATE,
  payload,
});

export const saveFetchedSalesInState = (payload) => ({
  type: SAVE_FETCHED_SALES_IN_STATE,
  payload,
});

export const changeOrderStatus = (orderId, newStatus) => ({
  type: CHANGE_ORDER_STATUS,
  orderId,
  newStatus,
});

export const saveOrderStatusInState = (orderId, newStatus) => ({
  type: SAVE_ORDER_STATUS_IN_STATE,
  orderId,
  newStatus,
});
