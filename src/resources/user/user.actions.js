import config from 'resources/config';
import { setToken, removeToken } from 'helpers/storage';

import {
  USER_AUTHENTICATED,
  USER_CURRENT,
  USER_LOGGED_OUT,
  SET_PIN_CODE,
} from './user.constants';

import * as api from './user.api';

const setUser = async (userData, dispatch) => {
  if (!userData) return null;
  if (userData.accessToken) {
    config.token = userData.accessToken;
    await setToken('token', userData.accessToken);
  }
  dispatch({ type: USER_AUTHENTICATED });
  return userData;
};

export const setUserAuthenticated = () => (dispatch) => {
  dispatch({ type: USER_AUTHENTICATED });
};

export const signUp = (user) => async () => {
  const userData = await api.signUp(user);

  if (userData.user) {
    config.token = userData.accessToken;
    await setToken(userData.accessToken);
  }
  return userData;
};

export const signIn = ({ email, password }) => async (dispatch) => {
  const userData = await api.signIn({ email, password });
  return setUser(userData, dispatch);
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

export const signUpFacebook = (tokens) => async (dispatch) => {
  const userData = await api.signUpFacebook(tokens);

  return setUser(userData, dispatch);
};

export const signInFacebook = (facebookAccessToken) => async (dispatch) => {
  const userData = await api.signInFacebook(facebookAccessToken);

  return setUser(userData, dispatch);
};
