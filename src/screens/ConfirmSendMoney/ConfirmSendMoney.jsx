import React, { useCallback } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Text from 'components/Text';
import ConfirmDeposit from 'components/ConfirmDeposit';

import styles from './ConfirmSendMoney.styles';

function ConfirmSendMoney({ navigation, route }) {
  const { familyName, givenName, leftIcon } = route.params;

  const handlePressConfirm = useCallback(
    async (formattedValue) => {
      navigation.navigate('Congratulations', {
        title: 'Congratulations!',
        buttonName: 'Back to Send',
        screenStyle: styles.successScreen,
        onContinuePress: () => navigation.navigate('SendMoneyMethod'),
        subTitle: (
          <Text>
            You just sent{' '}
            <Text style={styles.amountMoney}>₣ {formattedValue}</Text> to{' '}
            {familyName}.
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
        <Text style={styles.cardTitle}>{familyName}</Text>
        <Text style={styles.cardSubTitle}>{givenName}</Text>
      </View>
    </ConfirmDeposit>
  );
}

ConfirmSendMoney.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      familyName: PropTypes.string.isRequired,
      givenName: PropTypes.string.isRequired,
      leftIcon: PropTypes.elementType.isRequired,
    }),
  }).isRequired,
};

export default ConfirmSendMoney;
