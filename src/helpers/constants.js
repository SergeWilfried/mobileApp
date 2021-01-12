export const PASSWORD = {
  length: 8,
  regExp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[&%$@])[a-zA-Z\d&%$@]{8,}$/,
};

export const EMAIL = {
  regExp: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export const AUTH = {
  SIGN_UP: 'signup',
  SIGN_IN: 'signin',
};

export const STORAGE = {
  HIDE_ON_BOARDING: 'HIDE_ON_BOARDING',
};
