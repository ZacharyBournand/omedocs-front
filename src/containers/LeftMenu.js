import { connect } from 'react-redux';
import LeftMenu from 'src/components/LeftMenu/';
import { logout } from 'src/actions/user';
import { openCloseMenu } from 'src/actions/utils';

const mapStateToProps = (state) => ({
  userType: state.user.userType,
  establishment: state.user.establishment,
  id: state.user.id,
  nbOfArticles: state.cart.cart.length,
  menuIsOpen: state.utils.menuIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logout());
  },
  openCloseMenu: () => dispatch(openCloseMenu()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftMenu);
