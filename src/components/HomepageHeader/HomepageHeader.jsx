import React from 'react';
import PropTypes from 'prop-types';
import {
  View, TouchableOpacity,
} from 'react-native';

import Text from 'components/Text';

import TopUp from 'assets/icons/topUp.svg';
import ReceiveMoney from 'assets/icons/receiveMoney.svg';
import SendMoney from 'assets/icons/sendMoney.svg';
import Profile from 'assets/icons/profile.svg';

import styles from './HomepageHeader.styles';

function HomepageHeader({ title, subtitle, location }) {
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <TouchableOpacity style={styles.profileContainer} onPress={() => {}}>
          <Profile />
        </TouchableOpacity>
        <Text style={[styles.text, styles.textContainer]}>{title}</Text>
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
  location: PropTypes.number,
};

HomepageHeader.defaultProps = {
  title: '',
  subtitle: '',
  location: '',
};

export default HomepageHeader;
