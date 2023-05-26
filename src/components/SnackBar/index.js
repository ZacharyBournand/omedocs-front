import React from 'react';
import PropTypes from 'prop-types';

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const SnackBar = ({
  open, // Booléen
  handlerClose, // closeFunction
  message, // Message in SnackBar
  typeColor, // Style of Snackbar
}) => (
  <Snackbar
    autoHideDuration={4000}
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    onClose={handlerClose}
    open={open}
  >
    <Alert severity={typeColor} onClose={handlerClose}>
      {message}
    </Alert>
  </Snackbar>
);

SnackBar.propTypes = {
  open: PropTypes.bool.isRequired,
  handlerClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  typeColor: PropTypes.string.isRequired,
};

export default SnackBar;
