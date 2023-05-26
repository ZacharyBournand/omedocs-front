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
  btn: {
    background: '#008DBA',
    padding: '0.7rem',
    '&:hover': {
      background: '#0368A2',
      color: '#FFF',
    },
    borderRadius: '15px',
  },
}));

const ModalAddProduct = ({
  open, // open modal
  closeModal, // dispatch fonction to close modal
  nameValue, // fieldValue
  cisValue, // fieldValue
  quantityValue, // fieldValue
  priceValue, // fieldValue
  expirationValue, // fieldValue
  onChange, // function to control field
  onSubmit, // function to handle form submit,
  activePopList, // PopList opening boolean
  openPopList, // popList opening function
}) => {
  const classes = useStyles();

  const handlerCloseModal = () => {
    closeModal();
  };

  const handlerOnChange = (evt) => {
    if (
      (evt.target.name === 'name' || evt.target.name === 'cis') &&
      evt.target.value.length >= 4
    ) {
      openPopList();
    }

    onChange(evt.target.value, evt.target.name);
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    onSubmit();
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
        {/* Je n'ouvre la PopList que si il y a plus de 4 caractères */}
        {activePopList && (nameValue.length >= 4 || cisValue.length >= 4) && (
          <PopListApi />
        )}

        <Typography variant="h5" component="h5">
          Ajouter un article
        </Typography>
        <form className={classes.form} onSubmit={handleOnSubmit}>
          <TextField
            className={classes.textField}
            variant="outlined"
            label="Nom du médicament"
            name="name"
            value={nameValue}
            onChange={handlerOnChange}
            required
            autoFocus
            autoComplete="false"
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
          <Button
            color="primary"
            variant="contained"
            type="submit"
            className={classes.btn}
          >
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
  cisValue: PropTypes.string,
  quantityValue: PropTypes.string,
  priceValue: PropTypes.string,
  expirationValue: PropTypes.string,
  activePopList: PropTypes.bool,
  openPopList: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
};

ModalAddProduct.defaultProps = {
  open: false,
  closeModal: () => {},
  onChange: () => {},
  nameValue: '',
  cisValue: null,
  quantityValue: null,
  priceValue: null,
  expirationValue: '',
  activePopList: false,
  openPopList: () => {},
};

export default ModalAddProduct;
