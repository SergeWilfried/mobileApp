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
  icon: Icon,
  buttonStyle,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
      style={[
        styles.button,
        type === 'social' && styles.social,
        buttonStyle,
        disabled && styles.disabled,
        style,
      ]}
    >
      {Icon && <Icon />}
      {title && (
        <Text
          style={[
            styles.title,
            styles.defaultTitle,
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
  type: PropTypes.oneOf(['default', 'social']),
  disabled: PropTypes.bool,
  title: PropTypes.string,
  icon: PropTypes.elementType,
  style: ViewPropTypes.style,
  buttonStyle: Text.propTypes.style,
};

Button.defaultProps = {
  disabled: false,
  type: 'default',
  title: null,
  style: null,
  icon: null,
  buttonStyle: null,
};

export default Button;
