import React from 'react';
import LeftMenu from 'src/components/LeftMenu';
import PropTypes from 'prop-types';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import './styles.scss';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

const ProfilPage = ({ phoneNumer, establishment, email, rpss, city, adress, zipCode }) => (
  <>
    <Header />
    <Box display="flex" flexDirection="column" justifyContent="space-between" height="100vh">
      <Box height="100%" width="100%" display="flex" id="body">
        <LeftMenu />
        <Box
          bgcolor="#C6C6C6"
          height="100%"
          width="100%"
          p={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box p={8} bgcolor="white" boxShadow={3} borderRadius="10px" className="profil-box">
            <h1 className="profil-box__main-title">Vos informations</h1>
            <div className="profil-box__content">
              <div className="profil-box__content-elt">
                <p className="profil-box__content-elt__infos">Nom de l'organisme:</p>
                <p>{establishment}</p>
              </div>
              <Divider />
              <div className="profil-box__content-elt">
                <p className="profil-box__content-elt__infos">e-mail:</p>
                <IconButton aria-label="delete">
                  <EditIcon />
                </IconButton>
                <p>{email}</p>
              </div>
              <Divider />
              <div className="profil-box__content-elt">
                <p className="profil-box__content-elt__infos">N° de téléphonne:</p>
                <IconButton aria-label="delete">
                  <EditIcon />
                </IconButton>
                <p>{phoneNumer}</p>
              </div>
              <Divider />
              <div className="profil-box__content-elt">
                <p className="profil-box__content-elt__infos">RPSS:</p>
                <p>{rpss}</p>
              </div>
              <Divider />
              <div className="profil-box__content-elt">
                <p className="profil-box__content-elt__infos">Ville:</p>
                <p>{city}</p>
              </div>
              <Divider />
              <div className="profil-box__content-elt">
                <p className="profil-box__content-elt__infos">Adresse:</p>
                <p>{adress}</p>
              </div>
              <Divider />
              <div className="profil-box__content-elt">
                <p className="profil-box__content-elt__infos">Code postal:</p>
                <p>{zipCode}</p>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
    <Footer />
  </>
);

ProfilPage.propTypes = {
  phoneNumer: PropTypes.string.isRequired,
  establishment: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  rpss: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  zipCode: PropTypes.number.isRequired,
};

export default ProfilPage;
