import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Text from 'components/Text';
import styles from './Contact.styles';

function Contact({ icon, onCardClick, children, isLastContact }) {
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={onCardClick}
        activeOpacity={0.8}
      >
        <View style={styles.profileContainer}>
          <Text style={styles.initials}>{icon}</Text>
        </View>
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
  onCardClick: PropTypes.func,
  isLastContact: PropTypes.bool,
};

Contact.defaultProps = {
  onCardClick: () => {},
  isLastContact: false,
};

export default Contact;
