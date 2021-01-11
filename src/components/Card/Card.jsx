import React from 'react';
import { View, TouchableOpacity, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Card.styles';

function Card({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  leftIconStyle,
  rightIconStyle,
  onCardClick,
  cardStyle,
  children,
}) {
  return (
    <TouchableOpacity
      style={[styles.container, cardStyle]}
      onPress={onCardClick}
      activeOpacity={0.8}
    >
      <View style={leftIconStyle}>
        <LeftIcon />
      </View>
      {children}
      <View style={[styles.rightIcon, rightIconStyle]}>
        <RightIcon />
      </View>
    </TouchableOpacity>
  );
}

Card.propTypes = {
  leftIcon: PropTypes.elementType.isRequired,
  rightIcon: PropTypes.elementType.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  cardStyle: ViewPropTypes.style,
  onCardClick: PropTypes.func,
  leftIconStyle: ViewPropTypes.style,
  rightIconStyle: ViewPropTypes.style,
};

Card.defaultProps = {
  cardStyle: null,
  leftIconStyle: null,
  rightIconStyle: null,
  onCardClick: () => {},
};

export default Card;
