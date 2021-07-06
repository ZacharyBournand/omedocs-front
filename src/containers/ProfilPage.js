import { connect } from 'react-redux';
import ProfilPage from 'src/components/ProfilPage';
import { withRouter } from 'react-router-dom';
import {
  changeUserInformations,
  changeUserMail,
  changeUserPhone,
} from 'src/actions/user';
import { openValidationChangeModal } from 'src/actions/utils';

const mapStateToProps = (state) => ({
  phoneNumber: state.user.phoneNumber,
  establishment: state.user.establishment,
  email: state.user.email,
  rpps: state.user.rpps,
  city: state.user.city,
  address: state.user.address,
  zipCode: state.user.zipCode,
  newEmail: state.user.newEmail,
  newPhoneNumber: state.user.newPhoneNumber,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (fieldValue, fieldName) => {
    dispatch(changeUserInformations(fieldValue, fieldName));
  },

  handleSave: () => {
    dispatch(openValidationChangeModal());
  },

  emailValidationForm: (fieldValue) => {
    dispatch(changeUserMail(fieldValue));
  },
  phoneValidationForm: (fieldValue) => {
    dispatch(changeUserPhone(fieldValue));
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(ProfilPage);
const containerWithRouter = withRouter(container);
export default containerWithRouter;
