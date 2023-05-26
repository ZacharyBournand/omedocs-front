import {
  CHANGE_USER_INFORMATIONS,
  LOGIN,
  LOGOUT,
  LOGIN_FROM_REHYDRATE,
  SAVE_NEW_MAIL,
  SAVE_NEW_PHONE,
  CLEAN_INPUT_SIGNUP,
} from 'src/actions/user';

import {
  OPEN_VALIDATION_CHANGE_MODAL,
  CLOSE_VALIDATION_CHANGE_MODAL,
} from 'src/actions/utils';

import {
  SAVE_IN_ORDER_HISTORY,
  SAVE_FETCHED_ORDERS_IN_STATE,
  SAVE_FETCHED_SALES_IN_STATE,
  SAVE_ORDER_STATUS_IN_STATE,
} from 'src/actions/cart';

import api from 'src/api/api';

export const initialState = {
  user_id: null,
  establishment: '',
  emailConnexion: '',
  email: '',
  confirmEmail: '',
  phoneNumber: '',
  newEmail: '',
  newPhoneNumber: '',
  rpps: '',
  userType: '',
  city: '',
  address: '',
  zipCode: '',
  region: '',
  passwordConnexion: '',
  password: '',
  confirmPassword: '',
  fieldToChange: '',
  orderHistory: [],
  saleHistory: [],
  logged: false,
  accessToken: null,
  changeInformationsModal: false,
  mailChangeDialogBox: false,
  phoneChangeDialogBox: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CLEAN_INPUT_SIGNUP:
      return {
        ...state,
        establishment: '',
        email: '',
        phoneNumber: '',
        rpps: '',
        userType: '',
        city: '',
        address: '',
        zipCode: '',
        password: '',
        region: '',
        confirmPassword: '',
        confirmEmail: '',
      };
    case CHANGE_USER_INFORMATIONS:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOGIN_FROM_REHYDRATE: {
      api.defaults.headers.common.Authorization = `Bearer ${action.accessToken}`;
      return {
        ...state,
        accessToken: action.accessToken,
        establishment: action.establishment,
        email: action.email,
        phoneNumber: action.phoneNumber,
        rpps: action.rpps,
        city: action.city,
        address: action.address,
        zipCode: action.zipCode,
        userType: action.userType,
        user_id: action.user_id,
        logged: true,
      };
    }
    case LOGIN: {
      // Je met le token dans les params de l'api
      api.defaults.headers.common.Authorization = `Bearer ${action.accessToken}`;
      const {
        id: user_id,
        email,
        establishment,
        rpps,
        city,
        region,
        address,
        zip_code: zipCode,
        phone_number: phoneNumber,
        user_type: userType,
      } = action.user;
      return {
        ...state,
        user_id,
        email,
        establishment,
        rpps,
        city,
        region,
        address,
        zipCode,
        phoneNumber,
        userType,
        logged: true,
        accessToken: action.accessToken,
      };
    }

    case LOGOUT: {
      localStorage.clear();
      return {
        ...state,
        establishment: '',
        emailConnexion: '',
        email: '',
        confirmEmail: '',
        phoneNumber: '',
        newEmail: '',
        newPhoneNumber: '',
        rpps: '',
        userType: '',
        city: '',
        address: '',
        zipCode: '',
        region: '',
        passwordConnexion: '',
        password: '',
        confirmPassword: '',
        user_id: null,
        token: null,
        logged: false,
      };
    }

    case OPEN_VALIDATION_CHANGE_MODAL:
      return {
        ...state,
        changeInformationsModal: true,
      };
    case CLOSE_VALIDATION_CHANGE_MODAL:
      return {
        ...state,
        changeInformationsModal: false,
        newEmail: '',
        newPhoneNumber: '',
      };
    case SAVE_NEW_MAIL:
      return {
        ...state,
        email: action.mail,
        newEmail: '',
      };
    case SAVE_NEW_PHONE:
      return {
        ...state,
        phoneNumber: action.phone,
        newPhoneNumber: '',
      };
    case SAVE_IN_ORDER_HISTORY:
      return {
        ...state,
        orderHistory: [...state.orderHistory, action.payload],
      };
    case SAVE_FETCHED_ORDERS_IN_STATE:
      return {
        ...state,
        orderHistory: [...action.payload.map((article) => article)],
      };
    case SAVE_FETCHED_SALES_IN_STATE:
      return {
        ...state,
        saleHistory: [...action.payload.map((article) => article)],
      };
    case SAVE_ORDER_STATUS_IN_STATE:
      return {
        ...state,
        saleHistory: state.saleHistory.map((sale) => {
          if (Number(sale.order_number) === Number(action.orderId)) {
            sale.status = action.newStatus;
          }
          return sale;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
