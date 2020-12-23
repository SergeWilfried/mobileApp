import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, View } from 'react-native';

import PinCode from 'components/PinCode';
import Text from 'components/Text';
import ButtonLink from 'components/ButtonLink';
import { getPassword } from 'helpers/keychain.helper';

import styles from './PinCodeEnter.styles';

function PinCodeEnter({ navigation }) {
  const [storedPin, setPinCode] = useState(null);

  useEffect(() => {
    const init = async () => {
      const password = await getPassword();

      if (!password) {
        navigation.reset({ index: 0, routes: [{ name: 'SignIn' }] });
        return;
      }

      setPinCode(password);
    };

    init();
  }, [navigation]);

  const handlePinEnter = useCallback(() => {}, []);
  const validatePinCode = useCallback(
    (pinValue) => {
      return storedPin === pinValue;
    },
    [storedPin],
  );
  const navigateToLogin = useCallback(() => {
    navigation.navigate('SignIn');
  }, [navigation]);

  if (!storedPin) {
    return null;
  }

  return (
    <SafeAreaView style={styles.screenWrapper}>
      <View style={styles.container}>
        <PinCode
          title="Welcome back!"
          subtitle="Enter your PIN to sign in"
          onFulfill={handlePinEnter}
          validatePinCode={validatePinCode}
          withLogo
        />
        <View style={styles.footer}>
          <Text style={styles.forgotText}>Forgot pin?</Text>
          <ButtonLink
            title="Log in with password"
            textStyle={styles.link}
            onPress={navigateToLogin}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

PinCodeEnter.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  }).isRequired,
};

export default PinCodeEnter;
