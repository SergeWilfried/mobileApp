import React, { useCallback, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

import DismissKeyboard from 'components/DismissKeyboard';
import AuthHeader from 'components/AuthHeader';
import HeaderWithBackArrow from 'components/HeaderWithBackArrow';
import Button from 'components/Button';
import PhoneNumberInput from 'components/PhoneNumberInput';
import AuthHeaderLayout from 'components/AuthHeaderLayout';

import usePhoneNumber from 'hooks/usePhoneNumber';

import styles from './ForgotPassword.styles';

function ForgotPassword({ navigation }) {
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState();

  const handleSubmit = useCallback(() => {
    navigation.navigate('InviteCode');
  }, [navigation]);

  const onBackNavigation = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const {
    onChangePhone,
    onContinue,
    onChangeFormattedPhone,
    phoneError,
    phoneNumberInputRef,
  } = usePhoneNumber(handleSubmit, formattedPhoneNumber, setFormattedPhoneNumber);

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.screenWrapper}>
        <View style={styles.screen}>
          <AuthHeaderLayout>
            <HeaderWithBackArrow onBackNavigation={onBackNavigation}>
              <AuthHeader
                withLogo
                title="Forgot Password"
                subtitle="Enter your phone number to proceed with the rest"
              />
            </HeaderWithBackArrow>
          </AuthHeaderLayout>
          <View style={styles.inputWrapper}>
            <PhoneNumberInput
              inputRef={phoneNumberInputRef}
              onChangePhone={onChangePhone}
              onChangeFormattedPhone={onChangeFormattedPhone}
              error={phoneError}
            />
          </View>
          <View style={styles.buttonContinueWrapper}>
            <Button
              title="Continue"
              disabled={!!phoneError}
              onPress={onContinue}
            />
          </View>
        </View>
      </SafeAreaView>
    </DismissKeyboard>
  );
}

ForgotPassword.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default ForgotPassword;
