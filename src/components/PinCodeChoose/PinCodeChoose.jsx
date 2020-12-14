import React, { useCallback, useState } from 'react';
import { View } from 'react-native';

import PinCode from 'components/PinCode/PinCode';
import { setPassword } from 'helpers/keychain.helper';

import styles from './PinCodeChoose.styles';

const PIN_STATUSES = {
  CHOOSE: 'choose',
  CONFIRM: 'confirm',
};

function PinCodeChoose() {
  const [pinCode, setPinCode] = useState('');
  const [status, setStatus] = useState(PIN_STATUSES.CHOOSE);

  const handlePinChoose = useCallback((pinValue) => {
    setPinCode(pinValue);
    setStatus(PIN_STATUSES.CONFIRM);
  }, []);

  const handleConfirmation = useCallback(async (pinValue) => {
    await setPassword(pinValue);
  }, []);

  const validateConfirmation = useCallback(
    (pinValue) => {
      return pinValue === pinCode;
    },
    [pinCode],
  );

  return (
    <View style={styles.container}>
      {status === PIN_STATUSES.CHOOSE && (
        <PinCode
          title="Create your PIN"
          subtitle="Choose a 4-digit PIN to protect your account"
          onFulfill={handlePinChoose}
        />
      )}
      {status === PIN_STATUSES.CONFIRM && (
        <PinCode
          title="Repeat your PIN"
          subtitle="Choose a 4-digit PIN to protect your account"
          onFulfill={handleConfirmation}
          validatePinCode={validateConfirmation}
        />
      )}
    </View>
  );
}

export default PinCodeChoose;
