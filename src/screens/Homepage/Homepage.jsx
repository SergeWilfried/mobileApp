// import React, { useState } from 'react';

// import HomepageHeader from 'components/HomepageHeader';
// import HomepageNavbar from 'components/HomepageNavbar';
// import HomepageEmpty from 'components/HomepageEmpty';
// import HomepageTransaction from 'components/HomepageTransaction';

// const Homepage = () => {
//   const [location, setLocation] = useState('');
//   const AVATARURL = '';
//   const USERNAME = 'Tatyana';
//   const isTransactionList = 's';

//   return (
//     <>
//       {location ? (
//         <HomepageNavbar avatarUrl={AVATARURL} username={USERNAME} />
//       ) : (
//         <HomepageHeader
//           title="Your balance"
//           subtitle="₣ 3,588"
//           avatarUrl={AVATARURL}
//           username={USERNAME}
//         />
//       )}
//       {isTransactionList ? (
//         <HomepageTransaction setLocation={setLocation} />
//       ) : (
//         <HomepageEmpty />
//       )}
//     </>
//   );
// };

// export default Homepage;

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

import HomepageNavbar from 'components/HomepageNavbar';
import HomepageTransaction from 'components/HomepageTransaction';

import Profile from 'assets/icons/profile.svg';

import colors from 'themes/colors';

import styles from './Homepage.styles';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 30;

const renderNavBar = () => <HomepageNavbar avatarUrl="" username="dfjgkn" />;

const renderContent = () => {
  return <HomepageTransaction />;
};

const title = (location) => {
  return (
    <HomepageHeader
      title="Counter"
      subtitle="₣ 3,588"
      location={location}
      avatarUrl=""
      username="dfjgkn"
    />
  );
};

const Homepage = () => {
  const [location, setLocation] = useState('');
  console.log(location);
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="blue" />
      <ReactNativeParallaxHeader
        headerMinHeight={90}
        headerMaxHeight={258}
        navbarColor={colors.headerBackground}
        title={title(location)}
        alwaysShowTitle={false}
        alwaysShowNavBar={false}
        backgroundColor={colors.headerBackground}
        renderNavBar={renderNavBar}
        renderContent={renderContent}
        containerStyle={styles.container}
        contentContainerStyle={styles.contentContainer}
        scrollViewProps={{
          scrollEnabled: true,
          onScroll: (event) => {
            setLocation(event.nativeEvent.contentOffset.y);
          },
        }}
      />
    </>
  );
};
export default Homepage;
