import React from 'react';
import PropTypes from 'prop-types';

import OnBoarding from 'components/OnBoarding';

function OnBoardingStepFour({ navigation }) {
  const onContinuePress = async () => {
    navigation.navigate('SignUp');
  };

  return (
    <OnBoarding
      title="Pay Without Cash"
      subTitle="Pay in stores without cash by scanning your merchant's QR code, enter the payment amount and validate the transaction."
      buttonName="Get started"
      onContinuePress={onContinuePress}
      currentStep={4}
    />
  );
}

OnBoardingStepFour.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};


export default OnBoardingStepFour;
