import React from 'react';
import { SafeAreaView, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import WhiteBackIcon from 'assets/icons/whiteBackIcon.svg';
import HelpIcon from 'assets/icons/helpIcon.svg';

import Text from 'components/Text';

import styles from './MainHeader.styles';

function MainHeader({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  title,
  onLeftIconClick,
  onRightIconClick,
}) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>
        <TouchableOpacity onPress={onLeftIconClick}>
          <LeftIcon />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onRightIconClick}>
          <RightIcon />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
}

MainHeader.propTypes = {
  leftIcon: PropTypes.elementType,
  rightIcon: PropTypes.elementType,
  title: PropTypes.string.isRequired,
  onLeftIconClick: PropTypes.func,
  onRightIconClick: PropTypes.func,
};

MainHeader.defaultProps = {
  leftIcon: WhiteBackIcon,
  rightIcon: HelpIcon,
  onRightIconClick: () => {},
  onLeftIconClick: () => {},
};

export default MainHeader;
