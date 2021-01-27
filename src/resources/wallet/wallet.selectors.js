export const getSelectedPhoneNumber = ({
  wallet: { selectedPhoneNumberId, phoneNumbers },
}) => {
  return phoneNumbers.find(({ id }) => id === selectedPhoneNumberId);
};

export const getPhoneNumbers = ({ wallet: { phoneNumbers } }) => {
  return phoneNumbers;
};
