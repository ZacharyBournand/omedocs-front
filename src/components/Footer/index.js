import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="footer__content">
      <a href="https://www.generer-mentions-legales.com/monfichier-0t1gzrvehlgdd64s25g2rvd8di2bpu.html">Mentions légales</a>
      <Link to="/teampage"> Contact </Link>
    </div>
  </footer>
);

export default Footer;
