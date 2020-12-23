import React, { useCallback } from 'react';
import { Image, View, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import * as userActions from 'resources/user/user.actions';

import Text from 'components/Text';
import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';
import ProgressIndicator from './components/ProgressIndicator';

import OnBoardingImage from 'assets/images/onBoarding.png';

import styles from './OnBoarding.styles';

function OnBoarding({
  title,
  subTitle,
  buttonName,
  linkName,
  onContinuePress,
  handleSkipOnBoarding,
  currentStep,
}) {
  const dispatch = useDispatch();

  const handleSkip = useCallback(() => {
    handleSkipOnBoarding();
    dispatch(userActions.setUserAuthenticated());
  }, [dispatch, handleSkipOnBoarding]);


  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.linkWrapper}>
        {Boolean(linkName) && (
          <ButtonLink
            onPress={handleSkip}
            textStyle={styles.linkText}
            buttonStyle={styles.link}
            title={linkName}
          />
        )}
      </View>
      <View style={styles.container}>
        <Image source={OnBoardingImage} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <ProgressIndicator currentStep={currentStep} stepCount={4} />
        <View style={styles.buttonWrapper}>
          <Button onPress={onContinuePress} title={buttonName} buttonStyle={styles.button} />
        </View>
      </View>
    </SafeAreaView>
  );
}

OnBoarding.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
  onContinuePress: PropTypes.func.isRequired,
  linkName: PropTypes.string,
  currentStep: PropTypes.number,
  handleSkipOnBoarding: PropTypes.func,
};

OnBoarding.defaultProps = {
  linkName: '',
  currentStep: 1,
  handleSkipOnBoarding: () => {},
};

export default OnBoarding;
