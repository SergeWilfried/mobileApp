import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { getPassword } from 'helpers/keychain.helper';
import * as storage from 'helpers/storage';
import { STORAGE } from 'helpers/constants';
import * as userActions from 'resources/user/user.actions';

import AppNavigation from './navigation';

import configureStore from './resources/store';

import 'resources/user/user.handlers';

const { store } = configureStore();

function App() {
  const [isLoading, setLoading] = useState(false);
  const [accessToken, setToken] = useState(null);

  useEffect(() => {
    const init = async () => {
      setLoading(true);
      const isOnboardingHidden = await storage.getItem(
        STORAGE.HIDE_ON_BOARDING,
      );
      const token = await storage.getToken();
      const pinCode = await getPassword();

      store.dispatch(userActions.hideOnboarding(isOnboardingHidden));
      store.dispatch(userActions.setPinCode(pinCode));
      setToken(token);

      setLoading(false);

      SplashScreen.hide();
    };

    init();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <AppNavigation token={accessToken} />
      </Provider>
    </>
  );
}

export default App;
