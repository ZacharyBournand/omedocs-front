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
import Box from '@material-ui/core/Box';
import EmptyLogo from 'src/assets/img/packing-list.svg';
import { Hidden } from '@material-ui/core';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  paper: {
    Width: '800px',
    overflow: 'auto',
    borderRadius: '15px',
    backgroundColor: '#008DBA',
    textAlign: 'center',
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

const HistoryPageTable = ({ orderHistory, fetchOrders, userId }) => {
  // On va récuperer l'historique de commandes au moment du premier rendus du composant
  // et si l'historique de commande est modifié
  useEffect(() => {
    fetchOrders(userId);
  }, []);

  const rows = orderHistory.map((order) =>
    createData(`n° ${order.order_number}`, order.date, `${order.total_cost} €`, order.status),
  );
  const classes = useRowStyles();
  return (
    <>
      {orderHistory.length !== 0 && (
        <Paper className={classes.paper}>
          <Typography
            variant="h6"
            style={{
              padding: '15px',
              backgroundColor: '#008DBA',
              color: 'white',
            }}
          >
            Historique de vos commandes
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
      {orderHistory.length === 0 && (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          className="empty-cart"
          boxShadow={4}
        >
          <p className="empty-cart__head">Vous n'avez pas encore de commandes à afficher</p>
          <img src={EmptyLogo} alt="shopping-cart-icon" className="empty-cart__img" />
        </Box>
      )}
    </>
  );
};

HistoryPageTable.propTypes = {
  orderHistory: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchOrders: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};

export default HistoryPageTable;
