import React, { useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Text from 'components/Text';
import ConfirmDeposit from 'components/ConfirmDeposit';

import phoneOperator from 'assets/icons/MtnPhoneOperator.svg';

import styles from './ConfirmMobileDeposit.styles';

function ConfirmMobileDeposit({ navigation }) {
  const [value, onChangeText] = useState('');
  // const { phoneOperator, phoneNumber } = route.params;
  const phoneNumber = '+375336376495';

  return (
    <ConfirmDeposit
      onPressContinue={() => {}}
      amountMoney={value}
      onChangeAmountMoney={onChangeText}
      title="Mobile Money Top up"
      subTitle="Enter amount"
      navigation={navigation}
      leftIcon={phoneOperator}
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
};

export default ConfirmMobileDeposit;
