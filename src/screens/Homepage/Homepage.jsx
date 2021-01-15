import React, { useState, useCallback } from 'react';
import { Dimensions, Animated } from 'react-native';
import HomepageHeader from 'components/HomepageHeader';
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';

import HomepageNavbar from 'components/HomepageNavbar';
import HomepageTransaction from 'components/HomepageTransaction';

const { height } = Dimensions.get('window');

const Homepage = () => {
  const AVATARURL = '';
  const USERNAME = 'Tatyana';
  const isTransactionList = 'd';

  return <>{isTransactionList ? <HomepageTransaction /> : <HomepageEmpty />}</>;
};
export default Homepage;
