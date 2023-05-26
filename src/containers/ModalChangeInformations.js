import { connect } from 'react-redux';
import DialogModal from 'src/components/ProfilPage/DialogModal';
import { closeValidationChangeModal } from 'src/actions/utils';
import { changeUserInformations } from 'src/actions/user';

const mapStateToProps = (state) => ({
  isOpen: state.user.changeInformationsModal,
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => {
    dispatch(closeValidationChangeModal());
  },
  handleChangeInfo: () => {
    console.log('ok');
    dispatch(changeUserInformations());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogModal);
