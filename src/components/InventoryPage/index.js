// Import React
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Import from MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Footer from 'src/components/Footer';
import LeftMenu from 'src/containers/LeftMenu';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ModalAddProduct from 'src/containers/ModalAddProduct';
import Loading from 'src/components/Loading';
import backgroundImage from 'src/assets/img/pharmacy-back.jpg';

// Import COMPONENTS
import InventoryTable from 'src/containers/Tables/InventoryTable';

// Import CSS
import './styles.scss';

const useStyles = makeStyles(() => ({
  btn: {
    background: '#008DBA',
    '&:hover': {
      background: '#0368A2',
      color: '#FFF',
    },
    borderRadius: '15px',
  },
}));

const InventoryPage = ({
  inventoryData,
  handleAddArticle,
  fetchInventory,
  isLoading,
}) => {
  // Gestion du clique sur le boutton 'ajouter un article' pour l'ouverture de la modal
  console.log(inventoryData);
  inventoryData.map((drug) => console.log(drug));

  useEffect(() => {
    fetchInventory();
  }, []);

  const handleAddArticleBtn = () => {
    handleAddArticle();
  };
  const classes = useStyles();
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100vh"
      >
        <Box height="100%" width="100%" display="flex" id="body">
          <LeftMenu />
          <Box
            height="100vh"
            width="100%"
            p={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
            style={{
              background: `url(${backgroundImage}) center center / cover`,
            }}
          >
            <Box
              display="flex"
              width="80%"
              mb={4}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Button
                variant="contained"
                onClick={handleAddArticleBtn}
                color="primary"
                size="large"
                startIcon={<AddCircleOutlineIcon />}
                className={classes.btn}
              >
                Ajouter un article
              </Button>
            </Box>
            {inventoryData.length !== 0 ? (
              <>{isLoading ? <Loading /> : <InventoryTable />}</>
            ) : (
              <div className="up-arrow">
                <p>Votre inventaire est vide.</p>
                <p>Commencer à le remplir</p>
              </div>
            )}
          </Box>
          <ModalAddProduct />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

InventoryPage.propTypes = {
  inventoryData: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleAddArticle: PropTypes.func.isRequired,
  fetchInventory: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default InventoryPage;
