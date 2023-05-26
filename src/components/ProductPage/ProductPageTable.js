// Import REACT
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

// Import from MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ConfirmationBox from 'src/containers/DialogBoxAddToCart';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core';

// Import Img
import noResultsLogo from 'src/assets/img/no-results.svg';

// Import CSS
import './styles.scss';

// Configuration des colones avec le nom, le label, la largeur
const columns = [
  { id: 'name', label: 'Nom', minWidth: 300 },
  { id: 'pharmacyName', label: 'Nom de la Pharmacie', minWidth: 250 },
  { id: 'expirationDate', label: "Date d'expiration", minWidth: 50 },
  { id: 'quantity', label: 'Quantité disponible', minWidth: 50 },
  { id: 'price', label: 'Prix unitaire H.T', minWidth: 70 },
  { id: 'addToCart', minWidth: 130 },
];

// Fonction qui va insérer les données dans le tableau
function createData(
  id,
  name,
  pharmacyName,
  expirationDate,
  quantity,
  price,
  quantityToBuy,
  addToCart,
) {
  return {
    id,
    name,
    pharmacyName,
    expirationDate,
    quantity,
    price,
    quantityToBuy,
    addToCart,
  };
}
// Ajout des styles sur les composants MATERIAL-UI
const useStyles = makeStyles({
  root: {
    width: '100%',
    overflow: 'hidden',
    textAlign: 'center',
  },
  container: {
    minHeight: 350,
    maxHeight: 500,
    minWidth: 700,
  },
  addToCartBtn: {
    color: '#0368A3',
  },
  quantityInput: {
    marginRight: '1rem',
    width: '90px',
    color: '#0368A3',
  },
});

const ProductTable = ({
  addToCart,
  products,
  openDialogBox,
  closeDialogBox,
  cartData,
  pharmacyToOrder,
  openSnackBar,
}) => {
  console.log(products.map((product) => console.log(product)));
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const history = useHistory();
  const [userId, setUserId] = useState('');

  // Gestion du changement de page dans notre tableau de résultats
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  // Gestion du nombre de pages dans le tableau
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // fonction qui va permettre de récuperer l'id de l'user au moment du clique sur
  // le btn de l'ajout au panier
  const getUserId = (event) => {
    setUserId(Number(event.target.closest('button').name));
  };

  // Gestion de la redirection sur la page de la pharmacie au moment
  // du click sur le btn "aller sur la page pharmacie"
  const handleRedirect = () => {
    closeDialogBox();
    history.push(`/establishment/${userId}`);
  };

  // Reset de la valeur de tous les inputs
  const handleReset = () => {
    Array.from(document.querySelectorAll('input')).forEach(
      // eslint-disable-next-line no-return-assign
      (input) => (input.value = ''),
    );
  };

  // Fonction qui va déclencher une annimation en cas d'erreur
  const handleShake = (event) => {
    event.target.classList.add('error');
    setTimeout(() => {
      event.target.classList.remove('error');
    }, 1000);
  };
  // Gestion de la soumission du formulaire addProduct pour l'envois au panier
  const handleSubmitForm = (event) => {
    event.preventDefault();
    // On récupère les datas du form avec dataset
    const {
      dataset: {
        pharmacyname,
        pharmacyid,
        price,
        productid,
        productname,
        quantity,
        id,
        pharmacyemail,
      },
    } = event.target;
    // On récupère la quantité rentré par l'user
    const formData = new FormData(event.target);
    const quantityToBuy = formData.get('quantityToBuy');

    // Fonction qui va vérifier si l'article est déja présent dans le panier
    const isAlreadyInCart = cartData.some((article) => article.id === id);

    // On met toutes les datas dans un objet pour les envoyes dans le panier
    const dataToSendToCart = {
      pharmacyname,
      pharmacyid,
      price,
      productid,
      productname,
      quantity,
      quantityToBuy,
      id,
    };

    // On va vérifier que l'user n'entre pas une quantité supérieur à la quantité dispo de l'article
    if (Number(quantityToBuy) > Number(quantity) || Number(quantityToBuy) === 0) {
      handleShake(event);
    } // On vérifie si le produit est déja dans le panier
    else if (isAlreadyInCart === true) {
      openSnackBar('Ce produit est déjà dans votre panier', 'warning');
      handleShake(event);
    } else if (pharmacyToOrder !== null) {
      // On vérifie si la commande ne comporte qu'une seul pharmacyId
      if (Number(pharmacyToOrder) !== Number(pharmacyid)) {
        handleShake(event);
        openSnackBar("Vous ne pouvez commander qu'auprès d'une pharmacie à la fois", 'warning');
      } else {
        // Fonction pour vider les champs
        handleReset();
        // On envois les data dans le panier via un action
        addToCart(dataToSendToCart, pharmacyid, pharmacyemail);
        // On envois l'action pour l'ouverture de la dialogBox add to cart
        openDialogBox();
      }
    } else {
      // Fonction pour vider les champs
      handleReset();
      // On envois les data dans le panier via un action
      addToCart(dataToSendToCart, pharmacyid, pharmacyemail);
      // On envois l'action pour l'ouverture de la dialogBox
      openDialogBox();
    }
  };

  // On récupere les resultats du state pour boucler dessus et les afficher dans le tableau
  const rows = products.map((product) =>
    createData(
      product.id,
      product.name,
      <Link to={`/establishment/${product.user_id}`}>{product.establishment}</Link>,
      product.expiration_date,
      product.quantity,
      `${product.unit_price}  €`,
      <TextField id="quantity" label="quantité" type="number" />,
      <Box display="flex" justifyContent="flex-end" alignItems="start">
        <form
          onSubmit={handleSubmitForm}
          data-pharmacyname={product.establishment}
          data-pharmacyid={product.user_id}
          data-price={product.unit_price}
          data-quantity={product.quantity}
          data-productname={product.name}
          data-productid={product.cis_code}
          data-id={product.id}
          data-pharmacyemail={product.email}
          name="addProduct"
          className="addProductToCart"
        >
          <TextField
            label="quantité"
            type="number"
            className={classes.quantityInput}
            name="quantityToBuy"
            InputProps={{ inputProps: { min: 1, max: product.quantity } }}
          />

          <IconButton
            variant="contained"
            onClick={getUserId}
            name={product.user_id}
            type="submit"
            color="primary"
            className={classes.addToCartBtn}
          >
            <AddShoppingCartIcon />
          </IconButton>
        </form>
      </Box>,
    ),
  );
  return (
    <Paper className={classes.root}>
      <Typography
        variant="h6"
        style={{ padding: '10px', backgroundColor: '#008DBA', color: 'white' }}
      >
        Liste des Médicaments
      </Typography>

      {products.length !== 0 ? (
        <>
          <TableContainer className={classes.container}>
            <Table stickyHeader size="small">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      className="tableCell"
                      key={column.id}
                      align="left"
                      style={{ minWidth: column.minWidth }}
                    >
                      <p className="cells-title">{column.label}</p>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                  <TableRow hover tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align="left">
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <ConfirmationBox handleRedirect={handleRedirect} />
          <TablePagination
            rowsPerPageOptions={[10, 25, 50, { value: -1, label: 'Tous' }]}
            labelRowsPerPage="Résultats par page"
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </>
      ) : (
        <Box p={4}>
          <h1 style={{ padding: '5px', fontWeight: '700', marginBottom: '2rem' }}>
            Cette référence n'est pas disponible à la vente
          </h1>
          <img style={{ width: '150px' }} src={noResultsLogo} alt="no-results-logo" />
        </Box>
      )}
    </Paper>
  );
};

ProductTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToCart: PropTypes.func.isRequired,
  openDialogBox: PropTypes.func.isRequired,
  cartData: PropTypes.arrayOf(PropTypes.object).isRequired,
  pharmacyToOrder: PropTypes.string,
  openSnackBar: PropTypes.func.isRequired,
  closeDialogBox: PropTypes.func.isRequired,
};

ProductTable.defaultProps = {
  pharmacyToOrder: '',
};

export default ProductTable;
