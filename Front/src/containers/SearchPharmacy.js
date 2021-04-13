import { connect } from 'react-redux';
import SearchPharmacy from '../components/SearchPharmacy/SearchPharmachy';
import { changeInputValue, changeSelectInputValue } from '../actions/search'

const mapStateToProps = (state) => ({
    searchInputValue: state.search.searchPharmacyInputValue,
    searchSelectValue: state.search.searchPharmacySelectValue,
});

const mapDispatchToProps = (dispatch) => ({
    handleChange: (fieldValue, fieldName) => {
        dispatch(changeInputValue(fieldValue, fieldName));
    },
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchPharmacy);