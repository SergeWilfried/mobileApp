import React from 'react';
import PropTypes from 'prop-types';
import PinCodeInput from 'react-native-smooth-pincode-input';

import styles from './PinInput.styles';

function PinInput({
  keyboardType,
  cellSpacing,
  cellSize,
  onFulfill,
  restrictToNumbers,
  pinCode,
  onPinChange,
  hasErrors,
  autoFocus,
}) {
  return (
    <PinCodeInput
      cellStyle={[
        styles.cellStyle,
        hasErrors && styles.cellStyleError,
      ]}
      textStyle={styles.cellTextStyle}
      cellStyleFocused={styles.cellStyleFocused}
      keyboardType={keyboardType}
      cellSpacing={cellSpacing}
      cellSize={cellSize}
      value={pinCode}
      onTextChange={onPinChange}
      onFulfill={onFulfill}
      restrictToNumbers={restrictToNumbers}
      autoFocus={autoFocus}
    />
  );
}

PinInput.propTypes = {
  onPinChange: PropTypes.func.isRequired,
  onFulfill: PropTypes.func.isRequired,
  cellSize: PropTypes.number,
  cellSpacing: PropTypes.number,
  keyboardType: PropTypes.oneOf(['number-pad', 'numeric']),
  restrictToNumbers: PropTypes.bool,
  pinCode: PropTypes.string,
  hasErrors: PropTypes.bool,
  autoFocus: PropTypes.bool,
};

PinInput.defaultProps = {
  cellSize: 50,
  cellSpacing: 36,
  keyboardType: 'number-pad',
  restrictToNumbers: true,
  pinCode: '',
  hasErrors: false,
  autoFocus: true,
};

export default PinInput;
