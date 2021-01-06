import React from 'react';
import { View, TouchableOpacity, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import styles from './Card.styles';

function Card({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  leftIconStyle,
  rightIconStyle,
  onLeftIconClick,
  onRightIconClick,
  cardStyle,
  children,
}) {
  return (
    <View style={[styles.container, cardStyle]}>
      <TouchableOpacity onPress={onLeftIconClick} style={leftIconStyle}>
        <LeftIcon />
      </TouchableOpacity>
      {children}
      <TouchableOpacity
        onPress={onRightIconClick}
        style={[styles.rightIcon, rightIconStyle]}
      >
        <RightIcon />
      </TouchableOpacity>
    </View>
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
  onLeftIconClick: PropTypes.func,
  onRightIconClick: PropTypes.func,
  leftIconStyle: ViewPropTypes.style,
  rightIconStyle: ViewPropTypes.style,
};

Card.defaultProps = {
  cardStyle: null,
  leftIconStyle: null,
  rightIconStyle: null,
  onRightIconClick: () => {},
  onLeftIconClick: () => {},
};

export default Card;
