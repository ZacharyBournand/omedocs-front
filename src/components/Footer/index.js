import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <Link to="/mentions-legales">Mentions légales</Link>
      <Link to="/teampage"> Contact </Link>
    </div>
  </footer>
);

export default Footer;
