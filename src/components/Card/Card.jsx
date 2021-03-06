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
  rightIconClick,
}) {
  return (
    <View style={[styles.container, cardStyle]}>
      <TouchableOpacity onPress={onCardClick} style={styles.leftPart}>
        <View style={leftIconStyle}>{LeftIcon}</View>
        {children}
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.rightIcon, rightIconStyle]}
        onPress={rightIconClick}
      >
        {RightIcon}
      </TouchableOpacity>
    </View>
  );
}

Card.propTypes = {
  leftIcon: PropTypes.element.isRequired,
  rightIcon: PropTypes.element.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  cardStyle: ViewPropTypes.style,
  onCardClick: PropTypes.func,
  leftIconStyle: ViewPropTypes.style,
  rightIconStyle: ViewPropTypes.style,
  rightIconClick: PropTypes.func,
};

Card.defaultProps = {
  cardStyle: null,
  leftIconStyle: null,
  rightIconStyle: null,
  onCardClick: () => {},
  rightIconClick: () => {},
};

export default Card;
