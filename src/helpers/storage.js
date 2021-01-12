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

export const getItem = async (key) => {
  const item = await AsyncStorage.getItem(key)
  return JSON.parse(item);
};

export const setItem = (key, value) => {
  return AsyncStorage.setItem(key, JSON.stringify(value));
};

export const removeItem = (key) => {
  return AsyncStorage.removeItem(key);
};
