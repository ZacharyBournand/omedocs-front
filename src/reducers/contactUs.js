import { CHANGE_INPUT_VALUE, SEND_MAIL } from 'src/actions/sendMail';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SEND_MAIL:
      return {
        ...state,
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      };

    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};
