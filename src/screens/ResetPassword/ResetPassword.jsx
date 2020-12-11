import React, { useState, useCallback } from 'react';
import { View, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

import AuthHeader from 'components/AuthHeader';
import DismissKeyboard from 'components/DismissKeyboard';
import AuthHeaderLayout from 'components/HeaderAuthLayout';
import HeaderWithBackArrow from 'components/HeaderWithBackArrow';
import Button from 'components/Button';
import Input from 'components/Input';
import Text from 'components/Text';

import { validate } from 'helpers/validate';

import styles from './ResetPassword.styles';

function ResetPassword({ navigation }) {
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isValidPassword, setValidPassword] = useState(false);

  const onBackNavigation = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onResetPassword = useCallback(() => {
    const isValid = password && password === repeatPassword && !validate(password, 'password');
    setValidPassword(isValid);
  }, [password, repeatPassword, setValidPassword]);

  const handleChangePassword = useCallback((str) => {
    setPassword(str);
    const isValid = str.length > 8 && str === repeatPassword && !validate(str, 'password');
    setValidPassword(isValid);
  }, [repeatPassword, setPassword, setValidPassword]);

  const handleChangeRepeatPassword = useCallback((str) => {
    setRepeatPassword(str);
    const isValid = str.length > 8 && str === password && !validate(str, 'password');
    setValidPassword(isValid);
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
                subtitle="Enter your new secure password
        to proceed with the rest"
              />
            </HeaderWithBackArrow>
          </AuthHeaderLayout>
          <View style={styles.wrapperInput}>
            <Input
              label="New password"
              value={password}
              onChangeText={handleChangePassword}
              textContentType="password"
            />
            <Text style={styles.passwordRules}>
              1. At least  8 characters long
              {'\n'}
              2. Include at least one special characters (@ $ & %)
            </Text>
            <Input
              label="Repeat new password"
              value={repeatPassword}
              onChangeText={handleChangeRepeatPassword}
              textContentType="password"
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
