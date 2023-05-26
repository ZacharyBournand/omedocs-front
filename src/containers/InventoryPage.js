import { connect } from 'react-redux';
import InventoryPage from 'src/components/InventoryPage';
import { withRouter } from 'react-router-dom';
import { openModalProduct } from 'src/actions/utils';
import { fetchInventory } from 'src/actions/inventory';

const mapStateToProps = (state) => ({
  inventoryData: state.inventory.drugs,
  isLoading: state.utils.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddArticle: () => {
    dispatch(openModalProduct());
  },
  fetchInventory: () => dispatch(fetchInventory()),
});

const container = connect(mapStateToProps, mapDispatchToProps)(InventoryPage);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
