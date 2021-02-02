import React, { useCallback } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Text from 'components/Text';
import ConfirmDeposit from 'components/ConfirmDeposit';

import { getPhoneOperatorIcon } from 'helpers/phoneOperator.helper';
import { deposit } from 'resources/transaction/transaction.api';
import { getSelectedPhoneNumber } from 'resources/wallet/wallet.selectors';
import { processMoney } from 'helpers/utils.helper';

import styles from './ConfirmMobileDeposit.styles';

function ConfirmMobileDeposit({ navigation }) {
  const { phoneOperator, phoneNumber } = useSelector(getSelectedPhoneNumber);
  const handlePressConfirm = useCallback(
    async (amount, formattedAmount) => {
      await deposit(amount);

      navigation.navigate('Congratulations', {
        title: 'Congratulations!',
        buttonName: 'Back to Wallet',
        screenStyle: styles.successScreen,
        onContinuePress: () => navigation.navigate('Homepage'),
        subTitle: (
          <Text>
            You just toped up{' '}
            <Text style={styles.amountMoney}>
              ₣ {processMoney(formattedAmount)}
            </Text>{' '}
            to your DuniaPay Wallet.
          </Text>
        ),
      });
    },
    [navigation],
  );
  const MobileOperatorIcon = getPhoneOperatorIcon(phoneOperator);

  return (
    <ConfirmDeposit
      title="Mobile Money Deposit"
      subTitle="Enter amount"
      navigation={navigation}
      leftIcon={<MobileOperatorIcon />}
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
};

export default ConfirmMobileDeposit;
