import React, { useCallback } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Text from 'components/Text';
import ConfirmDeposit from 'components/ConfirmDeposit';
import CardUsernameIcon from 'components/CardUsernameIcon';

import { processMoney } from 'helpers/utils.helper';

import styles from './SendMobileMoney.styles';

function SendMobileMoney({ navigation }) {
  // const { phoneContactName, duniapayName } = route.params;
  const phoneContactName = 'Nick';
  const duniapayName = 'Awesome';
  const handlePressConfirm = useCallback(
    async (amount, formattedAmount) => {
      navigation.navigate('Congratulations', {
        title: 'Congratulations!',
        buttonName: 'Return to Wallet',
        screenStyle: styles.successScreen,
        onContinuePress: () => navigation.navigate('Homepage'),
        subTitle: (
          <Text>
            You just sent{' '}
            <Text style={styles.amountMoney}>
              ₣ {processMoney(formattedAmount)}
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
      leftIcon={<CardUsernameIcon username={phoneContactName} />}
    >
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{phoneContactName}</Text>
        <Text style={styles.cardSubTitle}>{duniapayName}</Text>
      </View>
    </ConfirmDeposit>
  );
}

SendMobileMoney.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      phoneContactName: PropTypes.string.isRequired,
      duniapayName: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default SendMobileMoney;
