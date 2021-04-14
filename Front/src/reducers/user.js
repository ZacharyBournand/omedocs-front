import /* actions */ 'src/actions/user';

export const initialState = {
  user: {
    establishment: 'Hôpital Paris Saint-Joseph',
    email: 'hopitalsj@sante-paris.fr',
    phoneNumer: '01.44.12.33.33',
    rpss: '680004546',
    city: 'Paris',
    adress: '185 Rue Raymond Losserand',
    zipCode: '75014',
    password: '',
    logged: false,
    token: null,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
