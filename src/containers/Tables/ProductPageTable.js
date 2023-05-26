import { connect } from 'react-redux';
import Table from 'src/components/ProductPage/ProductPageTable';
import { addArticleToCart, openDialogBoxAction, closeDialogBox } from 'src/actions/cart';
import { openSnackBar } from 'src/actions/utils';

const mapStateToProps = (state) => ({
  products: state.search.searchProductResult,
  cartData: state.cart.cart,
  pharmacyToOrder: state.cart.pharmacyToOrder,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (data, pharmacyId, pharmacyEmail) => {
    dispatch(addArticleToCart(data, pharmacyId, pharmacyEmail));
  },
  openDialogBox: () => {
    dispatch(openDialogBoxAction());
  },
  openSnackBar: (message, color) => {
    dispatch(openSnackBar(message, color));
  },
  closeDialogBox: () => {
    dispatch(closeDialogBox());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
