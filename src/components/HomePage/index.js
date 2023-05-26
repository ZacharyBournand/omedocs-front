// Import React
import React, { useState } from 'react';

// Import COMPOMENTS
import Footer from 'src/components/Footer';

// Inport NPM
import { InView } from 'react-intersection-observer';
import { HiMenu } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import classNames from 'classnames';

// image
import logo from 'src/assets/img/medical-logo.gif';
import pharmacy from 'src/assets/img/pharmacie.svg';
import hopital from 'src/assets/img/hopital.svg';
import money from 'src/assets/img/bank.svg';
import idea from 'src/assets/img/puzzle.svg';
import scrollBtn from 'src/assets/img/scroll.svg';
import upArrow from 'src/assets/img/up-arrow.svg';
import screen1 from 'src/assets/img/screen-add-product.jpg';
import screen2 from 'src/assets/img/screen-page-establishment.jpg';
import caract2 from 'src/assets/img/home-caracters/Calque_2.png';
import caract3 from 'src/assets/img/home-caracters/Calque_3.png';
import caract4 from 'src/assets/img/home-caracters/Calque_4.png';
import caract5 from 'src/assets/img/home-caracters/Calque_5.png';

// Import CSS
import './styles.scss';

const useStyles = makeStyles(() => ({
  button: {
    background: '#008DBA',
    color: '#F3E9D2',
    '&:hover': {
      background: '#0368A3',
    },
    borderRadius: '30px',
    padding: '.8rem',
    fontSize: '1rem',
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const [active, setActive] = useState(false);
  // Hooks qui va permettre l'apparition de scroll-to-top-btn
  const [visible, setVisible] = useState(false);

  const activeMenu = () => {
    setActive(!active);
  };

  // Gestion du click sur le scroll-down btn
  const handleScrollDownBtn = () => {
    const pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
  };

  // Gestion de l'apparition du scroll-top-btn
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1500) {
      setVisible(true);
    } else if (scrolled <= 1500) {
      setVisible(false);
    }
  };

  // Gestion du click sur le croll-up btn
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Seuil de déclanchement de l'intersection observer
  const threshold = 0.2;

  // Ajout de l'écouteur d'évènement sur le scroll de la page
  window.addEventListener('scroll', toggleVisible);

  return (
    <div className={classNames('homepage', { 'homepage--fixed': active })}>
      <header className="header">
        <div className="logo">
          <img className="logo__img" src={logo} alt="logo" />
          <div className="logo__name">O'Médocs</div>
        </div>
        <div className="header__navigation">
          <nav className={classNames('navbar', { isActive: active })}>
            <a className="navbar__link" href="#goal">
              Notre but
            </a>
            <a className="navbar__link" href="#why">
              Pourquoi
            </a>
            <a className="navbar__link" href="#services">
              Nos services
            </a>
            <a className="navbar__link" href="#">
              Nous contacter
            </a>
            <Link className="navbar__link navbar__link--connexion" to="/login">
              Connexion
            </Link>
          </nav>
          <button className="header__hamburger" type="button" onClick={activeMenu}>
            {active ? <GrClose size="2rem" /> : <HiMenu size="2.5rem" />}
          </button>
        </div>
        <div className="animated-title">
          <div className="text-top">
            <div style={{ width: '100%' }}>
              <span>Lutter contre</span>
              <span>le gaspillage</span>
            </div>
          </div>
          <div className="text-bottom">
            <div>des médicaments</div>
          </div>
        </div>
        <a onClick={handleScrollDownBtn}>
          <img src={scrollBtn} alt="scroll-btn" className="scroll-btn" />
        </a>
        <div className="header__login-btn">
          <Link className="login" to="/login" style={{ textDecoration: 'none' }}>
            <Button className={classes.button} variant="contained" color="primary" size="large">
              Connexion/ Inscription
            </Button>
          </Link>
        </div>
        <a onClick={scrollToTop}>
          <img src={upArrow} alt="scroll-btn" className={visible ? 'showBtn' : 'scroll-top-btn'} />
        </a>
      </header>

      <div className="goal" id="goal">
        <div className="goal__header">
          <h2 className="goal__header--title"> Notre But</h2>
        </div>
        <InView triggerOnce="true" threshold={threshold}>
          {({ inView, ref }) => (
            <div ref={ref} className={inView ? 'goal__content' : 'goal__content-hide'}>
              <div>
                <img src={caract2} alt="caractere-img" className="goal__content--img" />
                <img src={caract3} alt="caractere-img" className="goal__content--img" />
              </div>
              <p className="goal__content--text">
                Mettre en relation les professionnels de la santé pour lutter contre le gaspillage
                des médicaments.
              </p>
              <div>
                <img src={caract4} alt="caractere-img" className="goal__content--img" />
                <img src={caract5} alt="caractere-img" className="goal__content--img" />
              </div>
            </div>
          )}
        </InView>
        <a onClick={handleScrollDownBtn}>
          <img src={scrollBtn} alt="scroll-btn" className="scroll-btn" />
        </a>
      </div>
      <div className="why" id="why">
        <div className="why__header">
          <h2 className="why__header--title">Pourquoi ?</h2>
        </div>
        <InView triggerOnce="true" threshold={threshold}>
          {({ inView, ref }) => (
            <div className={inView ? 'why__content' : 'why__content__hide'} ref={ref}>
              <div className="why__content--card">
                <img className="why__content--card-img" src={pharmacy} alt="pharmacy" />
                <p className="why__content--card-text">
                  Actuellement en France, les pharmacies n'ont pas le droit de vendre des
                  médicaments dont la date de péremption est inférieure de 3 à 6 mois.
                </p>
              </div>
              <div className="why__content--card">
                <img className="why__content--card-img" src={money} alt="money" />
                <p className="why__content--card-text">
                  Conséquence, les stocks sont détruits. En moyenne, un pharmacien détruit pour 15
                  000€ de médicaments par ans sans compter les tonnes de déchets que cela
                  représente.
                </p>
              </div>
              <div className="why__content--card">
                <img className="why__content--card-img" src={hopital} alt="hopital" />
                <p className="why__content--card-text">
                  A contrario, les hôpitaux peuvent continuer à prescrire les médicaments jusqu'à
                  péremption pendant la durée de séjour d'un patient.
                </p>
              </div>
              <div className="why__content--card">
                <img className="why__content--card-img" src={idea} alt="idea" />
                <p className="why__content--card-text">
                  Notre solution:
                  <br />
                  O'médocs, une plateforme qui met en relation pharmaciens et hôpitaux. Les stocks
                  invendables seront mis sur la plateforme par les pharmacies pour que les hôpitaux
                  puissent les acheter à prix réduit.
                </p>
              </div>
            </div>
          )}
        </InView>

        <a onClick={handleScrollDownBtn}>
          <img src={scrollBtn} alt="scroll-btn" className="scroll-btn" />
        </a>
      </div>
      <div className="services" id="services">
        <div className="services__header">
          <h2 className="services__header--title"> Nos services</h2>
        </div>
        <div className="services__content">
          <InView triggerOnce="true" threshold={threshold}>
            {({ inView, ref }) => (
              <div className={inView ? 'content-top' : 'content-top__right'} ref={ref}>
                <p className="content-top__text">
                  Gérer votre stock de médicaments invendables et mettez le à disposition sur notre
                  plateforme
                </p>
                <div className="content-top__img">
                  {' '}
                  <img src={screen1} alt="screen-add-product" />
                </div>
              </div>
            )}
          </InView>

          <InView triggerOnce="true" threshold={threshold}>
            {({ inView, ref }) => (
              <div className={inView ? 'content-bottom' : 'content-bottom__left'} ref={ref}>
                <div className="content-bottom__img">
                  {' '}
                  <img src={screen2} alt="sreen-page-establishment" />
                </div>
                <p className="content-bottom__text">
                  Consulter la liste de médicaments disponibles sur la plateforme, rechercher une
                  pharmacie et consulter son stock
                </p>
              </div>
            )}
          </InView>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
