import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

import Text from 'components/Text';
import DownArrow from 'assets/icons/downArrow.svg';

import colors from 'themes/colors';

import styles from './PhoneNumberInput.styles';

function PhoneNumberInput({
  inputRef,
  onChangePhone,
  onChangeFormattedPhone,
  error,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Phone number</Text>
      <PhoneInput
        ref={inputRef}
        defaultCode="US"
        layout="first"
        placeholder=" "
        onChangeText={onChangePhone}
        onChangeFormattedText={onChangeFormattedPhone}
        renderDropdownImage={<DownArrow />}
        containerStyle={[styles.inputContainer, error && styles.inputContainerError]}
        codeTextStyle={[styles.text, styles.codeText]}
        textInputStyle={[styles.text, styles.phoneText]}
        textContainerStyle={styles.textInputContainer}
        countryPickerButtonStyle={styles.countryInputContainer}
        textInputProps={{ selectionColor: colors.theme }}
      />
      {error && (
        <Text style={styles.error}>{error}</Text>
      )}
    </View>
  );
}

PhoneNumberInput.propTypes = {
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.shape({}),
    }),
  ]),
  onChangePhone: PropTypes.func.isRequired,
  onChangeFormattedPhone: PropTypes.func.isRequired,
  error: PropTypes.string,
};

PhoneNumberInput.defaultProps = {
  inputRef: null,
  error: null,
};

export default PhoneNumberInput;