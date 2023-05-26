import { connect } from 'react-redux';
import Table from 'src/components/SearchProduct/SearchProductsResultTable';
import {} from 'src/actions/utils';

const mapStateToProps = (state) => ({
  productResultsData: state.search.searchProductResult,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
