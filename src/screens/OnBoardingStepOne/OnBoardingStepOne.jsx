import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import OnBoarding from 'components/OnBoarding';

function OnBoardingStepOne({ navigation }) {
  const onContinuePress = useCallback(() => {
    navigation.navigate('OnBoardingStepTwo');
  }, [navigation]);

  return (
    <OnBoarding
      title="Instant Money Transfers"
      subTitle="Send money to any phone number with a registered mobile money account or send money using the receiver's DuniaPay username."
      buttonName="Continue"
      linkName="Skip"
      onContinuePress={onContinuePress}
      navigation={navigation}
    />
  );
}

OnBoardingStepOne.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default OnBoardingStepOne;
