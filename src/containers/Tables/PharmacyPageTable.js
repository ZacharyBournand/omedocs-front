import { connect } from 'react-redux';
import Table from 'src/components/PharmacyPage/PharmacyTable';

import { addArticleToCart, openDialogBoxAction } from 'src/actions/cart';
import { openSnackBar } from 'src/actions/utils';

const mapStateToProps = (state) => ({
  pharmacyToOrder: state.cart.pharmacyToOrder,
  cartData: state.cart.cart,
  userType: state.user.userType,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (data, pharmacyId) => {
    dispatch(addArticleToCart(data, pharmacyId));
  },
  openDialogBox: () => {
    dispatch(openDialogBoxAction());
  },
  openSnackBar: (message, color) => {
    dispatch(openSnackBar(message, color));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
