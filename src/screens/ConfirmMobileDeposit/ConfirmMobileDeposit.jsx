import React, { useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Text from 'components/Text';
import ConfirmDeposit from 'components/ConfirmDeposit';

import styles from './ConfirmMobileDeposit.styles';

function ConfirmMobileDeposit({ navigation, route }) {
  const [value, onChangeText] = useState('');

  const { PhoneOperator, phoneNumber } = route.params;

  return (
    <ConfirmDeposit
      onPressContinue={() => {}}
      amountMoney={value}
      onChangeAmountMoney={onChangeText}
      title="Mobile Money Top up"
      subTitle="Enter amount"
      navigation={navigation}
      leftIcon={PhoneOperator}
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
