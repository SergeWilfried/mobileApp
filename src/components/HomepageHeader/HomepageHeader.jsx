import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image, Animated, Platform } from 'react-native';

import Text from 'components/Text';

import TopUp from 'assets/icons/topUp.svg';
import ReceiveMoney from 'assets/icons/receiveMoneyWhiteIcon.svg';
import SendMoney from 'assets/icons/sendMoneyWhiteIcon.svg';

import styles from './HomepageHeader.styles';

function HomepageHeader({ title, subtitle, avatarUrl, username, propsStyles }) {
  const getInitials = (name) => {
    const initials = name.substring(0, 1).toUpperCase();
    if (username.length > 1) {
      return username.substring(0, 2).toUpperCase();
    }
    return initials;
  };

  return (
    <View style={styles.header}
    onLayout={(event) => {
      var {x, y, width, height} = event.nativeEvent.layout;
    
      console.log('HomepageHeader x, y, width, height:', Platform.OS, x, y, width, height);
      
    }}
    >
      <View style={styles.headerTitle}>
        <TouchableOpacity style={styles.profileContainer} onPress={() => {}}>
          {avatarUrl ? (
            <Image source={{ uri: avatarUrl }} />
          ) : (
            <Text>{getInitials(username)}</Text>
          )}
        </TouchableOpacity>
        <Animated.View style={[styles.text, propsStyles.title]}>
          <Text style={[styles.text, styles.title]}>{title}</Text>
        </Animated.View>
      </View>
      <Animated.View style={propsStyles.subtitle}>
        <Text style={styles.headerSubtitle}>{subtitle}</Text>
      </Animated.View>
      <View style={styles.iconsContainer}>
        <View>
          <TouchableOpacity style={styles.iconBackground} onPress={() => {}}>
            <TopUp />
          </TouchableOpacity>
          <Text style={styles.text}>Top up</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.iconBackground} onPress={() => {}}>
            <SendMoney />
          </TouchableOpacity>
          <Text style={styles.text}>Send</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.iconBackground} onPress={() => {}}>
            <ReceiveMoney />
          </TouchableOpacity>
          <Text style={styles.text}>Receive</Text>
        </View>
      </View>
    </View>
  );
}

HomepageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  username: PropTypes.string,
  avatarUrl: PropTypes.string,
  propsStyles: PropTypes.shape({
    title: PropTypes.shape({}),
    subtitle: PropTypes.shape({}),
  }),
};

HomepageHeader.defaultProps = {
  title: '',
  subtitle: '',
  username: '',
  avatarUrl: '',
  propsStyles: {
    title: {},
    subtitle: {},
  },
};

export default HomepageHeader;
