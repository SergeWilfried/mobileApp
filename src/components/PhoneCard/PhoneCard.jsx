import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import CheckedIcon from 'assets/icons/checkMark.svg';

import styles from './PhoneCard.styles';

function PhoneCard({
  providerName,
  providerLogo: ProviderLogo,
  isChoosed,
  chooseMobileOperator,
}) {
  return (
    <TouchableOpacity
      onPress={chooseMobileOperator}
      activeOpacity={0.9}
      style={[styles.iconContainer, isChoosed && styles.choosedIconContainer]}
    >
      {isChoosed && (
        <View style={styles.icon}>
          <CheckedIcon />
        </View>
      )}
      <ProviderLogo />
      <Text style={styles.providerName}>{providerName}</Text>
    </TouchableOpacity>
  );
}

PhoneCard.propTypes = {
  providerName: PropTypes.string.isRequired,
  providerLogo: PropTypes.elementType.isRequired,
  chooseMobileOperator: PropTypes.func.isRequired,
  isChoosed: PropTypes.bool.isRequired,
};

export default PhoneCard;
