import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import PinCode from 'components/PinCode';
import Text from 'components/Text';
import ButtonLink from 'components/ButtonLink';
import AuthHeaderLayout from 'components/AuthHeaderLayout';
import AuthHeader from 'components/AuthHeader';
import * as userActions from 'resources/user/user.actions';
import * as userSelectors from 'resources/user/user.selectors';

import styles from './PinCodeEnter.styles';

function PinCodeEnter({ navigation }) {
  const storedPin = useSelector(userSelectors.getPinCode);
  const dispatch = useDispatch();

  const handlePinEnter = useCallback(() => {
    dispatch(userActions.enterPinCode());
  }, []);
  const validatePinCode = useCallback(
    (pinValue) => {
      return storedPin === pinValue;
    },
    [storedPin],
  );
  const navigateToLogin = useCallback(() => {
    navigation.navigate('SignIn');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthHeaderLayout>
        <AuthHeader
          title="Welcome back!"
          subtitle="Enter your PIN to sign in"
          withLogo
        />
      </AuthHeaderLayout>
      <View style={styles.pinCodeWrapper}>
        <PinCode
          title="Welcome back!"
          subtitle="Enter your PIN to sign in"
          onFulfill={handlePinEnter}
          validatePinCode={validatePinCode}
          withLogo
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.forgotText}>Forgot pin?</Text>
        <ButtonLink
          title="Log in with password"
          textStyle={styles.link}
          onPress={navigateToLogin}
        />
      </View>
    </View>
  );
}

PinCodeEnter.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  }).isRequired,
};

export default PinCodeEnter;
