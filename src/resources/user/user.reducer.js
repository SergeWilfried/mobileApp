import {
  USER_AUTHENTICATED,
  USER_CURRENT,
  USER_SIGNED_UP,
  USER_LOGGED_OUT,
  SET_PIN_CODE,
  USER_SIGNED_IN,
} from './user.constants';

export default (state = { userData: {}, pinCode: null }, action) => {
  switch (action.type) {
    case USER_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case USER_SIGNED_IN:
      return {
        ...state,
        accessToken: action.userData.accessToken,
        authenticated: true,
      };
    case USER_CURRENT:
      return {
        ...state,
        userData: {
          ...state.userData,
          ...action.userData,
        },
      };
    case USER_SIGNED_UP:
      return {
        ...state,
        userData: action.userData.user,
        accessToken: action.userData.accessToken,
        authenticated: true,
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        authenticated: false,
      };

    case SET_PIN_CODE:
      return {
        ...state,
        pinCode: action.pinCode,
      };
    default:
      return state;
  }
};
