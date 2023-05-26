import { connect } from 'react-redux';
import PopListApi from 'src/components/ModalAddProduct/PopListApi';
import { closePopListApi, applyInfoDrugsApi } from 'src/actions/utils';

const mapStateToProps = (state) => ({
  inputNameAddProduct: state.utils.product.name,
  inputCisAddProduct: state.utils.product.cis,
});

const mapDispatchToProps = (dispatch) => ({
  closePopList: () => dispatch(closePopListApi()),
  recoverInfoListItem: (name, cis) => {
    dispatch(applyInfoDrugsApi(name, cis));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PopListApi);
