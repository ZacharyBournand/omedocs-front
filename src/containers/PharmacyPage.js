import { connect } from 'react-redux';
import PharmacyPage from 'src/components/PharmacyPage';
import { fetchInventoryEstablishment } from 'src/actions/search';
import { fetchLatLng } from 'src/actions/map';

const mapStateToProps = (state) => ({
  establishments: state.search.searchEstablishmentResult,
  inventory: state.search.inventoryEstablishment,
  isLoading: state.utils.isLoading,
  lat: state.utils.map.lat,
  lng: state.utils.map.lng,
});

const mapDispatchToProps = (dispatch) => ({
  fetchInventory: (id) => dispatch(fetchInventoryEstablishment(id)),
  fetchLatLng: (address) => dispatch(fetchLatLng(address)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PharmacyPage);
