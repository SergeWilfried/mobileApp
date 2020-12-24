import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import AuthHeaderLayout from 'components/AuthHeaderLayout';
import Text from 'components/Text';
import Button from 'components/Button';
import AuthHeader from 'components/AuthHeader';
import PhoneNumberInput from 'components/PhoneNumberInput';

import usePhoneNumber from 'hooks/usePhoneNumber';

import styles from './SignUp.styles';

function SignUp({ navigation }) {
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState();

  const handleSubmit = useCallback(() => {
    navigation.navigate('InviteCode', {
      phoneNumber: formattedPhoneNumber,
    });
  }, [navigation, formattedPhoneNumber]);

  const {
    onChangePhone,
    onChangeFormattedPhone,
    phoneError,
    phoneNumberInputRef,
    onContinue,
  } = usePhoneNumber(
    handleSubmit,
    formattedPhoneNumber,
    setFormattedPhoneNumber,
  );

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
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Already a member?
          {' '}
          <Text style={styles.link} onPress={onLogIn}>Log in</Text>
        </Text>
        <Button
          title="Continue"
          disabled={!!phoneError}
          onPress={onContinue}
        />
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
