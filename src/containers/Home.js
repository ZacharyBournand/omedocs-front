import { connect } from 'react-redux';
import Home from 'src/components/Home';
import { fetchCount } from 'src/actions/utils';

const mapStateToProps = (state) => ({
  productsCount: state.utils.count.products?.count,
  establishmentsCount: state.utils.count.users,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCount: () => dispatch(fetchCount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
