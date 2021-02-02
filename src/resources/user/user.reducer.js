import {
  USER_AUTHENTICATED,
  USER_CURRENT,
  USER_SIGNED_UP,
  USER_LOGGED_OUT,
  HIDE_ONBOARDING,
  SET_PIN_CODE,
  SET_USER_TOKEN,
  HIDE_BALANCE,
  SET_AVATAR_URL,
} from './user.constants';

const initialState = {
  userData: {
    username: 'Anita Ukauwa',
  },
  authenticated: false,
  isOnboardingHidden: false,
  isBalanceHidden: false,
  pinCode: '',
  accessToken: '',
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
      const { accessToken, ...userData } = action.payload;

      return {
        ...state,
        userData,
        accessToken,
      };
    }
    case SET_USER_TOKEN:
      return {
        ...state,
        accessToken: action.payload.token,
      };
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
