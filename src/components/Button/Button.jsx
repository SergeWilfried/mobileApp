import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, ViewPropTypes } from 'react-native';

import Text from 'components/Text';

import styles from './Button.styles';

function Button({
  type,
  onPress,
  disabled,
  title,
  style,
  textStyle,
  icon: Icon,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
      style={[
        styles.button,
        type === 'link' && styles.link,
        type === 'social' && styles.social,
        disabled && styles.disabled,
        style,
      ]}
    >
      {Icon && <Icon />}
      {title && (
        <Text
          style={[
            styles.title,
            type === 'default' && styles.defaultTitle,
            type === 'link' && styles.link,
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['default', 'link', 'social']),
  disabled: PropTypes.bool,
  title: PropTypes.string,
  textStyle: Text.propTypes.style,
  icon: PropTypes.elementType,
  style: ViewPropTypes.style,
};

Button.defaultProps = {
  disabled: false,
  type: 'default',
  title: null,
  textStyle: null,
  style: null,
  icon: null,
};

export default Button;
