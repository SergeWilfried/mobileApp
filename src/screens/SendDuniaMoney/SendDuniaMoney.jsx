import React, { useCallback } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { processMoney, getInitials } from 'helpers/utils.helper';

import Text from 'components/Text';
import ConfirmDeposit from 'components/ConfirmDeposit';
import LeftIcon from 'components/Contact/LeftIcon';

import styles from './SendDuniaMoney.styles';

function SendDuniaMoney({ navigation, route }) {
  const { phoneContactName, duniapayName } = route.params;
  const leftIcon = () => <LeftIcon icon={getInitials(phoneContactName)} />;

  const handlePressConfirm = useCallback(
    async (formattedValue) => {
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
      title="Debit Card Top up"
      subTitle="Enter amount"
      navigation={navigation}
      handleConfirm={handlePressConfirm}
      leftIcon={leftIcon}
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
    }),
  }).isRequired,
};

export default SendDuniaMoney;
