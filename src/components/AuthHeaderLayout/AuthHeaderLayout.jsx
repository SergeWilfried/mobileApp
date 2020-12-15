import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './AuthHeaderLayout.styles';

function AuthHeaderLayout({ children }) {
  return (
    <View style={styles.wrapper}>
      {children}
    </View>
  );
}

AuthHeaderLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AuthHeaderLayout;
