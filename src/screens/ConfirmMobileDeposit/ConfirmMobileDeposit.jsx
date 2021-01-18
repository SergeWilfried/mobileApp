import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Text from 'components/Text';
import ConfirmDeposit from 'components/ConfirmDeposit';

import styles from './ConfirmMobileDeposit.styles';

function ConfirmMobileDeposit({ navigation, route }) {
  const [value, onChangeText] = useState('');

  const { PhoneOperator, phoneNumber } = route.params;

  const handlePressConfirm = useCallback(() => {
    navigation.navigate('Congratulations', {
      title: 'Congratulations!',
      buttonName: 'Back to Wallet',
      screenStyle: styles.successScreen,
      onContinuePress: () => navigation.navigate('DepositMoney'),
      subTitle: (
        <Text>
          You just toped up <Text style={styles.amountMoney}>₣ {value}</Text> to
          your DuniaPay Wallet.
        </Text>
      ),
    });
  }, [navigation, value]);

  return (
    <ConfirmDeposit
      onPressContinue={() => {}}
      amountMoney={value}
      onChangeAmountMoney={onChangeText}
      title="Mobile Money Top up"
      subTitle="Enter amount"
      navigation={navigation}
      leftIcon={PhoneOperator}
      handleConfirm={handlePressConfirm}
    >
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>Phone Number</Text>
        <Text style={styles.cardSubTitle}>{phoneNumber}</Text>
      </View>
    </ConfirmDeposit>
  );
}

ConfirmMobileDeposit.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      PhoneOperator: PropTypes.elementType.isRequired,
      phoneNumber: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ConfirmMobileDeposit;
