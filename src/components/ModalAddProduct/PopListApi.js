import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import drugsData from 'src/data/drugs.json';
import { Box, List, Typography } from '@material-ui/core';
import ListItems from './ListItems';

const PopListApi = ({
  closePopList, // PopList closing function
  recoverInfoListItem, // ListItems data retrieval function
  inputNameAddProduct, // input name from componant modalAddProduct
  inputCisAddProduct, // input cis from componant modalAddProduct
}) => {
  const [drugs, setDrugs] = useState([]);

  // Filtre sur le fichier drugsData avec l'input name ou cis du formulaire AddProduct
  // Je ne filtre que si la chaine contient au moins 4 caractère.
  useEffect(() => {
    if (inputNameAddProduct.length >= 4) {
      setDrugs(drugsData.filter((drug) => drug.title.toLowerCase().match(inputNameAddProduct)));
    }
    if (inputCisAddProduct.length >= 4) {
      setDrugs(
        drugsData.filter((drug) => drug.cis_code.replace(/ /g, '').match(inputCisAddProduct)),
      );
    }
  }, [inputNameAddProduct, inputCisAddProduct]);

  return (
    <Box
      width="260px"
      maxHeight="400px"
      overflow="auto"
      p="2"
      bgcolor="#FFF"
      border="1px solid #c4c4c4"
      borderRadius="5px"
      position="absolute"
      top="82px"
      left="335px"
      zIndex="10"
    >
      {/* Si il n'y a pas de résultat j'affiche un message d'erreur à la place de la liste */}
      {drugs.length === 0 ? (
        <Typography variant="body1">Pas de résultat...</Typography>
      ) : (
        <List dense>
          {drugs.map((drug) => (
            <ListItems
              key={drug.cis_code}
              drug={drug}
              close={closePopList}
              recoverInfo={recoverInfoListItem}
            />
          ))}
        </List>
      )}
    </Box>
  );
};

PopListApi.propTypes = {
  closePopList: PropTypes.func.isRequired,
  recoverInfoListItem: PropTypes.func.isRequired,
  inputNameAddProduct: PropTypes.string,
  inputCisAddProduct: PropTypes.string,
};

PopListApi.defaultProps = {
  inputNameAddProduct: '',
  inputCisAddProduct: '',
};

export default PopListApi;
