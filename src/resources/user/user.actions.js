import config from 'resources/config';
import { setToken, removeToken } from 'helpers/storage';

import {
  USER_AUTHENTICATED,
  USER_CURRENT,
  USER_SIGNED_UP,
  USER_LOGGED_OUT,
  SET_PIN_CODE,
} from './user.constants';

import * as api from './user.api';

export const setUserAuthenticated = () => (dispatch) => {
  dispatch({ type: USER_AUTHENTICATED });
};

export const signUp = ({ email }) => async (dispatch) => {
  const userData = await api.signUp({ email });
  dispatch({ type: USER_SIGNED_UP, userData });
  if (userData.user) {
    config.token = userData.accessToken;
    await setToken(userData.accessToken);
  }
  return userData;
};

export const getCurrentUser = () => async (dispatch) => {
  const userData = await api.getCurrentUser();
  dispatch({ type: USER_CURRENT, userData });
};

export const logOut = () => async (dispatch) => {
  config.token = null;
  await removeToken();
  dispatch({ type: USER_LOGGED_OUT });
};

export const setPinCode = (pinCode) => ({
  type: SET_PIN_CODE,
  pinCode,
});
