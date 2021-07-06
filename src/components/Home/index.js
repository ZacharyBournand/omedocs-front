import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import LeftMenu from 'src/containers/LeftMenu';
import Footer from 'src/components/Footer';
import Box from '@material-ui/core/Box';

import './styles.scss';

const Home = ({ productsCount, establishmentsCount, fetchCount }) => {
  // Je récupère le count des pharmacy

  let countPharmacy = null;
  let countHospital = null;
  if (establishmentsCount !== 0) {
    const pharmacy = establishmentsCount.filter(
      (establishment) => establishment.user_type === 'pharmacy',
    );
    countPharmacy = pharmacy[0]?.count;

    // je récupère le count des hopitaux
    const hospital = establishmentsCount.filter(
      (establishment) => establishment.user_type === 'hospital',
    );
    countHospital = hospital[0]?.count;
  }

  useEffect(() => {
    fetchCount();
  }, []);
  return (
    <>
      <Box display="flex" flexDirection="column" justifyContent="space-between" height="100vh">
        <Box height="100%" width="100%" display="flex" id="body">
          <LeftMenu />
          <div className="container">
            <div className="image kenburns-top-right">
              <div className="content">
                <div className="title-animation">
                  <div className="tracking-in-expand-fwd-top">BIENVENUE </div>
                  <div className="tracking-in-contract-bck-bottom"> SUR O'MEDOCS</div>
                </div>
                <div className="count-container text-focus-in">
                  <p className="count-container__text">Actuellement sur le site:</p>
                  <div className="count">
                    <div className="count__pharmacy ">
                      <span>{countPharmacy}</span>
                      {countPharmacy > 1 ? 'Pharmacies' : 'Pharmacie'}
                    </div>
                    <div className="count__hospital ">
                      <span>{countHospital}</span>
                      {countHospital > 1 ? 'Hôpitaux' : 'Hôpital'}
                    </div>
                    <div className="count__product ">
                      <span>{productsCount}</span>
                      {productsCount > 1 ? 'Médicaments' : 'Médicament'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
        <Footer />
      </Box>
    </>
  );
};
Home.propTypes = {
  productsCount: PropTypes.string,
  establishmentsCount: PropTypes.array,
  fetchCount: PropTypes.func.isRequired,
};

Home.defaultProps = {
  productsCount: '',
  establishmentsCount: [],
};

export default Home;
