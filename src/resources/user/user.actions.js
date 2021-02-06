import { setToken, removeToken, setItem, getToken } from 'helpers/storage';
import { STORAGE } from 'helpers/constants';

import {
  USER_AUTHENTICATED,
  USER_CURRENT,
  USER_LOGGED_OUT,
  HIDE_ONBOARDING,
  SET_PIN_CODE,
  USER_SIGNED_UP,
  HIDE_BALANCE,
  SET_AVATAR_URL,
  USER_SIGNED_IN,
  USER_UPDATED,
} from './user.constants';

import * as api from './user.api';

const setAccessToken = async (accessToken) => {
  if (!accessToken) return;

  await setToken(accessToken);
};

export const setUserAuthenticated = () => ({ type: USER_AUTHENTICATED });

export const resetPassword = (password, verificationToken) => async (
  dispatch,
) => {
  const { accessToken, ...userData } = await api.resetPassword({
    password,
    verificationToken,
  });

  await setAccessToken(accessToken);
  userData.birthDate = userData.birthData
    ? new Date(userData.birthDate)
    : new Date();
  dispatch({ type: USER_SIGNED_UP, payload: userData });

  return userData;
};

export const updateUserInfo = (updatedUser) => async (dispatch) => {
  const userData = await api.updateUser(updatedUser);
  userData.birthDate = new Date(userData.birthDate);
  dispatch({ type: USER_UPDATED, payload: userData });
};

export const signUp = (user) => async (dispatch) => {
  const userData = await api.signUp(user);

  if (userData.accessToken) {
    await setToken(userData.accessToken);
  }
  userData.birthDate = userData.birthData
    ? new Date(userData.birthDate)
    : new Date();
  dispatch({ type: USER_SIGNED_UP, payload: userData });

  return userData;
};

export const signIn = ({ email, password }) => async (dispatch) => {
  const { accessToken, ...userData } = await api.signIn({ email, password });
  userData.birthDate = userData.birthData
    ? new Date(userData.birthDate)
    : new Date();
  dispatch({ type: USER_SIGNED_IN, payload: userData });
  return setAccessToken(accessToken);
};

export const getCurrentUser = () => async (dispatch) => {
  const userData = await api.getCurrentUser();

  userData.birthDate = userData.birthData
    ? new Date(userData.birthDate)
    : new Date();
  dispatch({ type: USER_CURRENT, userData });

  return userData;
};

export const logOut = () => async (dispatch) => {
  await removeToken();
  await setItem(STORAGE.HIDE_ON_BOARDING, false);
  dispatch({ type: USER_LOGGED_OUT });
};

export const signUpFacebook = (tokens) => async (dispatch) => {
  const { accessToken, ...userData } = await api.signUpFacebook(tokens);
  userData.birthDate = userData.birthData
    ? new Date(userData.birthDate)
    : new Date();
  dispatch({ type: USER_SIGNED_UP, payload: userData });

  return setAccessToken(userData);
};

export const signInFacebook = (facebookAccessToken) => async (dispatch) => {
  const { accessToken, ...userData } = await api.signInFacebook(
    facebookAccessToken,
  );
  userData.birthDate = userData.birthData
    ? new Date(userData.birthDate)
    : new Date();
  dispatch({ type: USER_SIGNED_UP, payload: userData });

  return setAccessToken(accessToken);
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

export const hideBalance = (isHidden) => (dispatch) => {
  dispatch({ type: HIDE_BALANCE, isHidden });
};

export const setAvatarUrl = (avatarUrl) => (dispatch) => {
  dispatch({ type: SET_AVATAR_URL, avatarUrl });
};

export const enterPinCode = (pinCode) => async (dispatch, getState) => {
  const state = getState();
  const token = await getToken();
  const storedPinCode = state.pinCode;

  if (pinCode === storedPinCode && token) {
    await dispatch(getCurrentUser());
    dispatch(setUserAuthenticated());
  }
};
