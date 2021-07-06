// Import React
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import store from 'src/store';
// J'importe la fonction permetant de sauvegarder dans le localStorage
import { saveState } from 'src/locaStorage';
// Import react-router-dom
import { Switch, Route, Redirect } from 'react-router-dom';

// Import COMPONENTS
import HomePage from 'src/components/HomePage';
import SearchProduct from 'src/containers/SearchProduct';
import SearchPharmachy from 'src/containers/SearchPharmacy';
import ProfilPage from 'src/containers/ProfilPage';
import InventoryPage from 'src/containers/InventoryPage';
import PharmacyPage from 'src/containers/PharmacyPage';
import LoginForm from 'src/containers/LoginForm';
// import ResetPassword from 'src/containers/ForgotPassword/';
import TeamPage from 'src/containers/TeamPage';
import Cart from 'src/containers/CartPage/';
import Page404 from 'src/components/404';
import SnackBar from 'src/containers/SnackBar';
import Home from 'src/containers/Home';
import Checkout from 'src/components/Stripe/Checkout';
import Success from 'src/components/Stripe/Success';
import Canceled from 'src/components/Stripe/Canceled';
import OrderHistory from 'src/components/HistoryPage';
import SalesHistory from 'src/components/SalesPage/index';

import './styles.scss';
import { DonutLargeSharp } from '@material-ui/icons';

const App = ({ logged, rehydrate }) => {
  useEffect(() => {
    rehydrate();
  }, []);

  // Sauvegarde du state dans le local storage pour pouvoir faire perssisté le panier
  store.subscribe(() => {
    saveState({
      cart: store.getState().cart.cart,
      pharmacyToOrder: store.getState().cart.pharmacyToOrder,
    });
  });

  return (
    <div className="app">
      <SnackBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">{logged ? <Redirect to="/home" /> : <LoginForm />}</Route>
        <Route exact path="/home">
          {!logged ? <Redirect to="/" /> : <Home />}
        </Route>
        <Route path="/profil">{!logged ? <Redirect to="/" /> : <ProfilPage />}</Route>
        <Route path="/inventory">{!logged ? <Redirect to="/" /> : <InventoryPage />}</Route>
        <Route path="/establishment/:id">{!logged ? <Redirect to="/" /> : <PharmacyPage />}</Route>
        <Route path="/searchproduct">{!logged ? <Redirect to="/" /> : <SearchProduct />}</Route>
        <Route path="/searchestablishement">
          {!logged ? <Redirect to="/" /> : <SearchPharmachy />}
        </Route>
        <Route path="/cart">{!logged ? <Redirect to="/" /> : <Cart />}</Route>
        <Route exact path="/history">
          {!logged ? <Redirect to="/" /> : <OrderHistory />}
        </Route>
        <Route exact path="/sale">
          {!logged ? <Redirect to="/" /> : <SalesHistory />}
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/canceled">
          <Canceled />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/teampage">
          <TeamPage />
        </Route>

        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
};

App.propTypes = {
  logged: PropTypes.bool.isRequired,
  rehydrate: PropTypes.func.isRequired,
};

// == Export
export default App;
