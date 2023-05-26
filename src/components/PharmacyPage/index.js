import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, Redirect } from 'react-router-dom';
import ConfirmationBox from 'src/containers/DialogBoxAddToCart';
import LeftMenu from 'src/containers/LeftMenu';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Box from '@material-ui/core/Box';
import InventoryTable from 'src/containers/Tables/PharmacyPageTable';
import Loading from 'src/components/Loading';
import backgroundImage from 'src/assets/img/pharmacy-back.jpg';
import Accordion from './accordion';

import MapModal from './MapModal';

const PharmacyPage = ({
  establishments,
  isLoading,
  inventory,
  fetchInventory,
  fetchLatLng,
  lat,
  lng,
}) => {
  // je filtre les établissements pour afficher la page d'un établissement
  const { id } = useParams();
  const establishment = establishments.filter(
    (item) => parseInt(id, 10) === item.id
  );
  // Si il n'y a pas d'établissement on se redirige vers la page searchestablishement

  if (!establishment[0]) {
    return <Redirect to="/searchestablishement" />;
  }
  //  fetch l'inventaire du user et les coordonnées en fonction de l'adresse
  useEffect(() => {
    fetchInventory(establishment[0].id);
    fetchLatLng(
      `${establishment[0].address}, ${establishment[0].zip_code} ${establishment[0].city}`
    );
  }, []);

  // state de l'état ouvert ou fermer de la MapModal
  const [open, setOpen] = useState(false);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100vh"
    >
      <Box width="100%" display="flex" id="body">
        <LeftMenu />
        <Box
          style={{
            background: `url(${backgroundImage}) center center / cover`,
          }}
          width="100%"
          minHeight="100vh"
          p={2}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Accordion establishment={establishment} setOpen={setOpen} />

          {isLoading ? (
            <Loading />
          ) : (
            <InventoryTable
              inventory={inventory}
              establishment={establishment}
            />
          )}
        </Box>
      </Box>
      <Footer />
      <ConfirmationBox />
      <MapModal
        open={open}
        setOpen={setOpen}
        lat={lat}
        lng={lng}
        userType={establishment[0].user_type}
      />
    </Box>
  );
};

PharmacyPage.propTypes = {
  establishments: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchInventory: PropTypes.func.isRequired,
  inventory: PropTypes.array,
  fetchLatLng: PropTypes.func.isRequired,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

PharmacyPage.defaultProps = {
  inventory: [],
  lat: null,
  lng: null,
};
export default PharmacyPage;
