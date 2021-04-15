import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import PopListApi from 'src/containers/PopListApi';

import './styles.scss';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textField: {
    marginTop: '16px',
    marginBottom: '16px',
    width: '260px',
  },
}));

const ModalAddProduct = ({
  open, // open modal
  closeModal, // dispatch fonction to close modal
  nameValue, // fieldValue
  cisValue, // fieldValue
  pathologyValue, // fieldValue
  quantityValue, // fieldValue
  priceValue, // fieldValue
  expirationValue, // fieldValue
  onChange, // function to control field
  activePopList, // PopList opening boolean
  openPopList, // popList opening function
}) => {
  const classes = useStyles();

  const handlerCloseModal = () => {
    closeModal();
  };

  const handlerOnChange = (evt) => {
    if (evt.target.name === 'name') openPopList();
    onChange(evt.target.value, evt.target.name);
  };

  return (
    <Modal
      open={open}
      onClose={handlerCloseModal}
      className={classes.modal}
      disablePortal
      disableEnforceFocus
    >
      <Box
        bgcolor="#fff"
        p={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        maxWidth="400px"
        borderRadius="20px"
        position="relative"
      >
        {activePopList && <PopListApi />}

        <Typography variant="h5" component="h5">
          Rajouter un produit
        </Typography>
        <form className={classes.form}>
          <TextField
            className={classes.textField}
            variant="outlined"
            label="Nom du médicament"
            name="name"
            value={nameValue}
            onChange={handlerOnChange}
            required
            autoFocus
            autoComplete={false}
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            type="number"
            label="Numéro CIS"
            name="cis"
            value={cisValue}
            onChange={handlerOnChange}
            required
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            label="Pathologie"
            name="pathology"
            value={pathologyValue}
            onChange={handlerOnChange}
            required
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            type="number"
            label="Quantité"
            name="quantity"
            value={quantityValue}
            onChange={handlerOnChange}
            required
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            type="number"
            label="Prix unitaire"
            name="price"
            value={priceValue}
            onChange={handlerOnChange}
            required
          />
          <TextField
            className={classes.textField}
            variant="outlined"
            type="date"
            name="expiration"
            value={expirationValue}
            onChange={handlerOnChange}
            required
            label="Date d'expiration"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button color="primary" variant="contained">
            Ajouter
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

ModalAddProduct.propTypes = {
  open: PropTypes.bool,
  closeModal: PropTypes.func,
  onChange: PropTypes.func,
  nameValue: PropTypes.string,
  cisValue: PropTypes.number,
  pathologyValue: PropTypes.string,
  quantityValue: PropTypes.number,
  priceValue: PropTypes.number,
  expirationValue: PropTypes.string,
  activePopList: PropTypes.bool,
  openPopList: PropTypes.func,
};

ModalAddProduct.defaultProps = {
  open: false,
  closeModal: () => {},
  onChange: () => {},
  nameValue: '',
  cisValue: null,
  pathologyValue: '',
  quantityValue: null,
  priceValue: null,
  expirationValue: '',
  activePopList: false,
  openPopList: () => {},
};

export default ModalAddProduct;