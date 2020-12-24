import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';

import DismissKeyboard from 'components/DismissKeyboard';
import SignUp from 'screens/SignUp';
import ForgotPassword from 'screens/ForgotPassword';
import ResetPassword from 'screens/ResetPassword';
import InviteCode from 'screens/InviteCode';
import SignIn from 'screens/SignIn';
import OnBoardingStepOne from 'screens/OnBoardingStepOne';
import OnBoardingStepTwo from 'screens/OnBoardingStepTwo';
import OnBoardingStepThree from 'screens/OnBoardingStepThree';
import OnBoardingStepFour from 'screens/OnBoardingStepFour';
import Congratulations from 'screens/Congratulations';
import VerifyEmail from 'screens/VerifyEmail';
import CreateAccount from 'screens/CreateAccount';
import PinCodeChoose from 'screens/PinCodeChoose';
import PinCodeEnter from 'screens/PinCodeEnter';

import styles from './navigation.styles';

const AuthStack = createStackNavigator();
const OnBoardingStack = createStackNavigator();

function OnBoardingScreens() {
  return (
    <OnBoardingStack.Navigator
      headerMode="none"
      screenOptions={{
        gestureEnabled: true,
        cardStyleInterpolator:
          CardStyleInterpolators.forHorizontalIOS,
      }}
      animation="fade"
    >
      <OnBoardingStack.Screen
        name="OnBoardingStepOne"
        component={OnBoardingStepOne}
      />
      <OnBoardingStack.Screen
        name="OnBoardingStepTwo"
        component={OnBoardingStepTwo}
      />
      <OnBoardingStack.Screen
        name="OnBoardingStepThree"
        component={OnBoardingStepThree}
      />
      <OnBoardingStack.Screen
        name="OnBoardingStepFour"
        component={OnBoardingStepFour}
      />
    </OnBoardingStack.Navigator>
  );
}

function AuthScreens() {
  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.screen}>
        <AuthStack.Navigator headerMode="none">
          <AuthStack.Screen name="OnBoarding" component={OnBoardingScreens} />
          <AuthStack.Screen name="SignUp" component={SignUp} />
          <AuthStack.Screen name="InviteCode" component={InviteCode} />
          <AuthStack.Screen name="CreateAccount" component={CreateAccount} />
          <AuthStack.Screen name="PinCodeChoose" component={PinCodeChoose} />
          <AuthStack.Screen name="PinCodeEnter" component={PinCodeEnter} />
          <AuthStack.Screen name="SignIn" component={SignIn} />
          <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
          <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
          <AuthStack.Screen name="Congratulations" component={Congratulations} />
          <AuthStack.Screen name="VerifyEmail" component={VerifyEmail} />
        </AuthStack.Navigator>
      </SafeAreaView>
    </DismissKeyboard>
  );
}

export default AuthScreens;
