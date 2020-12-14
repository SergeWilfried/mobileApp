import React, { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { View as AnimatableView } from 'react-native-animatable';

import AuthHeader from 'components/AuthHeader';
import AuthHeaderLayout from 'components/AuthHeaderLayout';
import PinInput from 'components/PinInput';
import { delay } from 'helpers/utils.helper';

import styles from './PinCode.styles';

const SHAKE_DURATION = 650;

function PinCode({
  title,
  subtitle,
  onFulfill,
  validatePinCode,
  withLogo,
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
      <AuthHeaderLayout>
        <AuthHeader
          title={title}
          subtitle={subtitle}
          withLogo={withLogo}
        />
      </AuthHeaderLayout>
      <AnimatableView ref={containerRef} style={styles.pinInput}>
        <PinInput
          pinCode={pinCode}
          onPinChange={setPinCode}
          onFulfill={handleFulfill}
          hasErrors={hasErrors}
        />
      </AnimatableView>
    </View>
  );
}

PinCode.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onFulfill: PropTypes.func.isRequired,
  withLogo: PropTypes.bool,
  validatePinCode: PropTypes.func,
};

PinCode.defaultProps = {
  withLogo: false,
  validatePinCode: () => true,
};

export default PinCode;
