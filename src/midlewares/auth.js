import api from 'src/api/api';

import { REHYDRATE, SUBMIT_LOGIN, LOGOUT, login, loginFromRehydrate } from 'src/actions/user';
import { openSnackBar } from 'src/actions/utils';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case REHYDRATE: {
      const accessToken = localStorage.getItem('accessToken');
      const establishment = localStorage.getItem('establishment');
      const email = localStorage.getItem('email');
      const phoneNumber = localStorage.getItem('phoneNumber');
      const rpps = localStorage.getItem('rpps');
      const city = localStorage.getItem('city');
      const address = localStorage.getItem('address');
      const zipCode = localStorage.getItem('zipCode');
      const userType = localStorage.getItem('userType');
      const user_id = localStorage.getItem('user_id');
      if (
        accessToken &&
        establishment &&
        email &&
        phoneNumber &&
        rpps &&
        city &&
        address &&
        zipCode &&
        userType &&
        user_id
      ) {
        store.dispatch(
          loginFromRehydrate(
            accessToken,
            establishment,
            email,
            phoneNumber,
            rpps,
            address,
            city,
            zipCode,
            userType,
            user_id,
          ),
        );
      }
      return next(action);
    }
    case LOGOUT: {
      // Au logout, on pense bien à supprimer les localstorage
      // Sinon on reste connecté au prochain refresh de la page
      localStorage.removeItem('jwtoken');
      return next(action);
    }
    case SUBMIT_LOGIN: {
      const { emailConnexion, passwordConnexion } = store.getState().user;
      api
        .post('/login', {
          emailConnexion,
          passwordConnexion,
        })
        .then((result) => result.data)
        .then(({ user, accessToken }) => {
          // Je stock le token et le user dans le localStorage
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('user_id', user.id);
          localStorage.setItem('establishment', user.establishment);
          localStorage.setItem('email', user.email);
          localStorage.setItem('phoneNumber', user.phone_number);
          localStorage.setItem('rpps', user.rpps);
          localStorage.setItem('city', user.city);
          localStorage.setItem('address', user.address);
          localStorage.setItem('zipCode', user.zip_code);
          localStorage.setItem('userType', user.user_type);
          // Dispatch LOGIN
          store.dispatch(login(user, accessToken));
          // Success Message
          store.dispatch(openSnackBar('Connexion réussi', 'success'));
        })
        .catch((error) => {
          console.error(error);
          store.dispatch(
            openSnackBar(
              "Une erreur s'est produite lors de la connexion, veuillez réessayer",
              'error',
            ),
          );
        });
      return next(action);
    }
    default:
      return next(action);
  }
};
