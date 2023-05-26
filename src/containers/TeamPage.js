import { connect } from 'react-redux';
import TeamPage from 'src/components/TeamPage';
import { changeInputValue, sendMail } from 'src/actions/sendMail';

const mapStateToProps = (state) => ({
  email: state.contactUs.email,
  message: state.contactUs.message,
  firstName: state.contactUs.firstName,
  lastName: state.contactUs.lastName,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (name, value) => dispatch(changeInputValue(name, value)),
  sendMail: () => dispatch(sendMail()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamPage);
