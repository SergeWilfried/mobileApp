import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import ReceiveMoney from 'assets/icons/receiveMoneyGrayIcon.svg';

import styles from './Transaction.styles';

function Transaction() {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.iconWrapper}>
        <ReceiveMoney />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Myself
        </Text>
        <Text style={styles.subtitle}>
          Deposit
        </Text>
      </View>
      <Text style={styles.receiveMoney}>
        + ₣ 3,588
      </Text>
    </View>
  );
}

export default Transaction;
