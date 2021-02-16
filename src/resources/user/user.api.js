import { apiClient } from 'helpers/api';

export const signUp = (userData) => apiClient.post('accounts/signup', userData);

export const signIn = ({ email, password }) =>
  apiClient.post('accounts/signin', { email, password });

export const getCurrentUser = () => apiClient.get('users/current');

export const sendCode = (phoneNumber) => {
  return apiClient.post('accounts/send/code', { phoneNumber });
};

export const verifyCode = (data) => {
  return apiClient.post('accounts/verify/code', data);
};

export const forgotPassword = (phoneNumber) => {
  return apiClient.post('/accounts/forgot-password', { phoneNumber });
};

export const resetPassword = (data) => {
  return apiClient.patch('/accounts/reset-password', data);
};

export const signUpFacebook = (tokens) => {
  return apiClient.post('accounts/signup/facebook', tokens);
};

export const signInFacebook = (facebookAccessToken) => {
  return apiClient.post('accounts/signin/facebook', facebookAccessToken);
};

export const getBalance = async () => {
  const { availableBalance } = await apiClient.get('users/current/balance');
  return availableBalance;
};

export const getUserData = async (userData) => {
  return apiClient.get(`/users/${userData.userId}`);
};

export const getLatestTransactions = async (skip = 0) => {
  return apiClient.get('/users/current/transactions', { skip });
};

export const getDailyTotal = async (start, end) => {
  const { total_amount: totalAmount } = await apiClient.get(
    '/users/current/transactions/totals',
    {
      created__gt: start,
      created__lt: end,
    },
  );

  return totalAmount;
};

export const startVerification = (data) => {
  return apiClient.post('/users/current/verify', data);
};
