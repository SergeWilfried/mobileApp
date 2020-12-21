import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import SignUp from 'screens/SignUp';
import ForgotPassword from 'screens/ForgotPassword';
import ResetPassword from 'screens/ResetPassword';
import InviteCode from 'screens/InviteCode';
import SignIn from 'screens/SignIn';
import OnBoardingStepOne from 'screens/OnBoardingStepOne';
import OnBoardingStepTwo from 'screens/OnBoardingStepTwo';
import OnBoardingStepThree from 'screens/OnBoardingStepThree';
import OnBoardingStepFour from 'screens/OnBoardingStepFour';
import PinCodeEnter from 'components/PinCodeEnter';
import Congratulations from 'screens/Congratulations';
import VerifyEmail from 'screens/VerifyEmail';

const AuthStack = createStackNavigator();

function AuthScreens() {
  return (
    <AuthStack.Navigator
      headerMode="none"
      screenOptions={{
        gestureEnabled: true,
        cardStyleInterpolator:
          CardStyleInterpolators.forHorizontalIOS,
      }}
      animation="fade"
    >
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen
        name="PinCodeEnter"
        component={PinCodeEnter}
      />
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="InviteCode" component={InviteCode} />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <AuthStack.Screen
        name="ResetPassword"
        component={ResetPassword}
      />
      <AuthStack.Screen
        name="OnBoardingStepOne"
        component={OnBoardingStepOne}
      />
      <AuthStack.Screen
        name="OnBoardingStepTwo"
        component={OnBoardingStepTwo}
      />
      <AuthStack.Screen
        name="OnBoardingStepThree"
        component={OnBoardingStepThree}
      />
      <AuthStack.Screen
        name="OnBoardingStepFour"
        component={OnBoardingStepFour}
      />
      <AuthStack.Screen
        name="Congratulations"
        component={Congratulations}
      />
      <AuthStack.Screen
        name="VerifyEmail"
        component={VerifyEmail}
      />
    </AuthStack.Navigator>
  );
}

export default AuthScreens;
