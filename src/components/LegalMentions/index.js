import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import './styles.scss';

const LegalMentions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-mentions-page">
      <Header />
      <main className="legal-mentions">
        <article className="legal-mentions__card">
          <h1 className="legal-mentions__title">Mentions légales</h1>

          <section className="legal-mentions__section">
            <h2>1. Éditeur du site</h2>
            <p>
              Le site <Link to="/">O&apos;médocs</Link> est un projet créé par{' '}
              <a
                href="https://github.com/LambertGuastavino"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lambert
              </a>
              ,{' '}
              <a
                href="https://github.com/fmarc39"
                target="_blank"
                rel="noopener noreferrer"
              >
                François
              </a>
              ,{' '}
              <a
                href="https://github.com/Geoffrey-Maillot"
                target="_blank"
                rel="noopener noreferrer"
              >
                Geoffrey
              </a>{' '}
              et{' '}
              <a
                href="https://github.com/ZacharyBournand"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zachary
              </a>
              .
            </p>
            <p>
              Pour toute question ou demande, vous pouvez nous contacter via{' '}
              <Link to="/teampage">la page Contact</Link>.
            </p>
          </section>

          <section className="legal-mentions__section">
            <h2>2. Hébergement</h2>
            <ul className="legal-mentions__hosts">
              <li className="legal-mentions__host-item">
                <p>
                  <strong>Site web et API :</strong>{' '}
                  <a
                    href="https://render.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Render Services, Inc.</strong>
                  </a>
                </p>
                <p>525 Brannan Street, Suite 300, San Francisco, CA 94107, États-Unis</p>
                <p>
                  Contact : <a href="mailto:legal@render.com">legal@render.com</a>
                </p>
              </li>
              <li className="legal-mentions__host-item">
                <p>
                  <strong>Base de données :</strong>{' '}
                  <a
                    href="https://neon.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>Neon, Inc.</strong>
                  </a>
                </p>
                <p>160 Spear Street, Suite 1300, San Francisco, CA 94105, États-Unis</p>
                <p>
                  Contact : <a href="mailto:privacy@neon.tech">privacy@neon.tech</a>
                </p>
              </li>
            </ul>
          </section>

          <section className="legal-mentions__section">
            <h2>3. Caractère démonstratif et responsabilité</h2>
            <p>
              Les données affichées (produits, stocks, établissements, transactions) sont fournies à
              titre illustratif. L&apos;éditeur ne saurait être tenu responsable de l&apos;usage qui
              pourrait être fait des informations présentées sur le site.
            </p>
          </section>

          <section className="legal-mentions__section">
            <h2>4. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, interfaces, graphismes,
              logos et éléments logiciels, hors ressources tierces sous licences respectives)
              relève de la propriété intellectuelle de ses auteurs. Toute reproduction ou
              réutilisation sans autorisation préalable est interdite, sauf exceptions légales.
            </p>
          </section>

          <section className="legal-mentions__section">
            <h2>5. Données personnelles (RGPD)</h2>
            <p>
              Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi Informatique et Libertés,
              les informations saisies sur le site (comptes de démonstration et formulaires) sont
              utilisées uniquement pour le fonctionnement technique de la démonstration et ne sont
              cédées ni vendues à aucun tiers.
            </p>
          </section>

          <section className="legal-mentions__section">
            <h2>6. Stockage local et cookies</h2>
            <p>
              Le site utilise le stockage local du navigateur (<code>localStorage</code>)
              uniquement à des fins techniques strictement nécessaires au fonctionnement de
              l&apos;application (maintien de la session utilisateur et conservation du panier).
              Aucun cookie publicitaire ou de suivi n&apos;est déposé par l&apos;éditeur.
            </p>
          </section>

          <div className="legal-mentions__actions">
            <Link to="/" className="legal-mentions__back">
              Retour à l&apos;accueil
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default LegalMentions;
