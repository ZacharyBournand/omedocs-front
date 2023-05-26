import { connect } from 'react-redux';
import DialogBoxAddToCard from 'src/components/DialogBoxAddToCard';

import { closeDialogBox } from 'src/actions/cart';

const mapStateToProps = (state) => ({
  isOpen: state.cart.validationBox,
});

const mapDispatchToProps = (dispatch) => ({
  handleClose: () => {
    dispatch(closeDialogBox());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogBoxAddToCard);
