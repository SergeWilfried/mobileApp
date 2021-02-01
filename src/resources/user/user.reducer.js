import {
  USER_AUTHENTICATED,
  USER_CURRENT,
  USER_SIGNED_UP,
  USER_LOGGED_OUT,
  HIDE_ONBOARDING,
  SET_PIN_CODE,
  HIDE_BALANCE,
  SET_AVATAR_URL,
  USER_SIGNED_IN,
} from './user.constants';

const initialState = {
  userData: {
    username: 'Anita Ukauwa',
  },
  authenticated: false,
  isOnboardingHidden: false,
  isBalanceHidden: false,
  pinCode: '',
};

export default (state = initialState, action) => {
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
    case USER_SIGNED_UP: {
      return {
        ...state,
        userData: action.payload,
      };
    }
    case USER_SIGNED_IN: {
      return {
        ...state,
        userData: action.payload,
        authenticated: true,
      };
    }
    case USER_LOGGED_OUT:
      return {
        ...state,
        authenticated: false,
      };
    case HIDE_ONBOARDING:
      return {
        ...state,
        isOnboardingHidden: action.payload.isOnboardingHidden,
      };
    case SET_PIN_CODE:
      return {
        ...state,
        pinCode: action.payload.pinCode,
      };
    case HIDE_BALANCE:
      return {
        ...state,
        isBalanceHidden: action.isHidden,
      };
    case SET_AVATAR_URL:
      return {
        ...state,
        userData: {
          ...state.userData,
          avatarUrl: action.avatarUrl,
        },
      };
    default:
      return state;
  }
};
