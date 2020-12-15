import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './HeaderAuthLayout.styles';

function HeaderAuthLayout({ children }) {
  return (
    <View style={styles.wrapper}>
      {children}
    </View>
  );
}

HeaderAuthLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default HeaderAuthLayout;
