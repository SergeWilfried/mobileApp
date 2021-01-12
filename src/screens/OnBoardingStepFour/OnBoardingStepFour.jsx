import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import * as userActions from 'resources/user/user.actions';
import OnBoarding from 'components/OnBoarding';

function OnBoardingStepFour({ navigation }) {
  const dispatch = useDispatch();

  const onContinuePress = useCallback(async () => {
    dispatch(userActions.hideOnboarding(true));
  }, [navigation]);

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
