import React from 'react';
import { Image, View, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import Text from 'components/Text';
import Button from 'components/Button';

import authSuccessImage from 'assets/images/authSuccess.png';

import styles from './AuthSuccess.styles';

function AuthSuccess({
  title,
  subTitle,
  buttonName,
  onContinuePress,
}) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Image source={authSuccessImage} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button onPress={onContinuePress} title={buttonName} />
      </View>
    </SafeAreaView>
  );
}

AuthSuccess.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
  onContinuePress: PropTypes.func.isRequired,
};

export default AuthSuccess;
