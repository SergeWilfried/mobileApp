import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import BackIcon from 'assets/icons/backIcon.svg';

import styles from './HeaderWithBackArrow.styles';

function HeaderWithBackArrow({ children, style }) {
  return (
    <View style={[style, styles.header]}>
      <BackIcon style={styles.backIcon} />
      {children}
    </View>
  );
}

HeaderWithBackArrow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  style: ViewPropTypes.style,
};

HeaderWithBackArrow.defaultProps = {
  children: null,
  style: null,
};

export default HeaderWithBackArrow;
