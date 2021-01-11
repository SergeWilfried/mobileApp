import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Text from 'components/Text';

import BackIcon from 'assets/icons/blackBackIcon.svg';

import styles from './MainHeader.styles';

function MainHeader({ navigation, scene }) {
  const { title, subTitle } = scene.descriptor.options;
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack} style={styles.arrowBack}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      {Boolean(subTitle) && (
        <Text style={styles.headerSubTitle}>{subTitle}</Text>
      )}
    </>
  );
}

MainHeader.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  scene: PropTypes.shape({
    descriptor: PropTypes.shape({
      options: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      }).isRequired,
    }).isRequired,
  }),
};

MainHeader.defaultProps = {
  scene: {
    descriptor: {
      options: {
        subTitle: null,
      },
    },
  },
};

export default MainHeader;
