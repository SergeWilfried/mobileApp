import React, { useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Text from 'components/Text';
import ConfirmDeposit from 'components/ConfirmDeposit';

import styles from './ConfirmCardDeposit.styles';

function ConfirmCardDeposit({ navigation, route }) {
  const [value, onChangeText] = useState('');

  const {
    CardPayment,
    cardName,
    cardExpirationDate,
    cardNumber,
  } = route.params;

  return (
    <ConfirmDeposit
      onPressContinue={() => {}}
      amountMoney={value}
      onChangeAmountMoney={onChangeText}
      title="Debit Card Top up"
      subTitle="Enter amount"
      navigation={navigation}
      leftIcon={CardPayment}
    >
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{cardNumber}</Text>
        <View style={styles.cardInfo}>
          <Text style={styles.cardSubTitle}>{cardName}</Text>
          <Text style={[styles.cardSubTitle, styles.cardSubTitleRightPart]}>
            {cardExpirationDate}
          </Text>
        </View>
      </View>
    </ConfirmDeposit>
  );
}

ConfirmCardDeposit.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      CardPayment: PropTypes.elementType.isRequired,
      cardName: PropTypes.string.isRequired,
      cardExpirationDate: PropTypes.string.isRequired,
      cardNumber: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ConfirmCardDeposit;
