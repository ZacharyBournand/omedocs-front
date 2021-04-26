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
          console.log(user);
          // Je stock le token et le user dans le localStorage
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('user_id', user[0].id);
          localStorage.setItem('establishment', user[0].establishment);
          localStorage.setItem('email', user[0].email);
          localStorage.setItem('phoneNumber', user[0].phone_number);
          localStorage.setItem('rpps', user[0].rpps);
          localStorage.setItem('city', user[0].city);
          localStorage.setItem('address', user[0].address);
          localStorage.setItem('zipCode', user[0].zip_code);
          localStorage.setItem('userType', user[0].user_type);
          // Dispatch LOGIN
          store.dispatch(login(user[0], accessToken));
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
