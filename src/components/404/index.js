import React from 'react';
// Import CSS
import './styles.scss';

// Import Components
import Box from '@material-ui/core/Box';
import drugLogo from 'src/assets/medicine.svg';

const index = () => (
  <>
    <Box display="flex" flexDirection="column" justifyContent="space-between" height="100vh">
      <Box height="100%" width="100%" display="flex" id="body">
        <Box
          bgcolor="#FFF"
          height="100%"
          width="100%"
          p={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Box display="flex" mb={4}>
            <div className="err">4</div>
            <div className="fa-annim">
              {/* Utilisation du logo */}
              <img src={drugLogo} alt="drug-logo-icon" id="drugLogo" />
            </div>
            <div className="err2">4</div>
          </Box>
          <div className="msg">
            <p>
              Peut-être que cette page a été déplacée ?
              <br />
              Se cache-t-elle en quarantaine ?
              <br />
              N'a jamais existée en premier lieu ?
              <br />
            </p>
            <p>
              Allons à{' '}
              <a href="/" className="home-link">
                Accueil
              </a>{' '}
              et essayons à partir de là.
            </p>
          </div>
        </Box>
      </Box>
    </Box>
  </>
);

export default index;
