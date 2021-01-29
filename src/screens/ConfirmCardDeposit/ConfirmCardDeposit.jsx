import React, { useCallback } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Text from 'components/Text';
import ConfirmDeposit from 'components/ConfirmDeposit';
import { deposit } from 'resources/transaction/transaction.api';

import styles from './ConfirmCardDeposit.styles';

function ConfirmCardDeposit({ navigation, route }) {
  const {
    CardPayment,
    cardName,
    cardExpirationDate,
    cardNumber,
  } = route.params;

  const handlePressConfirm = useCallback(
    async (amount, formattedValue) => {
      await deposit(amount);
      navigation.navigate('Congratulations', {
        title: 'Congratulations!',
        buttonName: 'Back to Wallet',
        screenStyle: styles.successScreen,
        onContinuePress: () => navigation.navigate('Homepage'),
        subTitle: (
          <Text>
            You just toped up{' '}
            <Text style={styles.amountMoney}>₣ {formattedValue}</Text> to your
            DuniaPay Wallet.
          </Text>
        ),
      });
    },
    [navigation],
  );

  return (
    <ConfirmDeposit
      title="Debit Card Top up"
      subTitle="Enter amount"
      navigation={navigation}
      leftIcon={<CardPayment />}
      handleConfirm={handlePressConfirm}
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
