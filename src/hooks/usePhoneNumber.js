import { useState, useCallback, useRef } from 'react';

function usePhoneNumber(handleSubmit) {
  const [phoneNumber, setPhoneNumber] = useState();
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState();
  const [phoneError, setPhoneError] = useState();
  const phoneNumberInputRef = useRef();

  const onChangePhone = useCallback((text) => {
    setPhoneError(null);
    setPhoneNumber(text);
  }, [setPhoneError, setPhoneNumber]);

  const onChangeFormattedPhone = useCallback((text) => {
    setPhoneError(null);
    setFormattedPhoneNumber(text);
  }, [setPhoneError, setFormattedPhoneNumber]);

  const onContinue = useCallback(() => {
    const isValidPhone = phoneNumberInputRef.current?.isValidNumber(phoneNumber);
    if (!isValidPhone) {
      setPhoneError('Phone number is invalid');
    } else {
      handleSubmit();
    }
  }, [phoneNumber, handleSubmit]);

  return {
    onChangePhone,
    onContinue,
    onChangeFormattedPhone,
    phoneError,
    formattedPhoneNumber,
    phoneNumber,
    phoneNumberInputRef,
  };
}

export default usePhoneNumber;
