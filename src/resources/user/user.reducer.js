import {
  USER_AUTHENTICATED,
  USER_CURRENT,
  USER_SIGNED_UP,
  USER_LOGGED_OUT,
} from './user.constants';

export default (state = { userData: {} }, action) => {
  switch (action.type) {
    case USER_AUTHENTICATED:
      return {
        ...state,
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
    default:
      return state;
  }
};
