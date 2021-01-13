import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

import Transaction from 'components/Transaction';

import Home from 'assets/icons/home.svg';

import styles from './HomepageTransaction.styles';

function HomepageTransaction({ setLocation }) {
  const getLocation = (event) => {
    setLocation(event.nativeEvent.contentOffset.y);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.iconContainer}><Home /></View>
      <Text style={styles.title}>
        Latest transactions
      </Text>
      <ScrollView onScroll={getLocation}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.subtitle}>Today, 19 June</Text>
            <Text style={styles.subtitle}>+ ₣ 3,588</Text>
          </View>
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
        </View>
        <View style={styles.divideLine} />
      </ScrollView>
    </View>
  );
}

HomepageTransaction.propTypes = {
  setLocation: PropTypes.func,
};

HomepageTransaction.defaultProps = {
  setLocation: () => {},
};

export default HomepageTransaction;
