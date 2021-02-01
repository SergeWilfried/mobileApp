import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { formatTransactionAmount } from 'helpers/utils.helper';

import ReceiveMoney from 'assets/icons/receiveMoneyGrayIcon.svg';
import SendMoney from 'assets/icons/sendMoneyGrayIcon.svg';

import styles from './Transaction.styles';

const getTransactionType = (type, partner) => {
  if (partner) {
    return type === 'credit' ? 'Received' : 'Sent';
  }

  return type === 'credit' ? 'Deposited' : 'Withdrawn';
};

const getTransactionUsername = (partner) => {
  if (!partner) {
    return 'Myself';
  }

  const { username, firstName = '', lastName = '' } = partner;

  if (firstName || lastName) {
    return `${firstName} ${lastName}`.trim();
  }

  return username;
};

function Transaction({ transactionType, partner, amount }) {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.iconWrapper}>
        {amount > 0 ? <ReceiveMoney /> : <SendMoney />}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{getTransactionUsername(partner)}</Text>
        <Text style={styles.subtitle}>
          {getTransactionType(transactionType, partner)}
        </Text>
      </View>
      <Text style={[styles.moneyAmount, amount > 0 && styles.receiveMoney]}>
        {formatTransactionAmount(amount)}
      </Text>
    </View>
  );
}

Transaction.propTypes = {
  transactionType: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  partner: PropTypes.shape({
    username: PropTypes.string.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
};

Transaction.defaultProps = {
  partner: null,
};

export default Transaction;
