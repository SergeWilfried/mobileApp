import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import ReceiveMoney from 'assets/icons/receiveMoneyGrayIcon.svg';

import styles from './Transaction.styles';

function Transaction({ username, transactionType, amount }) {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.iconWrapper}>
        <ReceiveMoney />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{username}</Text>
        <Text style={styles.subtitle}>{transactionType}</Text>
      </View>
      <Text style={styles.receiveMoney}>{amount}</Text>
    </View>
  );
}

Transaction.propTypes = {
  username: PropTypes.string.isRequired,
  transactionType: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};

export default Transaction;
