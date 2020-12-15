import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import AppNavigation from './navigation';

import configureStore from './resources/store';

const { store } = configureStore();

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
