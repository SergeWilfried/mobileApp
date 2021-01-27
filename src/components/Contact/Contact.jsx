import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import LeftIcon from './LeftIcon/index';
import styles from './Contact.styles';

function Contact({ icon, onContactClick, children, isLastContact }) {
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={onContactClick}
        activeOpacity={0.8}
      >
        <LeftIcon icon={icon} />
        {children}
      </TouchableOpacity>
      {!isLastContact && <View style={styles.divideLine} />}
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
};

Contact.defaultProps = {
  onContactClick: () => {},
  isLastContact: false,
};

export default Contact;
