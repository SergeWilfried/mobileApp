import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import LeftIcon from './LeftIcon';

import styles from './Contact.styles';

function Contact({
  icon,
  onContactClick,
  children,
  isLastContact,
  rightIcon: RightIcon,
  isDivideLine,
}) {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.contactInfoContainer}
          onPress={onContactClick}
          activeOpacity={0.8}
        >
          <LeftIcon icon={icon} />
          {children}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          {RightIcon && (
            <View style={styles.rightIcon}>
              <RightIcon />
            </View>
          )}
        </TouchableOpacity>
      </View>
      {!isLastContact && isDivideLine && <View style={styles.divideLine} />}
    </>
  );
}

Contact.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onContactClick: PropTypes.func,
  isLastContact: PropTypes.bool,
  rightIcon: PropTypes.elementType,
  isDivideLine: PropTypes.bool,
};

Contact.defaultProps = {
  onContactClick: () => {},
  isLastContact: false,
  rightIcon: null,
  isDivideLine: true,
};

export default Contact;
