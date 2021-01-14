import React from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated,
  StyleSheet,
} from 'react-native';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';

import HomepageHeader from 'components/HomepageHeader';

const ParallaxHeader = () => {
  const renderContent = (x) => (
    <View>
      <Text>{x}</Text>
    </View>
  );

  const renderHeader = () => {
    return <HomepageHeader title="Counter counter" subtitle="238748374" />;
  };

  return <StickyParallaxHeader headerType="DetailsHeader" />;
};

export default ParallaxHeader;
