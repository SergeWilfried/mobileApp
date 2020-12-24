import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import PinCode from 'components/PinCode/PinCode';
import ProgressBar from 'components/ProgressBar';
import AuthHeaderLayout from 'components/AuthHeaderLayout';
import AuthHeader from 'components/AuthHeader';
import FullScreenLoader from 'components/FullScreenLoader';
import { setPassword } from 'helpers/keychain.helper';
import * as usersApi from 'resources/user/user.actions';

import styles from './PinCodeChoose.styles';


const PIN_STATUSES = {
  CHOOSE: 'choose',
  CONFIRM: 'confirm',
};

function PinCodeChoose({ navigation, route }) {
  const [pinCode, setPinCode] = useState('');
  const [status, setStatus] = useState(PIN_STATUSES.CHOOSE);
  const [isSubmitting, setSubmitting] = useState(false);

  const dispatch = useDispatch();

  const headerTitle = useMemo(() => {
    return status === PIN_STATUSES.CHOOSE
      ? 'Create your PIN' : 'Repeat your PIN';
  }, [status]);

  const handlePinChoose = useCallback((pinValue) => {
    setPinCode(pinValue);
    setStatus(PIN_STATUSES.CONFIRM);
  }, []);

  const handleConfirmation = useCallback(async (pinValue) => {
    const { user } = route.params;
    try {
      setSubmitting(true);
      const userData = await dispatch(usersApi.signUp(user));
      await setPassword(pinValue);
      setSubmitting(false);

      navigation.reset({
        index: 0,
        routes: [
          { name: 'Congratulations', params: { userData } },
        ],
      });
    } catch (e) {
      navigation.navigate('SignUp');
    }
  }, [dispatch, route, navigation]);

  const validateConfirmation = useCallback(
    (pinValue) => {
      return pinValue === pinCode;
    },
    [pinCode],
  );

  return (
    <View style={styles.container}>
      {isSubmitting && <FullScreenLoader />}
      <AuthHeaderLayout>
        <ProgressBar currentStep={3} totalSteps={3} />
        <View style={styles.authHeaderContainer}>
          <AuthHeader
            title={headerTitle}
            subtitle="Choose a 4-digit PIN to protect your account"
          />
        </View>
      </AuthHeaderLayout>
      <View style={styles.pinCodeContainer}>
        {status === PIN_STATUSES.CHOOSE && (
          <PinCode
            title="Create your PIN"
            subtitle="Choose a 4-digit PIN to protect your account"
            onFulfill={handlePinChoose}
          />
        )}
        {status === PIN_STATUSES.CONFIRM && (
          <PinCode
            title="Repeat your PIN"
            subtitle="Choose a 4-digit PIN to protect your account"
            onFulfill={handleConfirmation}
            validatePinCode={validateConfirmation}
          />
        )}
      </View>
    </View>
  );
}

PinCodeChoose.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      user: PropTypes.shape({
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        verificationToken: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default PinCodeChoose;
