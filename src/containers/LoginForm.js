import { connect } from 'react-redux';
import LoginForm from 'src/components/LoginForm';
import { withRouter } from 'react-router-dom';
import { changeUserInformations, submitLogin, lauchInscriptionForm } from 'src/actions/user';
import { closeErrorInputValidation, closeOpenAccordion } from 'src/actions/utils';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  confirmEmail: state.user.confirmEmail,
  emailConnexion: state.user.emailConnexion,
  passwordConnexion: state.user.passwordConnexion,
  confirmPassword: state.user.confirmPassword,
  establishment: state.user.establishment,
  address: state.user.address,
  zipCode: state.user.zipCode,
  city: state.user.city,
  region: state.user.region,
  phoneNumber: state.user.phoneNumber,
  rpps: state.user.rpps,
  userType: state.user.userType,
  errorMessage: state.utils.errorInputValidation.message,
  errorMessageIsOpen: state.utils.errorInputValidation.open,
  isExpanded: state.utils.isExpanded,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (value, name) => dispatch(changeUserInformations(value, name)),
  submitLogin: () => dispatch(submitLogin()),
  submitSubscribe: () => dispatch(lauchInscriptionForm()),
  closeErrorMessage: () => dispatch(closeErrorInputValidation()),
  closeOpenAccordion: () => dispatch(closeOpenAccordion()),
});

const container = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
