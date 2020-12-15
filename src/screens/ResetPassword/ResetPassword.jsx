import React, { useState, useCallback } from 'react';
import { View, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

import AuthHeader from 'components/AuthHeader';
import DismissKeyboard from 'components/DismissKeyboard';
import AuthHeaderLayout from 'components/AuthHeaderLayout';
import HeaderWithBackArrow from 'components/HeaderWithBackArrow';
import Button from 'components/Button';
import Input from 'components/Input';
import Text from 'components/Text';

import { validatePassword } from 'helpers/validate';
import { PASSWORD } from 'helpers/constants';

import styles from './ResetPassword.styles';

const validate = (password1, password2) => password1 === password2
  && validatePassword(password1);


function ResetPassword({ navigation }) {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [isValidPassword, setValidPassword] = useState(false);

  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [passwordRepeatErrorMessage, setPasswordRepeatErrorMessage] = useState('');

  const onBackNavigation = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handlePasswordBlur = useCallback(() => {
    if (!validatePassword(password)) {
      setPasswordErrorMessage('Enter correct password due to rules');
    } else {
      setPasswordErrorMessage('');
    }
  }, [setPasswordErrorMessage, password]);

  const handleRepeatPasswordBlur = useCallback(() => {
    if (password !== repeatPassword) {
      setPasswordRepeatErrorMessage('Please correct repeat password');
    } else {
      setPasswordRepeatErrorMessage('');
    }
  }, [password, repeatPassword, setPasswordRepeatErrorMessage]);

  const onResetPassword = useCallback(() => {
    setValidPassword(validate(password, repeatPassword));
  }, [password, repeatPassword, setValidPassword]);

  const handleChangePassword = useCallback((str) => {
    setPasswordErrorMessage('');
    setPassword(str);
    setValidPassword(validate(str, repeatPassword));
  }, [repeatPassword, setPassword, setValidPassword]);

  const handleChangeRepeatPassword = useCallback((str) => {
    setPasswordRepeatErrorMessage('');
    setRepeatPassword(str);
    setValidPassword(validate(password, str));
  }, [setRepeatPassword, password, setValidPassword]);

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.screenWrapper}>
        <View style={styles.screen}>
          <AuthHeaderLayout>
            <HeaderWithBackArrow onBackNavigation={onBackNavigation}>
              <AuthHeader
                withLogo
                title="Reset Password"
                subtitle="Enter your new secure password to proceed with the rest"
              />
            </HeaderWithBackArrow>
          </AuthHeaderLayout>
          <View style={styles.wrapperInput}>
            <Input
              label="New password"
              value={password}
              onChangeText={handleChangePassword}
              textContentType="password"
              errorMessage={passwordErrorMessage}
              onBlur={handlePasswordBlur}
            />
            <View style={styles.passwordRulesWrapper}>
              <Text style={styles.passwordRule}>
                1. At least
                {' '}
                {PASSWORD.length}
                {' '}
                characters long
              </Text>
              <Text style={styles.passwordRule}>
                2. Include at least one special characters (@ $ & %)
              </Text>
              <Text style={styles.passwordRule}>
                3. Include at least one uppercase letter
              </Text>
            </View>
            <Input
              label="Repeat new password"
              value={repeatPassword}
              onChangeText={handleChangeRepeatPassword}
              textContentType="password"
              onBlur={handleRepeatPasswordBlur}
              errorMessage={passwordRepeatErrorMessage}
            />
          </View>
          <View style={styles.wrapperButton}>
            <Button disabled={!isValidPassword} title="Reset Password" onPress={onResetPassword} />
          </View>
        </View>
      </SafeAreaView>
    </DismissKeyboard>
  );
}

ResetPassword.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default ResetPassword;
