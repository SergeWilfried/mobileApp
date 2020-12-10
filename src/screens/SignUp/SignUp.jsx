import React, { useCallback, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { View, SafeAreaView } from 'react-native';

import Text from 'components/Text';
import Button from 'components/Button';
import AuthHeader from 'components/AuthHeader';

import PhoneNumberInput from './components/PhoneNumberInput';

import styles from './SignUp.styles';

function SignUp({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState();
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState();
  const [phoneError, setPhoneError] = useState();
  const phoneNumberInput = useRef();

  const onChangePhone = useCallback((text) => {
    setPhoneError(null);
    setPhoneNumber(text);
  }, []);

  const onChangeFormattedPhone = useCallback((text) => {
    setPhoneError(null);
    setFormattedPhoneNumber(text);
  }, []);

  const onContinue = useCallback(() => {
    const isValidPhone = phoneNumberInput.current?.isValidNumber(phoneNumber);
    if (!isValidPhone) {
      setPhoneError('Phone number is invalid');
    } else {
      // send formattedPhoneNumber
      navigation.navigate('InviteCode');
    }
  }, [phoneNumber, navigation]);

  const onLogIn = useCallback(() => {

  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.screenContent}>
        <View>
          <AuthHeader
            withLogo
            title="Welcome to DuniaPay!"
            subtitle="To get started, verify your phone number"
          />
          <View style={styles.phoneContainer}>
            <PhoneNumberInput
              inputRef={phoneNumberInput}
              onChangePhone={onChangePhone}
              onChangeFormattedPhone={onChangeFormattedPhone}
              error={phoneError}
            />
          </View>
        </View>
        <View style={{ width: '100%' }}>
          <Text style={styles.footerText}>
            Already a member?
            {' '}
            <Text style={styles.link} onPress={onLogIn}>Log in</Text>
          </Text>
          <Button
            title="Continue"
            onPress={onContinue}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignUp;
