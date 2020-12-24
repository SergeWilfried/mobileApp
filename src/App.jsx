import React, { Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { getPassword } from 'helpers/keychain.helper';
import { setPinCode } from 'resources/user/user.actions';

import AppNavigation from './navigation';

import configureStore from './resources/store';

const { store } = configureStore();

function App() {
  useEffect(() => {
    const init = async () => {
      const pinCode = await getPassword();

      if (pinCode) {
        store.dispatch(setPinCode(pinCode));
      }

      SplashScreen.hide();
    };

    init();
  }, []);

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </Fragment>
  );
}

export default App;
