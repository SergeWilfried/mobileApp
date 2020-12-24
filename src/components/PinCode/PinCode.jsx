import React, { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import PinInput from 'components/PinInput';
import { delay } from 'helpers/utils.helper';

import styles from './PinCode.styles';

const SHAKE_DURATION = 650;

function PinCode({
  onFulfill,
  validatePinCode,
}) {
  const [pinCode, setPinCode] = useState('');
  const [hasErrors, setErrors] = useState(false);
  const containerRef = useRef();

  const shake = useCallback(() => {
    containerRef.current.shake(SHAKE_DURATION);
  }, []);

  const handleFulfill = useCallback(
    async (pinValue) => {
      const isValidPin = validatePinCode(pinValue);

      if (!isValidPin) {
        shake();
        setErrors(true);
        setPinCode('');
        await delay(500);
        setErrors(false);
        return;
      }

      onFulfill(pinValue);
    },
    [validatePinCode, onFulfill, shake],
  );

  return (
    <View style={styles.pinWrapper}>
      <PinInput
        ref={containerRef}
        pinCode={pinCode}
        onPinChange={setPinCode}
        onFulfill={handleFulfill}
        hasErrors={hasErrors}
      />
    </View>
  );
}

PinCode.propTypes = {
  onFulfill: PropTypes.func.isRequired,
  validatePinCode: PropTypes.func,
};

PinCode.defaultProps = {
  validatePinCode: () => true,
};

export default PinCode;
