import { connect } from 'react-redux';
import Table from 'src/components/InventoryPage/InventoryTable';
import {
  deleteRowFromInventory,
  saveNewQuantityFromInventory,
  handleChangeQuantityValue,
} from 'src/actions/inventory';

const mapStateToProps = (state) => ({
  inventoryData: state.inventory.drugs,
});

const mapDispatchToProps = (dispatch) => ({
  handleDeleteCLick: (rowId) => {
    dispatch(deleteRowFromInventory(rowId));
  },
  handleSubmit: (fieldValue, fieldId) => {
    dispatch(saveNewQuantityFromInventory(fieldValue, fieldId));
  },
  handleChangeQuantity: (value, fieldName) => {
    dispatch(handleChangeQuantityValue(value, fieldName));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
