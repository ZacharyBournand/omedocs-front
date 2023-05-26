import { combineReducers } from 'redux';

import userReducer from './user';
import searchReducer from './search';
import utilsReducer from './utils';
import inventoryReducer from './inventory';
import cartReducer from './cart';
import contactUsReducer from './contactUs';

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  utils: utilsReducer,
  inventory: inventoryReducer,
  cart: cartReducer,
  contactUs: contactUsReducer,
});

export default rootReducer;
