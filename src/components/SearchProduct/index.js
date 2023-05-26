// Import REACT
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Import COMPONENTS
import LeftMenu from 'src/containers/LeftMenu';
import Footer from 'src/components/Footer';

// Import from MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import FormControl from '@material-ui/core/FormControl';
import ProductPageTable from 'src/containers/Tables/ProductPageTable';
import Loading from 'src/components/Loading';
import backgroundImage from 'src/assets/img/pharmacy-back.jpg';

// Import CSS
import './styles.scss';

const SearchProduct = ({
  handleChange,
  searchInputValue,
  searchSelectValue,
  submitForm,
  isLoading,
}) => {
  useEffect(() => {
    submitForm();
    handleChange('', 'searchProductInputValue');
  }, []);

  // Gestion du 'onChange' de l'input search et lien avec le containers REDUX
  const handleChangeSearchInput = (event) => {
    // Au 'onChange' on récupère la valeur de l'input et son nom
    handleChange(event.target.value, event.target.name);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    submitForm();
  };
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
                  <InputLabel htmlFor="search-product-input">
                    Nom du médicament
                  </InputLabel>
                  <Input
                    id="search-product-input"
                    onChange={handleChangeSearchInput}
                    value={searchInputValue}
                    name="searchProductInputValue"
                    startAdornment={
                      // eslint-disable-next-line react/jsx-wrap-multilines
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    }
                  />
                </div>
                <FormControl size="medium" style={{ width: '200px' }}>
                  <InputLabel id="typeSelect">Type</InputLabel>
                  <Select
                    labelId="typeSelect"
                    id="typeSelectBtn"
                    value={searchSelectValue}
                    name="searchProductSelectValue"
                    onChange={handleChangeSearchInput}
                  >
                    <MenuItem value="name">Nom</MenuItem>
                    <MenuItem value="cis">CIS</MenuItem>
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
            {isLoading ? <Loading /> : <ProductPageTable />}
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

SearchProduct.propTypes = {
  handleChange: PropTypes.func.isRequired,
  searchInputValue: PropTypes.string.isRequired,
  searchSelectValue: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default SearchProduct;
