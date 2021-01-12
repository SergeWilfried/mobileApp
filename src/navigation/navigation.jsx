import 'react-native-gesture-handler';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import * as userSelectors from 'resources/user/user.selectors';

import AppScreens from './appStack';
import AuthScreens from './authStack';
import OnBoardingScreens from './onBoardingStack';

function AppNavigation() {
  const isOnboardingHidden = useSelector(userSelectors.getHideOnboarding);
  const userAuthenticated = useSelector(userSelectors.getUserAuthenticated);

  const activeStack = useMemo(() => {
    if (userAuthenticated) {
      return <AppScreens />;
    }

    if (!isOnboardingHidden) {
      return <OnBoardingScreens />;
    }

    return <AuthScreens />;
  }, [userAuthenticated, isOnboardingHidden]);

  return <NavigationContainer>{activeStack}</NavigationContainer>;
}

export default AppNavigation;
