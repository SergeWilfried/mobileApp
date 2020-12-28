import { apiClient } from 'helpers/api';

export const signUp = (userData) => apiClient
  .post('accounts/signup', userData);

export const getCurrentUser = () => apiClient
  .get('users/current');

export const sendCode = (phoneNumber) => {
  return apiClient.post('accounts/send/code', { phoneNumber });
};

export const verifyCode = (data) => {
  return apiClient.post('accounts/verify/code', data);
};

export const checkEmail = (email) => {
  return apiClient.post('accounts/check-email', { email });
};

export const forgotPassword = (phoneNumber) => {
  return apiClient.post('/accounts/forgot-password', { phoneNumber });
};

export const resetPassword = (data) => {
  return apiClient.patch('/accounts/reset-password', data);
};
