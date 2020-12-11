const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEXP = /^[a-zA-Z\d&?$@](?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[&?$@])[a-zA-Z\d&?$@]{8,}$/;

const emailValidator = (value) => {
  const errors = [];
  if (!value || value.trim() === '') {
    errors.push('Email is required');
  } else if (!EMAIL_REGEXP.test(value)) {
    errors.push('Please enter correct email');
  }
  return errors;
};

const phoneNumberValidator = (value) => {
  const errors = [];
  if (!value || value.trim() === '') {
    errors.push('Phone Number is required');
  }
  return errors;
};

const confirmationCodeValidator = (value) => {
  const errors = [];
  if (!value || value.trim() === '') {
    errors.push('Code is required');
  }
  return errors;
};

const passwordValidator = (value) => {
  const errors = {};
  if (!PASSWORD_REGEXP.test(value)) {
    errors.password = 'Please enter correct password and repeat password';
  }
  return null;
};

export const validate = (value, key) => {
  switch (key) {
    case 'email':
      return emailValidator(value);
    case 'phoneNumber':
      return phoneNumberValidator(value);
    case 'confirmationCode':
      return confirmationCodeValidator(value);
    case 'password':
      return passwordValidator(value);
    default:
      return [];
  }
};

export const getServerErrors = (commonErrors, key) => {
  return commonErrors
    .filter(error => Object.keys(error)[0] === key)
    .map(error => error[key]);
};

export const containErrors = (errors) => {
  return Boolean(Object.keys(errors)
    .filter(key => errors[key].length).length);
};
