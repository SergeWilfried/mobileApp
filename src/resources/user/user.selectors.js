export const getUserAuthenticated = ({ user }) =>
  user.accessToken && user.authenticated;

export const getUserData = ({ user }) => user.userData;

export const getUserId = ({ user }) => user.userData._id;

export const getUserPin = ({ user }) => user.pinCode;

export const getHideOnboarding = ({ user }) => user.isOnboardingHidden;

export const getUserToken = ({ user }) => user.accessToken;
export const getPinCode = ({ user }) => user.pinCode;
