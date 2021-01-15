import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image } from 'react-native';

import Text from 'components/Text';

import TopUp from 'assets/icons/topUp.svg';
import ReceiveMoney from 'assets/icons/receiveMoneyWhiteIcon.svg';
import SendMoney from 'assets/icons/sendMoneyWhiteIcon.svg';

import styles from './HomepageHeader.styles';

function HomepageHeader({ title, subtitle, avatarUrl, username, location }) {
  const getInitials = (name) => {
    const initials = name.substring(0, 1).toUpperCase();
    if (username.length > 1) {
      return username.substring(0, 2).toUpperCase();
    }
    return initials;
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerTitle}>
        <TouchableOpacity style={styles.profileContainer} onPress={() => {}}>
          {avatarUrl ? (
            <Image source={{ uri: avatarUrl }} />
          ) : (
            <Text>{getInitials(username)}</Text>
          )}
        </TouchableOpacity>
        <Text style={[styles.text, styles.title]}>{title}</Text>
      </View>
      <Text style={styles.headerSubtitle}>{subtitle}</Text>
      {location < 70 && (
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
      )}
    </View>
  );
}

HomepageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  username: PropTypes.string,
  avatarUrl: PropTypes.string,
};

HomepageHeader.defaultProps = {
  title: '',
  subtitle: '',
  username: '',
  avatarUrl: '',
};

export default HomepageHeader;
