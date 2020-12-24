import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View, Image, PermissionsAndroid, Platform,
} from 'react-native';
import SmsListener from 'react-native-android-sms-listener';

import Button from 'components/Button';
import Input from 'components/Input';
import HeaderWithBackArrow from 'components/HeaderWithBackArrow';
import AuthHeader from 'components/AuthHeader';
import ProgressBar from 'components/ProgressBar';
import AuthHeaderLayout from 'components/AuthHeaderLayout';

import SwapIcon from 'assets/icons/swap.svg';
import MessageIcon from 'assets/icons/message.svg';

import images from 'themes/images';

import styles from './InviteCode.styles';

function InviteCode({ navigation, route }) {
  const [code, setCode] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const { phoneNumber } = route.params;

  useEffect(() => {
    if (Platform.OS !== 'android') return;

    (async () => {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_SMS,
      );
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
      );
    })();
  }, []);

  const onBackNavigation = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onCodeChange = useCallback((text) => {
    setCode(text.replace(/\D*/g, ''));
  }, [setCode]);

  const onContinue = useCallback(() => {
    if (!code) {
      setErrorMessage('Confirmation code is required');
      return;
    }

    if (code.length !== 6) {
      setErrorMessage('Confirmation code should contain 6 digits');
      return;
    }

    setErrorMessage();
    navigation.navigate('CreateAccount', { phoneNumber });
  }, [code, navigation, phoneNumber, setErrorMessage]);

  useEffect(() => {
    const codeRegex = /Your one time code is: ([\d]{6})/;

    const subscription = SmsListener.addListener((message) => {
      const { body } = message;
      // if (originatingAddress !== '+1phone_which_sends_codes') return;
      if (!codeRegex.test(body)) return;
      const [, receivedCode] = body.match(codeRegex);
      setCode(receivedCode);
      onContinue();
    });

    return () => subscription.remove();
  }, [onContinue]);

  return (
    <View style={styles.screenContent}>
      <View>
        <AuthHeaderLayout style={styles.authHeaderLayout}>
          <HeaderWithBackArrow style={styles.header} onBackNavigation={onBackNavigation}>
            <ProgressBar
              currentStep={1}
              totalSteps={3}
            />
          </HeaderWithBackArrow>
          <AuthHeader
            title="Enter your invite code"
            subtitle={`Copy the invite SMS we sent to ${phoneNumber} and come back to this screen`}
          />
        </AuthHeaderLayout>
        <View style={styles.imagesContainer}>
          <Image source={images.duniaLogo} />
          <SwapIcon style={styles.swapIcon} />
          <MessageIcon />
        </View>
        <Input
          label="Code"
          value={code}
          onChangeText={onCodeChange}
          textContentType="oneTimeCode"
          autoFocus
          maxLength={6}
          placeholder="******"
          keyboardType="numeric"
          errorMessage={errorMessage}
        />
      </View>
      <View style={styles.continueButtonWrapper}>
        <Button
          title="Continue"
          onPress={onContinue}
        />
      </View>
    </View>
  );
}

InviteCode.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      phoneNumber: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default InviteCode;
