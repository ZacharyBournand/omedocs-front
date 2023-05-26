// Actions list
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SEND_MAIL = 'SEND_MAIL';
export const SEND_MAIL_CHECKOUT = 'SEND_MAIL_CHECKOUT';

// Action creators
export const changeInputValue = (name, value) => ({
  type: CHANGE_INPUT_VALUE,
  name,
  value,
});

export const sendMail = () => ({
  type: SEND_MAIL,
});

export const sendMailCheckout = (emailBuyer, name, completeAddress) => ({
  type: SEND_MAIL_CHECKOUT,
  emailBuyer,
  name,
  completeAddress,
});
