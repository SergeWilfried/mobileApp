import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import Text from 'components/Text';

import styles from './Button.styles';

function Button({ type, onPress, disabled, children, textClassName }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
      style={[
        styles.button,
        type === 'link' && styles.link,
        disabled && styles.disabled,
      ]}
    >
      <Text
        style={[
          styles.title,
          type === 'default' && styles.defaultTitle,
          type === 'link' && styles.link,
          textClassName,
        ]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['default', 'link']),
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
  textClassName: Text.propTypes.style,
};

Button.defaultProps = {
  disabled: false,
  type: 'default',
  textClassName: null,
};

export default Button;
