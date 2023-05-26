import { connect } from 'react-redux';
import Chatbot from 'src/components/Chatbot';

const mapStateToProps = (state) => ({
  userType: state.user.userType,
  establishment: state.user.establishment,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Chatbot);
