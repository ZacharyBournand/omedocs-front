import { connect } from 'react-redux';
import Table from 'src/components/HistoryPage/HistoryPageTable';
import { fetchOrderHistory } from 'src/actions/cart';

const mapStateToProps = (state) => ({
  orderHistory: state.user.orderHistory,
  userId: state.user.user_id,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: (userId) => {
    dispatch(fetchOrderHistory(userId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
