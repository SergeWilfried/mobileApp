import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Text from 'components/Text';

import styles from './AuthHeader.styles';

function AuthHeader({
  header, title, subtitle,
}) {
  return (
    <View style={styles.container}>
      {header}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

AuthHeader.propTypes = {
  header: PropTypes.element,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

AuthHeader.defaultProps = {
  header: null,
  subtitle: '',
};

export default AuthHeader;
