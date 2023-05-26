// Import React
import React from 'react';
import PropTypes from 'prop-types';

// Import from MATERIAL_UI
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import BlockIcon from '@material-ui/icons/Block';
import CheckIcon from '@material-ui/icons/Check';

// Import Img
import QuestionMark from 'src/assets/img/question-mark.svg';

// Import CSS
import './styles.scss';

// Fonction qui va permettre l'annimation de la modal à l'ouverture
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogChangeInformationsModal = ({ isOpen, handleClose, validation }) => {
  const handleCloseBtn = () => {
    handleClose();
  };
  const handleValidation = (event) => {
    validation();
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          Souhaitez vous sauvegarder le changement ?
        </DialogTitle>
        <img
          src={QuestionMark}
          alt="question-mark-img"
          id="question-mark-icon"
        />
        <DialogActions>
          <Button
            onClick={handleValidation}
            color="primary"
            startIcon={<CheckIcon />}
          >
            Valider
          </Button>
          <Button
            onClick={handleCloseBtn}
            color="primary"
            startIcon={<BlockIcon />}
          >
            Annuler
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

DialogChangeInformationsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  validation: PropTypes.func.isRequired,
};

export default DialogChangeInformationsModal;
