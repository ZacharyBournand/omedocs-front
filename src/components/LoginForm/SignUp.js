/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Inscription</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <form>
              <label>
                Email :
                <input type="text" name="email" />
                Confirmer l'email :
                <input type="text" name="emailchecked" />
                Mot de passe :
                <input type="text" name="password" />
                Confirmer le mot de passe :
                <input type="text" name="passwordchecked" />
              </label>
              <input type="submit" value="Envoyer" />
            </form>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
