import 'react-native-gesture-handler';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import * as userSelectors from 'resources/user/user.selectors';

import AppScreens from './appStack';
import AuthScreens from './authStack';

function AppNavigation() {
  const userAuthenticated = useSelector(userSelectors.getUserAuthenticated);

  return (
    <NavigationContainer>
      {userAuthenticated ? <AppScreens /> : <AuthScreens />}
    </NavigationContainer>
  );
}

export default AppNavigation;
