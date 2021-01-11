import React, { useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Text from 'components/Text';
import ConfirmDeposit from 'components/ConfirmDeposit';

import cardPayment from 'assets/icons/mastercard.svg';

import styles from './ConfirmCardDeposit.styles';

function ConfirmCardDeposit({ navigation }) {
  const [value, onChangeText] = useState('');
  // const { cardPayment, cardName, cardExpirationDate, cardNumber } = route.params;
  const cardName = 'Shojol Islam';
  const cardExpirationDate = 'Exp. 12/22';
  const cardNumber = '•••• 1234';

  return (
    <ConfirmDeposit
      onPressContinue={() => {}}
      amountMoney={value}
      onChangeAmountMoney={onChangeText}
      title="Debit Card Top up"
      subTitle="Enter amount"
      navigation={navigation}
      leftIcon={cardPayment}
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
};

export default ConfirmCardDeposit;
