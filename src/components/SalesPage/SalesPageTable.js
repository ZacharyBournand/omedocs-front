import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import EmptyLogo from 'src/assets/img/packing-list.svg';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  paper: {
    minWidth: '800px',
    overflow: 'hidden',
    textAlign: 'center',
  },
  input: {
    minWidth: 120,
  },
});

function createData(orderNumber, orderDate, totalPrice, status) {
  return {
    orderNumber,
    orderDate,
    totalPrice,
    status,
  };
}

function Row(props) {
  const { row } = props;
  const classes = useRowStyles();

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell component="th" scope="row">
          {row.orderNumber}
        </TableCell>
        <TableCell align="left">{row.orderDate}</TableCell>
        <TableCell align="left">{row.totalPrice}</TableCell>
        <TableCell align="left">{row.status}</TableCell>
      </TableRow>
    </>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    orderNumber: PropTypes.string.isRequired,
    orderDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

const HistoryPageTable = ({
  saleHistory,
  fetchOrders,
  userId,
  changeOrderStatus,
}) => {
  const classes = useRowStyles();
  // On va récuperer l'historique de commandes au moment du premier rendus du composant
  // et si l'historique de commande est modifié
  useEffect(() => {
    fetchOrders(userId);
  }, []);

  // Fonction qui va gérer le changement de status de la commande
  const handleChangeOrderStatus = (event) => {
    console.log(event.target);
    changeOrderStatus(event.target.name, event.target.value);
  };

  const rows = saleHistory.map((order) =>
    createData(
      `n° ${order.order_number}`,
      order.date,
      `${order.total_cost} €`,
      <>
        {order.status === 'payé' && (
          <Select
            value={order.status}
            name={order.order_number}
            onChange={handleChangeOrderStatus}
            className={classes.input}
          >
            <MenuItem value={order.status}> {order.status}</MenuItem>
            <MenuItem value="En cours de préparation">
              En cours de préparation
            </MenuItem>
            <MenuItem value="expédié">Expédié</MenuItem>
          </Select>
        )}
        {order.status === 'expédié' && (
          <Select
            value={order.status}
            name={order.order_number}
            onChange={handleChangeOrderStatus}
            className={classes.input}
          >
            <MenuItem value={order.status}> {order.status}</MenuItem>
            <MenuItem value="En cours de préparation">
              En cours de préparation
            </MenuItem>
            <MenuItem value="payé">Payé</MenuItem>
          </Select>
        )}
        {order.status === 'En cours de préparation' && (
          <Select
            value={order.status}
            name={order.order_number}
            onChange={handleChangeOrderStatus}
            className={classes.input}
          >
            <MenuItem value={order.status}> {order.status}</MenuItem>
            <MenuItem value="payé">Payé</MenuItem>
            <MenuItem value="expédié">Expédié</MenuItem>
          </Select>
        )}
        {order.status === null && (
          <Select
            value={order.status}
            name={order.order_number}
            onChange={handleChangeOrderStatus}
            className={classes.input}
          >
            <MenuItem value="payé">Payé</MenuItem>
            <MenuItem value="En cours de préparation">
              En cours de préparation
            </MenuItem>
            <MenuItem value="expédié">Expédié</MenuItem>
          </Select>
        )}
      </>
    )
  );

  return (
    <>
      {saleHistory.length !== 0 && (
        <Paper className={classes.paper}>
          <Typography
            variant="h6"
            style={{
              padding: '15px',
              backgroundColor: '#008DBA',
              color: '#FFF',
            }}
          >
            Historique de vos ventes
          </Typography>
          <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <p className="cells-title">Numéro de commande</p>
                  </TableCell>
                  <TableCell align="left">
                    <p className="cells-title">Date de commande</p>
                  </TableCell>
                  <TableCell align="left">
                    <p className="cells-title"> Montant total</p>
                  </TableCell>
                  <TableCell align="left">
                    <p className="cells-title">Statut</p>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <Row key={row.order_number} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
      {saleHistory.length === 0 && (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          className="empty-cart"
          boxShadow={4}
        >
          <p className="empty-cart__head">
            Vous n'avez pas encore de ventes à afficher
          </p>
          <img
            src={EmptyLogo}
            alt="shopping-cart-icon"
            className="empty-cart__img"
          />
        </Box>
      )}
    </>
  );
};

HistoryPageTable.propTypes = {
  saleHistory: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchOrders: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  changeOrderStatus: PropTypes.func.isRequired,
};

export default HistoryPageTable;
