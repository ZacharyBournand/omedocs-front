// ACTION LIST

// fetch Lattitude / Longitude from adress
export const FETCH_LAT_LNG = ' FETCH_LAT_LNG';
export const SAVE_COORDONATES = 'SAVE_COORDONATES';

// ACTION CREATORS

export const fetchLatLng = (address) => ({
  type: FETCH_LAT_LNG,
  address,
});

export const saveCoordonates = (lat, lng) => ({
  type: SAVE_COORDONATES,
  lat,
  lng,
});
