// Import React
import React from 'react';
import PropTypes from 'prop-types';

// Import from MATERIAL-UI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Footer from 'src/components/Footer';
import LeftMenu from 'src/containers/LeftMenu';
import backgroundImage from 'src/assets/img/pharmacy-back.jpg';

// Import COMPONENTS
import HistoryPageTable from 'src/containers/Tables/HistoryPageTable';

// Import CSS
import './styles.scss';

const useStyles = makeStyles(() => ({
  btn: {
    background: '#0368A3',
    '&:hover': {
      background: '#CDD0D4',
      color: '#0368A3',
    },
    borderRadius: '15px',
  },
}));

const HistoryPage = ({}) => {
  const classes = useStyles();
  return (
    <>
      <Box display="flex" flexDirection="column" justifyContent="space-between" height="100vh">
        <Box height="100%" width="100%" display="flex" id="body">
          <LeftMenu />
          <Box
            minHeight="100vh"
            width="100%"
            p={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
            style={{
              background: `url(${backgroundImage}) center center / cover`,
            }}
          >
            <HistoryPageTable />
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

HistoryPage.propTypes = {};

export default HistoryPage;
