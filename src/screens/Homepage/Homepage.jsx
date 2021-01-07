import HomepageHeader from 'components/HomepageHeader';
import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import ReactNativeParallaxHeader from 'react-native-parallax-header';

import Profile from 'assets/icons/profile.svg';

import colors from 'themes/colors';

import styles from './Homepage.styles';


const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;

const renderNavBar = () => (
  <View style={styles.navContainer}>
    <View style={styles.statusBar} />
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.profileContainer} onPress={() => {}}>
        <Profile />
      </TouchableOpacity>
      <Text style={styles.text}>₣ 3,588</Text>
    </View>
  </View>
);

const renderContent = () => {
  return (
    <View style={styles.body}>
      {Array.from(Array(20).keys()).map((i) => (
        <View
          key={i}
          style={{ padding: 15, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text>
            Item
            {i + 1}
          </Text>
        </View>
      ))}
    </View>
  );
};

const title = (location) => {
  return (
    <HomepageHeader title="Counter" subtitle="₣ 3,588" location={location} />
  );
};

const Homepage = () => {
  const [location, setLocation] = useState('');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ReactNativeParallaxHeader
        headerMinHeight={HEADER_HEIGHT}
        headerMaxHeight={285}
        navbarColor={colors.headerBackground}
        title={title(location)}
        alwaysShowTitle={false}
        alwaysShowNavBar={false}
        backgroundColor={colors.headerBackground}
        renderNavBar={renderNavBar}
        renderContent={renderContent}
        containerStyle={styles.container}
        contentContainerStyle={styles.contentContainer}
        innerContainerStyle={styles.container}
        scrollViewProps={{
          onScroll: (event) => {
            setLocation(event.nativeEvent.contentOffset.y);
          },
        }}
      />
    </>
  );
};

export default Homepage;
