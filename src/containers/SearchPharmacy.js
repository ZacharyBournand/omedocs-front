import { connect } from 'react-redux';
import SearchPharmacy from 'src/components/SearchPharmacy';
import { changeInputValue, searchEstablishment } from 'src/actions/search';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  searchInputValue: state.search.searchEstablishmentInputValue,
  searchSelectValue: state.search.searchEstablishmentSelectValue,
  isLoading: state.utils.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (fieldValue, fieldName) => {
    dispatch(changeInputValue(fieldValue, fieldName));
  },
  submitForm: () => dispatch(searchEstablishment()),
});

const container = connect(mapStateToProps, mapDispatchToProps)(SearchPharmacy);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
