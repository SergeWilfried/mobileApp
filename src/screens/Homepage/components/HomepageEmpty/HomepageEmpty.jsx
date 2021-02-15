import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import CardIllustration from 'assets/icons/cardIllustration.svg';

import styles from './HomepageEmpty.styles';

function HomepageEmpty({ onPressTopUp }) {
  return (
    <View style={styles.container}>
      <CardIllustration />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Looks like there is no credit in your wallet at the moment.{' '}
          <Text onPress={onPressTopUp} style={[styles.text, styles.linkText]}>
            Deposit
          </Text>{' '}
          to see your first transaction.
        </Text>
      </View>
    </View>
  );
}

HomepageEmpty.propTypes = {
  onPressTopUp: PropTypes.func.isRequired,
};

export default HomepageEmpty;
