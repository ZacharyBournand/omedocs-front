import React from 'react';
import HomePage from 'src/components/HomePage';
import Footer from 'src/components/Footer';
import SearchProduct from 'src/containers/SearchProduct';
import SearchPharmachy from 'src/containers/SearchPharmacy';
import ModalAddProduct from 'src/containers/ModalAddProduct';
import ProfilPage from 'src/containers/ProfilPage';
import LoginForm from 'src/components/LoginForm';

import './styles.scss';

// == Composant
const App = () => (
  <div className="app">
    <HomePage />
    <SearchProduct />
    <SearchPharmachy />
    <ModalAddProduct />
    <ProfilPage />
    <Footer />
    <LoginForm />
  </div>
);

// == Export
export default App;