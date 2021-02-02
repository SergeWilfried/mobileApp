import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { getInitials } from 'helpers/utils.helper';

import Text from 'components/Text';

import TopUp from 'assets/icons/topUp.svg';
import ReceiveMoney from 'assets/icons/receiveMoneyWhiteIcon.svg';
import SendMoney from 'assets/icons/sendMoneyWhiteIcon.svg';
import HideBalance from 'assets/icons/hideBalance.svg';

import * as userSelectors from 'resources/user/user.selectors';

import styles from './HomepageHeader.styles';

function HomepageHeader({
  title,
  subtitle,
  propsStyles,
  onClickTopUp,
  onClickSend,
  onClickReceive,
}) {
  const navigation = useNavigation();

  const userData = useSelector(userSelectors.getUserData);
  const isBalanceHidden = useSelector(userSelectors.getIsBalanceHidden);

  const onAvatarPress = useCallback(() => {
    navigation.navigate('Profile');
  }, []);

  return (
    <View style={styles.header}>
      <View style={styles.headerTitle}>
        <TouchableOpacity
          style={styles.profileContainer}
          activeOpacity={0.7}
          onPress={onAvatarPress}
        >
          {userData.avatarUrl ? (
            <Image source={{ uri: userData.avatarUrl }} style={styles.avatar} />
          ) : (
            <Text style={styles.initials}>
              {getInitials(userData.username)}
            </Text>
          )}
        </TouchableOpacity>
        <Animated.View style={styles.titleContainer}>
          <Text style={[styles.text, styles.title]}>{title}</Text>
        </Animated.View>
      </View>
      <Animated.View style={propsStyles.subtitle}>
        {isBalanceHidden ? (
          <View style={styles.hiddenBalance}>
            <HideBalance />
            <Text style={styles.hiddenBalanceText}>Hidden Balance</Text>
          </View>
        ) : (
          <Text style={styles.headerSubtitle}>{subtitle}</Text>
        )}
      </Animated.View>
      <Animated.View style={styles.iconsContainer}>
        <TouchableOpacity onPress={onClickTopUp}>
          <View style={styles.iconBackground}>
            <TopUp />
          </View>
          <Text style={styles.text}>Deposit</Text>
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
  propsStyles: {
    title: {},
    subtitle: {},
  },
  onClickTopUp: () => {},
  onClickSend: () => {},
  onClickReceive: () => {},
};

export default HomepageHeader;
