import { connect } from 'react-redux';
import Table from 'src/components/SalesPage/SalesPageTable';
import { fetchSaleHistory, changeOrderStatus } from 'src/actions/cart';

const mapStateToProps = (state) => ({
  saleHistory: state.user.saleHistory,
  userId: state.user.user_id,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: (userId) => {
    dispatch(fetchSaleHistory(userId));
  },
  changeOrderStatus: (orderId, newStatus) => {
    dispatch(changeOrderStatus(orderId, newStatus));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
