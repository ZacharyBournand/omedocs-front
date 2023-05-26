// Import REACT
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Import COMPONENTS
import LeftMenu from 'src/containers/LeftMenu';

import Footer from 'src/components/Footer';
import Box from '@material-ui/core/Box';

// Import MATERIAL UI
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import FormControl from '@material-ui/core/FormControl';
import PharmacyTable from 'src/containers/Tables/SearchPharmacyResultTable';
import Loading from 'src/components/Loading';

// Import CSS
import './styles.scss';

// import Image
import backgroundImage from 'src/assets/img/pharmacy-back.jpg';

// Mise en place du style material-UI
const useStyles = makeStyles(() => ({
  btn: {
    background: '#008DBA',
    '&:hover': {
      background: '#0368A3',
      color: '#FFF',
    },
    borderRadius: '15px',
  },
}));

const SearchPharmacy = ({
  handleChange,
  searchInputValue,
  searchSelectValue,
  submitForm,
  isLoading,
}) => {
  // Gestion du 'onChange' de l'input search et lien avec le containers REDUX
  const handleChangeInput = (event) => {
    handleChange(event.target.value, event.target.name);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    submitForm();
  };
  // A l'affichage du composant, affiche tout les établissement, et vide les champs de recherche
  useEffect(() => {
    submitForm();
    handleChange('', 'searchEstablishmentInputValue');
    handleChange('', 'searchEstablishmentSelectValue');
  }, []);

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
            style={{
              background: `url(${backgroundImage}) center center / cover`,
            }}
            height="100vh"
            width="100%"
            p={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              display="flex"
              justifyContent="center"
              p={3}
              mb={4}
              bgcolor="white"
              borderRadius="40px"
              boxShadow={3}
            >
              <form autoComplete="off" onSubmit={handleOnSubmit}>
                <div>
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Votre recherche ici
                  </InputLabel>
                  <Input
                    id="input-with-icon-adornment"
                    name="searchEstablishmentInputValue"
                    onChange={handleChangeInput}
                    value={searchInputValue}
                    startAdornment={
                      // eslint-disable-next-line react/jsx-wrap-multilines
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    }
                  />
                </div>
                <FormControl size="medium" style={{ width: '300px' }}>
                  <InputLabel id="typeSelect">Région</InputLabel>
                  <Select
                    labelId="typeSelect"
                    id="typeSelectBtn"
                    name="searchEstablishmentSelectValue"
                    value={searchSelectValue}
                    onChange={handleChangeInput}
                  >
                    <MenuItem value="Toutes les régions">
                      Toutes les régions
                    </MenuItem>
                    <MenuItem value="Auvergne-Rhône-Alpes">
                      Auvergne-Rhône-Alpes
                    </MenuItem>
                    <MenuItem value="Bourgogne-Franche-Comté">
                      Bourgogne-Franche-Comté
                    </MenuItem>
                    <MenuItem value="Bretagne">Bretagne</MenuItem>
                    <MenuItem value="Centre-Val de Loire">
                      Centre-Val de Loire
                    </MenuItem>
                    <MenuItem value="Corse">Corse</MenuItem>
                    <MenuItem value="Grand Est">Grand Est</MenuItem>
                    <MenuItem value=">Hauts-de-France">
                      Hauts-de-France
                    </MenuItem>
                    <MenuItem value="Ile-de-France">Ile-de-France</MenuItem>
                    <MenuItem value="Normandie">Normandie</MenuItem>
                    <MenuItem value="Nouvelle-Aquitaine">
                      Nouvelle-Aquitaine
                    </MenuItem>
                    <MenuItem value="Occitanie">Occitanie</MenuItem>
                    <MenuItem value="Pays de la Loire">
                      Pays de la Loire
                    </MenuItem>
                    <MenuItem value="Provence-Alpes-Côte d’Azur">
                      Provence-Alpes-Côte d’Azur
                    </MenuItem>
                  </Select>
                </FormControl>
                <Button
                  className={classes.btn}
                  type="submit"
                  variant="contained"
                  color="primary"
                  endIcon={<CheckIcon />}
                >
                  Valider
                </Button>
              </form>
            </Box>
            {isLoading ? <Loading /> : <PharmacyTable />}
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

SearchPharmacy.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchInputValue: PropTypes.string,
  searchSelectValue: PropTypes.string,
  submitForm: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

SearchPharmacy.defaultProps = {
  searchInputValue: '',
  searchSelectValue: '',
};

export default SearchPharmacy;
