import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from 'screens/SignUp';
import Onboarding from 'screens/Onboarding';

const AuthStack = createStackNavigator();

function AuthScreens() {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
    </AuthStack.Navigator>
  );
}

export default AuthScreens;
