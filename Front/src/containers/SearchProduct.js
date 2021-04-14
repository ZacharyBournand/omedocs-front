import { connect } from 'react-redux';
import SearchProduct from 'src/components/SearchProduct';
import { changeInputValue} from 'src/actions/search';

const mapStateToProps = (state) => ({
  searchInputValue: state.search.searchProductInputValue,
  searchSelectValue: state.search.searchProductSelectValue,
});

const mapDispatchToProps = (dispatch) => ({
    handleChange: (fieldValue, fieldName) => {
        dispatch(changeInputValue(fieldValue, fieldName))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchProduct);
