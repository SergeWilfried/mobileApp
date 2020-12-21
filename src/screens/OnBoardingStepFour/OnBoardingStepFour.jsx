import React from 'react';
import { useDispatch } from 'react-redux';

import * as userActions from 'resources/user/user.actions';

import OnBoarding from 'components/OnBoarding';

function OnBoardingStepFour() {
  const dispatch = useDispatch();

  const onContinuePress = async () => {
    await dispatch(userActions.setUserAuthenticated());
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

export default OnBoardingStepFour;
