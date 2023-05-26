import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
// image
import logo from 'src/assets/img/medical-logo.gif';

const Header = () => (
  <header className="header-top">
    <Link className="center-logo" to="/" style={{ textDecoration: 'none' }}>
      <img className="center-logo__img" src={logo} alt="logo" />
      <div className="center-logo__name">O'Médocs</div>
    </Link>
  </header>
);

export default Header;
