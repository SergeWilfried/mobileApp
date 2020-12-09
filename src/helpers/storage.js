import AsyncStorage from '@react-native-community/async-storage';

export const getToken = () => {
  return AsyncStorage.getItem('token');
};

export const setToken = (value) => {
  return AsyncStorage.setItem('token', value);
};

export const removeToken = () => {
  return AsyncStorage.removeItem('token');
};
