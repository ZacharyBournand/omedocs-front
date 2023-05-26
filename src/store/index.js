import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import auth from 'src/midlewares/auth';
import inventory from 'src/midlewares/inventory';
import search from 'src/midlewares/search';
import inscription from 'src/midlewares/inscription';
import map from 'src/midlewares/map';
import count from 'src/midlewares/count';
import cart from 'src/midlewares/cart';
import sendMail from 'src/midlewares/sendMail';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// On liste les middleware dans "applyMiddleware"
const enhancers = composeEnhancers(
  applyMiddleware(auth, inscription, cart, inventory, search, map, count, sendMail),
);

const store = createStore(reducer, enhancers);

export default store;
