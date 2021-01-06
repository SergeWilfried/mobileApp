import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import CardIllustration from 'assets/icons/cardIllustration.svg';

import styles from './HomepageEmpty.styles';

function HomepageEmpty() {
  return (
    <View style={styles.container}>
      <CardIllustration />
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Looks like there is no credit in your wallet at the moment.
          {' '}
          <Text
            onPress={() => {}}
            style={styles.linkText}
          >
            Top up
          </Text>
          {' '}
          to see your first transaction.
        </Text>
      </View>
    </View>
  );
}

export default HomepageEmpty;
