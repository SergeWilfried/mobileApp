import config from 'resources/config';
import { setToken, removeToken, setItem } from 'helpers/storage';
import { STORAGE } from 'helpers/constants';

import {
  USER_AUTHENTICATED,
  USER_CURRENT,
  USER_LOGGED_OUT,
  HIDE_ONBOARDING,
  SET_PIN_CODE,
  SET_USER_TOKEN,
  USER_SIGNED_UP,
} from './user.constants';

import * as api from './user.api';

export const setUserToken = (token) => ({
  type: SET_USER_TOKEN,
  payload: { token },
});

const setUser = async (userData, dispatch) => {
  if (!userData) return null;
  if (userData.accessToken) {
    config.token = userData.accessToken;
    await setToken('token', userData.accessToken);
    dispatch(setUserToken(userData.accessToken));
  }

  return userData;
};

export const setUserAuthenticated = () => ({ type: USER_AUTHENTICATED });

export const signUp = (user) => async (dispatch) => {
  const userData = await api.signUp(user);

  if (userData.accessToken) {
    config.token = userData.accessToken;
    await setToken(userData.accessToken);
  }

  dispatch({ type: USER_SIGNED_UP, payload: userData });

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

export const signUpFacebook = (tokens) => async (dispatch) => {
  const userData = await api.signUpFacebook(tokens);

  return setUser(userData, dispatch);
};

export const signInFacebook = (facebookAccessToken) => async (dispatch) => {
  const userData = await api.signInFacebook(facebookAccessToken);

  return setUser(userData, dispatch);
};

export const hideOnboarding = (isHidden) => (dispatch) => {
  setItem(STORAGE.HIDE_ON_BOARDING, isHidden);
  dispatch({
    type: HIDE_ONBOARDING,
    payload: { isOnboardingHidden: isHidden },
  });
};

export const setPinCode = (pinCode) => ({
  type: SET_PIN_CODE,
  payload: { pinCode },
});
