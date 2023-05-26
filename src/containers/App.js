import { connect } from 'react-redux';
import App from 'src/components/App';
import { rehydrate } from 'src/actions/user';

const mapStateToProps = (state) => ({
  logged: state.user.logged,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  rehydrate: () => dispatch(rehydrate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
