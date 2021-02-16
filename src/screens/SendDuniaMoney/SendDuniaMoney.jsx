import React, { useCallback } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { processMoney, getInitials } from 'helpers/utils.helper';
import { transfer } from 'resources/transaction/transaction.api';

import Text from 'components/Text';
import ConfirmDeposit from 'components/ConfirmDeposit';
import LeftIcon from 'components/Contact/LeftIcon';

import styles from './SendDuniaMoney.styles';

function SendDuniaMoney({ navigation, route }) {
  const { phoneContactName, duniapayName, recipientId } = route.params;

  const handlePressConfirm = useCallback(
    async (formattedValue) => {
      await transfer({ amount: formattedValue, recipient: recipientId });

      navigation.navigate('Congratulations', {
        title: 'Congratulations!',
        buttonName: 'Back to Wallet',
        screenStyle: styles.successScreen,
        onContinuePress: () => navigation.navigate('Homepage'),
        subTitle: (
          <Text>
            You just sent{' '}
            <Text style={styles.amountMoney}>
              ₣ {processMoney(formattedValue.toString())}
            </Text>{' '}
            to {phoneContactName}.
          </Text>
        ),
      });
    },
    [navigation],
  );

  return (
    <ConfirmDeposit
      title="Send Money"
      subTitle="Enter amount"
      navigation={navigation}
      handleConfirm={handlePressConfirm}
      leftIcon={<LeftIcon icon={getInitials(phoneContactName)} />}
    >
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{phoneContactName}</Text>
        <Text style={styles.cardSubTitle}>{duniapayName}</Text>
      </View>
    </ConfirmDeposit>
  );
}

SendDuniaMoney.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      phoneContactName: PropTypes.string.isRequired,
      duniapayName: PropTypes.string.isRequired,
      recipientId: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default SendDuniaMoney;
