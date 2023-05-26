import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from 'src/assets/img/logo.svg';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Accordion from './SignUp';

// == Import
import './styles.scss';

const useStyles = makeStyles({
  input: {
    width: '300px',
    marginBottom: '20px ',
  },
  button: {
    background: '#008DBA',
    color: '#FFF',
    '&:hover': {
      background: '#0368A3',
    },
    borderRadius: '10px',
    padding: '.8rem',
    fontSize: '1rem',
  },
});

// == Composant
const LoginForm = ({
  emailConnexion,
  passwordConnexion,
  submitLogin,
  handleChange,
  email,
  confirmEmail,
  password,
  confirmPassword,
  establishment,
  address,
  city,
  zipCode,
  region,
  phoneNumber,
  rpps,
  userType,
  submitSubscribe,
  errorMessage,
  errorMessageIsOpen,
  closeErrorMessage,
  isExpanded,
  closeOpenAccordion,
}) => {
  const classes = useStyles();

  const handleChangeInput = (event) => {
    handleChange(event.target.value, event.target.name);
  };
  const handleOnSubmitLogin = (event) => {
    event.preventDefault();
    submitLogin();
  };

  return (
    <>
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        minHeight="calc(100vh - 99px)"
      >
        <Box
          width="100%"
          display="flex"
          id="body"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Box
            bgcolor="#fff"
            height="400px"
            p={4}
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
            borderRadius="10px"
            marginBottom="20px"
          >
            <Box textAlign="center">
              <img className="logo__img" src={logo} alt="logo" style={{ width: '50px' }} />
              <Typography variant="h5">Connectez vous</Typography>
            </Box>

            <form className="form-login" onSubmit={handleOnSubmitLogin} method="post">
              <TextField
                className={classes.input}
                required
                id="filled-required"
                label="Email"
                variant="filled"
                onChange={handleChangeInput}
                value={emailConnexion}
                size="small"
                name="emailConnexion"
              />
              <p />
              <TextField
                className={classes.input}
                required
                id="filled-password-input"
                label="Mot de Passe"
                type="password"
                autoComplete="current-password"
                variant="filled"
                onChange={handleChangeInput}
                value={passwordConnexion}
                size="small"
                name="passwordConnexion"
              />
              <Button variant="contained" type="submit" className={classes.button}>
                Connexion
              </Button>
            </form>
          </Box>
          <Accordion
            email={email}
            confirmEmail={confirmEmail}
            password={password}
            confirmPassword={confirmPassword}
            establishment={establishment}
            address={address}
            zipCode={zipCode}
            city={city}
            region={region}
            phoneNumber={phoneNumber}
            rpps={rpps}
            userType={userType}
            handleChange={handleChange}
            submitSubscribe={submitSubscribe}
            errorMessage={errorMessage}
            errorMessageIsOpen={errorMessageIsOpen}
            closeErrorMessage={closeErrorMessage}
            isExpanded={isExpanded}
            closeOpenAccordion={closeOpenAccordion}
          />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

LoginForm.propTypes = {
  submitLogin: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  emailConnexion: PropTypes.string,
  passwordConnexion: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  confirmEmail: PropTypes.string,
  confirmPassword: PropTypes.string,
  establishment: PropTypes.string,
  city: PropTypes.string,
  address: PropTypes.string,
  zipCode: PropTypes.string,
  region: PropTypes.string,
  phoneNumber: PropTypes.string,
  rpps: PropTypes.string,
  userType: PropTypes.string,
  submitSubscribe: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  errorMessageIsOpen: PropTypes.bool,
  closeErrorMessage: PropTypes.func,
  isExpanded: PropTypes.bool.isRequired,
  closeOpenAccordion: PropTypes.func.isRequired,
};
LoginForm.defaultProps = {
  emailConnexion: '',
  passwordConnexion: '',
  email: '',
  password: '',
  confirmEmail: '',
  confirmPassword: '',
  establishment: '',
  city: '',
  address: '',
  zipCode: '',
  region: '',
  phoneNumber: '',
  rpps: '',
  userType: '',
  errorMessage: PropTypes.string,
  errorMessageIsOpen: PropTypes.bool,
  closeErrorMessage: () => {},
};

// == Export
export default LoginForm;
