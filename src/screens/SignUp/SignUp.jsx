import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import AuthHeaderLayout from 'components/AuthHeaderLayout';
import Text from 'components/Text';
import Button from 'components/Button';
import AuthHeader from 'components/AuthHeader';
import PhoneNumberInput from 'components/PhoneNumberInput';

import * as userApi from 'resources/user/user.api';
import usePhoneNumber from 'hooks/usePhoneNumber';

import styles from './SignUp.styles';

function SignUp({ navigation }) {
  const handleSubmit = useCallback(
    async (phoneNumber) => {
      await userApi.sendCode(phoneNumber);
      navigation.navigate('InviteCode', {
        phoneNumber,
      });
    },
    [navigation],
  );

  const {
    onChangePhone,
    onChangeFormattedPhone,
    phoneNumberInputRef,
    onContinue,
    phoneError,
  } = usePhoneNumber(handleSubmit);

  const onLogIn = useCallback(() => {
    navigation.navigate('SignIn');
  }, [navigation]);

  return (
    <View style={styles.screenContent}>
      <View style={styles.mainContent}>
        <AuthHeaderLayout>
          <AuthHeader
            withLogo
            title="Welcome to DuniaPay!"
            subtitle="To get started, verify your phone number"
          />
        </AuthHeaderLayout>
        <View style={styles.phoneContainer}>
          <PhoneNumberInput
            inputRef={phoneNumberInputRef}
            onChangePhone={onChangePhone}
            onChangeFormattedPhone={onChangeFormattedPhone}
            error={phoneError}
            text="Phone number"
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Already a member?{' '}
          <Text style={styles.link} onPress={onLogIn}>
            Log in
          </Text>
        </Text>
        <Button title="Continue" disabled={!!phoneError} onPress={onContinue} />
      </View>
    </View>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignUp;
