import { apiClient } from 'helpers/api';

export const signUp = ({ email }) => apiClient
  .post('account/signup', { email });

export const getCurrentUser = () => apiClient
  .get('users/current');
