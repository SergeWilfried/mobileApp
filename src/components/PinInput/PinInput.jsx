import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import PinCodeInput from 'react-native-smooth-pincode-input';

import styles from './PinInput.styles';

function PinInput({
  keyboardType,
  cellSpacing,
  cellSize,
  onFulfill,
}) {
  const [pinCode, setPinCode] = useState('');

  const handleChange = useCallback((value) => {
    setPinCode(value.replace(/\D+/, ''));
  }, []);

  return (
    <PinCodeInput
      cellStyle={styles.cellStyle}
      textStyle={styles.cellTextStyle}
      cellStyleFocused={styles.cellStyleFocused}
      keyboardType={keyboardType}
      cellSpacing={cellSpacing}
      cellSize={cellSize}
      value={pinCode}
      onTextChange={handleChange}
      onFulfill={onFulfill}
    />
  );
}

PinInput.propTypes = {
  cellSize: PropTypes.number,
  cellSpacing: PropTypes.number,
  keyboardType: PropTypes.oneOf(['number-pad', 'numeric']),
  onFulfill: PropTypes.func.isRequired,
};

PinInput.defaultProps = {
  cellSize: 50,
  cellSpacing: 36,
  keyboardType: 'number-pad',
};

export default PinInput;
