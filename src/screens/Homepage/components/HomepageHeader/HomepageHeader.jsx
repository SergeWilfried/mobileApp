import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image, Animated } from 'react-native';

import Text from 'components/Text';

import TopUp from 'assets/icons/topUp.svg';
import ReceiveMoney from 'assets/icons/receiveMoneyWhiteIcon.svg';
import SendMoney from 'assets/icons/sendMoneyWhiteIcon.svg';

import styles from './HomepageHeader.styles';

const getInitials = (username) => {
  const nameArray = username.split(' ');
  if (nameArray.length > 1) {
    return `${nameArray[0][0].toUpperCase()}${nameArray[1][0].toUpperCase()}`;
  }
  return username[0].toUpperCase();
};

function HomepageHeader({
  title,
  subtitle,
  avatarUrl,
  username,
  propsStyles,
  onClickTopUp,
  onClickSend,
  onClickReceive,
}) {
  return (
    <View style={styles.header}>
      <View style={styles.headerTitle}>
        <TouchableOpacity style={styles.profileContainer} onPress={() => {}}>
          {avatarUrl ? (
            <Image source={{ uri: avatarUrl }} />
          ) : (
            <Text style={styles.initials}>{getInitials(username)}</Text>
          )}
        </TouchableOpacity>
        <Animated.View style={[styles.text, propsStyles.title]}>
          <Text style={[styles.text, styles.title]}>{title}</Text>
        </Animated.View>
      </View>
      <Animated.View style={propsStyles.subtitle}>
        <Text style={styles.headerSubtitle}>{subtitle}</Text>
      </Animated.View>
      <Animated.View style={styles.iconsContainer}>
        <TouchableOpacity onPress={onClickTopUp}>
          <View style={styles.iconBackground}>
            <TopUp />
          </View>
          <Text style={styles.text}>Top up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClickSend}>
          <View style={styles.iconBackground}>
            <SendMoney />
          </View>
          <Text style={styles.text}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClickReceive}>
          <View style={styles.iconBackground}>
            <ReceiveMoney />
          </View>
          <Text style={styles.text}>Receive</Text>
        </TouchableOpacity>
      </Animated.View>
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
  onClickTopUp: PropTypes.func,
  onClickSend: PropTypes.func,
  onClickReceive: PropTypes.func,
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
  onClickTopUp: () => {},
  onClickSend: () => {},
  onClickReceive: () => {},
};

export default HomepageHeader;
