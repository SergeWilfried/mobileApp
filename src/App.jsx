import React, { Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import AppNavigation from './navigation';

import configureStore from './resources/store';

const { store } = configureStore();

function App() {
  useEffect(() => {
    SplashScreen.hide();
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
