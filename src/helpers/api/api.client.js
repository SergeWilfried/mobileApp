import axios from 'axios';
import { Alert } from 'react-native';

import config from 'resources/config';

import ApiError from './api.error';

// Do not throw errors on 'bad' server response codes
axios.interceptors.response.use(
  axiosConfig => axiosConfig,
  error => error.response || {},
);

const serverError = 'Server returned an error. Please, contact the support team.';
const connectionError = 'Connection error. Please, check your Internet connection.';

const throwApiError = ({ data = {}, status = 500 }) => {
  throw new ApiError(data, status);
};

const httpRequest = method => async (url, data) => {
  let urlWithSlash = url;

  if (urlWithSlash[0] !== '/') {
    urlWithSlash = `/${urlWithSlash}`;
  }
  const options = {
    headers: {
      Authorization: `Bearer ${config.token}`,
    },
    method,
    url: `${config.apiUrl}${urlWithSlash}`,
  };

  if (data) {
    if (data.blob) {
      options.responseType = 'blob';
    }

    if (method === 'get') {
      options.params = data;
    } else {
      options.data = data;
    }
  }

  const axiosResponse = await axios(options);
  if (!axiosResponse.data) {
    Alert.alert('', connectionError);
    throwApiError({
      data: { errors: [] },
      status: 500,
    });
    return null;
  }

  const response = {};
  response.data = axiosResponse.data || {};
  response.status = axiosResponse.status || 500;

  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  if (response.status === 400) {
    throwApiError(response);
  }

  if (response.status === 500) {
    Alert.alert('', serverError);
    throwApiError({
      data: { errors: [] },
      status: 500,
    });
  }

  if (!axiosResponse.data.errors) {
    Alert.alert('', serverError);
  }
  response.data.errors = axiosResponse.data.errors || [];
  throwApiError(response);
  return null;
};

export const getRequest = httpRequest('get');
export const postRequest = httpRequest('post');
export const putRequest = httpRequest('put');
export const patchRequest = httpRequest('patch');
export const deleteRequest = httpRequest('delete');

const apiClient = {
  get: getRequest,
  post: postRequest,
  put: putRequest,
  delete: deleteRequest,
  patch: patchRequest,
};

export default apiClient;
