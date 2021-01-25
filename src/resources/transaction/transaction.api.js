import { apiClient } from 'helpers/api';

export const deposit = (amount) => {
  return apiClient.post('/transactions/credit', {
    amount,
  });
};
