import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText } from '@material-ui/core';

const ListItems = ({ drug, close, recoverInfo }) => {
  const { title, cis_code } = drug;

  const handlerOnClick = () => {
    // Récupération des infos de ListItems
    // Je parse en string le numéro cis et je retire les espaces
    recoverInfo(title, cis_code.toString().replace(/ /g, ''));
    close();
  };

  return (
    <ListItem divider button onClick={handlerOnClick}>
      <ListItemText>{title}</ListItemText>
    </ListItem>
  );
};

ListItems.propTypes = {
  drug: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cis_code: PropTypes.string.isRequired,
  }),
  close: PropTypes.func.isRequired,
  recoverInfo: PropTypes.func.isRequired,
};

ListItems.defaultProps = {
  drug: {},
};

export default ListItems;
