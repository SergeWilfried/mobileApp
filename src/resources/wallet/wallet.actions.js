import {
  SELECT_PHONE_NUMBER,
  SET_PHONE_NUMBERS,
  REMOVE_PHONE_NUMBER,
  ADD_PHONE_NUMBER,
} from './wallet.constants';

export const setPhoneNumbers = (phoneNumbers) => async (dispatch) => {
  dispatch({
    type: SET_PHONE_NUMBERS,
    payload: phoneNumbers,
  });
  return phoneNumbers;
};

export const selectPhoneNumber = (id) => (dispatch) => {
  dispatch({ type: SELECT_PHONE_NUMBER, payload: id });
};

export const addPhoneNumber = (phoneNumber) => /* async */ (dispatch) => {
  // await addPhoneServer
  dispatch({ type: ADD_PHONE_NUMBER, payload: phoneNumber });
};

export const removePhoneNumber = (id) => /* async */ (dispatch) => {
  // await removeFromServer(id)
  dispatch({
    type: REMOVE_PHONE_NUMBER,
    payload: id,
  });
};
