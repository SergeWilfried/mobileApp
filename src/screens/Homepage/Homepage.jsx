import React, { useState, useCallback, useRef } from 'react';
import {
  Text,
  View,
  ScrollView,
  Pressable,
  Animated,
  Dimensions,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import PropTypes from 'prop-types';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import Home from 'assets/icons/home.svg';

import { HOMEPAGE_HEADER } from 'helpers/constants';
import { getBalance } from 'resources/user/user.api';
import { processMoney } from 'helpers/utils.helper';
import FullScreenLoader from 'components/FullScreenLoader';
import Transaction from 'screens/Homepage/components/Transaction';

import HomepageHeader from './components/HomepageHeader';
import HomepageEmpty from './components/HomepageEmpty';

import { getSliderProps } from './helpers';

import styles from './Homepage.styles';

const { height } = Dimensions.get('window');
const statusBarHeight = getStatusBarHeight(true);

function Homepage({ navigation }) {
  const tabBarHeight = useBottomTabBarHeight();
  const [balance, setBalance] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const panelRef = useRef(null);

  useFocusEffect(
    useCallback(() => {
      const init = async () => {
        setLoading(true);
        const availableBalance = await getBalance();
        setBalance(processMoney(availableBalance.toString()));
        setLoading(false);
      };

      init();
    }, []),
  );

  const draggableRange = {
    top: height - HOMEPAGE_HEADER.SMALL_HEIGHT - tabBarHeight - statusBarHeight,
    bottom:
      height - HOMEPAGE_HEADER.FULL_HEIGHT - tabBarHeight - statusBarHeight,
  };
  const [draggedValue] = useState(new Animated.Value(draggableRange.bottom));

  const {
    hideFullScreenPanelOptions,
    headerStyles,
    snappingPoints,
  } = getSliderProps(draggableRange, draggedValue);

  const AVATAR_URL = '';
  const USERNAME = 'Tatyana';
  const transactions = [];

  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [allowDragging, setAllowDragging] = useState(true);
  const [lastDragValue, setLastDragValue] = useState(draggableRange.bottom);
  const [beginScrollPosition, setBeginScrollPosition] = useState(1);

  const enableDragging = useCallback(() => {
    setAllowDragging(true);
    setScrollEnabled(false);
  }, [setAllowDragging, setScrollEnabled]);

  const enableScroll = useCallback(() => {
    setAllowDragging(false);
    setScrollEnabled(true);
  }, [setAllowDragging, setScrollEnabled]);

  const slidePanelDown = useCallback(() => {
    if (panelRef && panelRef.current) {
      panelRef.current.show(hideFullScreenPanelOptions);
    }
  }, [panelRef]);

  const onMomentumDragEnd = useCallback(
    (value) => {
      setLastDragValue(value);
      const isPanelOnTop = value === draggableRange.top;
      return isPanelOnTop ? enableScroll() : enableDragging();
    },
    [draggableRange, scrollEnabled],
  );

  const onMomentumScrollEnd = useCallback(
    (event) => {
      const { nativeEvent } = event;
      const isScrollOnTop = nativeEvent.contentOffset.y === 0;
      const isScrollTopUpperLimits = beginScrollPosition <= 0 && isScrollOnTop;
      if (isScrollTopUpperLimits) {
        enableDragging();
        slidePanelDown();
      }
    },
    [enableDragging, slidePanelDown, beginScrollPosition, panelRef],
  );

  const onMomentumScrollBegin = useCallback(
    (event) => {
      const { nativeEvent } = event;
      setBeginScrollPosition(nativeEvent.contentOffset.y);
    },
    [setBeginScrollPosition],
  );

  const onPressIn = useCallback(() => {
    const isPanelOnTop = lastDragValue === draggableRange.top;
    if (isPanelOnTop) {
      enableDragging();
    }
  }, [lastDragValue, enableDragging]);

  const onPressOut = useCallback(() => {
    const isPanelOnTop = lastDragValue === draggableRange.top;
    if (isPanelOnTop) {
      enableScroll();
    }
  }, [lastDragValue]);

  const onClickTopUp = useCallback(() => navigation.navigate('DepositMoney'));

  return (
    <>
      {isLoading && <FullScreenLoader />}
      <HomepageHeader
        title="Your balance"
        subtitle={`₣ ${balance}`}
        avatarUrl={AVATAR_URL}
        username={USERNAME}
        propsStyles={headerStyles}
        onClickTopUp={onClickTopUp}
      />
      {!transactions.length ? (
        <HomepageEmpty onClickTopUp={onClickTopUp} />
      ) : (
        <SlidingUpPanel
          ref={panelRef}
          draggableRange={draggableRange}
          animatedValue={draggedValue}
          onMomentumDragEnd={onMomentumDragEnd}
          backdropOpacity={0}
          snappingPoints={snappingPoints}
          showBackdrop={false}
          height={draggableRange.top}
          allowDragging={allowDragging}
        >
          <View style={styles.screen}>
            <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
              <View style={styles.iconContainer}>
                <Home />
              </View>
              <Text style={styles.title}>Latest transactions</Text>
            </Pressable>
            <ScrollView
              scrollEnabled={scrollEnabled}
              onMomentumScrollEnd={onMomentumScrollEnd}
              onMomentumScrollBegin={onMomentumScrollBegin}
              style={styles.scrollView}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.subtitle}>Today, 19 June</Text>
                <Text style={styles.subtitle}>+ ₣ 3,588</Text>
              </View>
              {transactions.map(({ username, transactionType, amount }) => (
                <Transaction
                  key={username}
                  username={username}
                  transactionType={transactionType}
                  amount={amount}
                />
              ))}
              <View style={styles.divideLine} />
            </ScrollView>
          </View>
        </SlidingUpPanel>
      )}
    </>
  );
}

Homepage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default Homepage;
