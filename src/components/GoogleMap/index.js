import React from 'react';
import PropTypes from 'prop-types';

import GoogleMapReact from 'google-map-react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Cursor = ({ lat, lng, userType }) => (
  <>
    <a href={`https://www.google.fr/maps/search/${userType}/@${lat},${lng},18.25z`} target="blank">
      <FaMapMarkerAlt color="red" size="1.5rem" style={{ cursor: 'pointer' }} />
    </a>
  </>
);

const GoogleMap = ({ lat, lng, userType }) => {
  userType === 'pharmacy' ? (userType = 'pharmacie') : (userType = 'hopital');

  const defaultProps = {
    center: {
      lat: lat,
      lng: lng,
    },
    zoom: 17.25,
  };

  return (
    // Important! Always set the container height explicitly
    <div
      style={{ height: '600px', width: '600px', border: '2px solid #0368A3', borderRadius: '10px' }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.APIKEY_GOOGLE }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Cursor lat={defaultProps.center.lat} lng={defaultProps.center.lng} userType={userType} />
      </GoogleMapReact>
    </div>
  );
};

GoogleMap.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  userType: PropTypes.string.isRequired,
};

GoogleMap.defaultProps = {
  lat: 48.85837,
  lng: 2.294481,
};

export default GoogleMap;
