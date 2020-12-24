export const getUserAuthenticated = ({ user }) => user.authenticated;

export const getUserData = ({ user }) => user.userData;

export const getUserId = ({ user }) => user.userData._id;

export const getUserPin = ({ user }) => user.pinCode;
