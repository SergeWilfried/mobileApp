import React, { useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import Text from 'components/Text';

import BackIcon from 'assets/icons/blackBackIcon.svg';

import styles from './MainHeader.styles';

function MainHeader({ scene, title: titleHeader, subTitle: subTitleHeader }) {
  const navigation = useNavigation();

  const title = titleHeader || scene.descriptor.options.title;
  const subTitle = subTitleHeader || scene.descriptor.options.subTitle;

  const handleGoBack = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }, [navigation]);

  return (
    <View style={styles.header}>
      <View style={styles.titleWrapper}>
        <TouchableOpacity onPress={handleGoBack} style={styles.arrowBack}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
      {Boolean(subTitle) && (
        <Text style={styles.headerSubTitle}>{subTitle}</Text>
      )}
    </View>
  );
}

MainHeader.propTypes = {
  scene: PropTypes.shape({
    descriptor: PropTypes.shape({
      options: PropTypes.shape({
        title: PropTypes.string,
        subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      }),
    }),
  }),
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

MainHeader.defaultProps = {
  scene: {
    descriptor: {
      options: {
        subTitle: null,
      },
    },
  },
  title: '',
  subTitle: '',
};

export default MainHeader;
