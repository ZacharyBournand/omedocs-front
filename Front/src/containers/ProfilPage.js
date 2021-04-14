import { connect } from 'react-redux';
import ProfilPage from 'src/components/ProfilPage';
import {} from '../actions/search';

const mapStateToProps = (state) => ({
  phoneNumer: state.user.user.phoneNumer,
  establishment: state.user.user.establishment,
  email: state.user.user.email,
  rpss: state.user.user.rpss,
  city: state.user.user.city,
  adress: state.user.user.adress,
  zipCode: state.user.user.zipCode,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilPage);
