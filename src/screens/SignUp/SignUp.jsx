import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { View, SafeAreaView } from 'react-native';

import DismissKeyboard from 'components/DismissKeyboard';
import Text from 'components/Text';
import Button from 'components/Button';
import AuthHeader from 'components/AuthHeader';
import AuthHeaderLayout from 'components/HeaderAuthLayout';
import PhoneNumberInput from 'components/PhoneNumberInput';

import usePhoneNumber from 'hooks/usePhoneNumber';

import styles from './SignUp.styles';

function SignUp({ navigation }) {
  const handleSubmit = useCallback(() => {
    navigation.navigate('InviteCode');
  }, [navigation]);

  const {
    onChangePhone,
    onChangeFormattedPhone,
    phoneError,
    phoneNumberInputRef,
    onContinue,
  } = usePhoneNumber(handleSubmit);

  const onLogIn = useCallback(() => {

  }, []);

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.screen}>
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
      </SafeAreaView>
    </DismissKeyboard>
  );
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignUp;
