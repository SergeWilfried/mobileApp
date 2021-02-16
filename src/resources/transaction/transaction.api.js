import { apiClient } from 'helpers/api';

export const deposit = (amount) => {
  return apiClient.post('/transactions/credit', {
    amount,
  });
};

export const transfer = ({ amount, recipient }) => {
  return apiClient.post('/transactions/transfer', {
    amount,
    recipient,
  });
};
