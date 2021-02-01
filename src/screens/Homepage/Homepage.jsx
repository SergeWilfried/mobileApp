import React, { useState, useCallback, useRef, useMemo } from 'react';
import {
  Text,
  View,
  Pressable,
  Animated,
  Dimensions,
  FlatList,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import PropTypes from 'prop-types';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import Home from 'assets/icons/home.svg';

import { HOMEPAGE_HEADER } from 'helpers/constants';
import { getBalance, getLatestTransactions } from 'resources/user/user.api';
import { groupTransactionsList, processMoney } from 'helpers/utils.helper';
import FullScreenLoader from 'components/FullScreenLoader';

import HomepageHeader from './components/HomepageHeader';
import HomepageEmpty from './components/HomepageEmpty';

import { getSliderProps } from './helpers';

import styles from './Homepage.styles';
import DailyTransactions from './components/DailyTransactions';

const { height } = Dimensions.get('window');
const statusBarHeight = getStatusBarHeight(true);

function Homepage({ navigation }) {
  const tabBarHeight = useBottomTabBarHeight();
  const [balance, setBalance] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const panelRef = useRef(null);

  useFocusEffect(
    useCallback(() => {
      let mounted = true;

      const init = async () => {
        if (!mounted) {
          return;
        }

        setLoading(true);
        const availableBalance = await getBalance();
        const {
          count,
          transactions: _transactions,
        } = await getLatestTransactions();
        setTotalTransactions(count);
        setTransactions(_transactions);
        setHasMore(_transactions.length < count);
        setBalance(processMoney(availableBalance.toString()));
        setLoading(false);
      };

      init();

      return () => {
        mounted = false;
      };
    }, []),
  );

  const loadMore = useCallback(async () => {
    if (!hasMore) {
      return;
    }

    const { transactions: _transactions } = await getLatestTransactions(
      transactions.length,
    );

    const allTransactions = [...transactions, ..._transactions];

    setHasMore(allTransactions.length < totalTransactions);
    setTransactions(allTransactions);
  }, [hasMore, transactions, totalTransactions]);

  const groupedTransactions = useMemo(
    () => groupTransactionsList(transactions),
    [transactions],
  );

  const draggableRange = useMemo(
    () => ({
      top:
        height - HOMEPAGE_HEADER.SMALL_HEIGHT - tabBarHeight - statusBarHeight,
      bottom:
        height - HOMEPAGE_HEADER.FULL_HEIGHT - tabBarHeight - statusBarHeight,
    }),
    [],
  );
  const [draggedValue] = useState(new Animated.Value(draggableRange.bottom));

  const {
    hideFullScreenPanelOptions,
    headerStyles,
    snappingPoints,
  } = getSliderProps(draggableRange, draggedValue);

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

  const onClickTopUp = useCallback(
    () => navigation.navigate('DepositMoneyMethods'),
    [navigation],
  );

  const onClickSend = useCallback(() => navigation.navigate('Send'), [
    navigation,
  ]);

  return (
    <>
      {isLoading && <FullScreenLoader />}
      <HomepageHeader
        title="Your balance"
        subtitle={`₣ ${balance}`}
        propsStyles={headerStyles}
        onClickTopUp={onClickTopUp}
        onClickSend={onClickSend}
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
            <FlatList
              keyExtractor={([key]) => key}
              ItemSeparatorComponent={() => <View style={styles.divideLine} />}
              data={groupedTransactions}
              onEndReached={loadMore}
              onEndReachedThreshold={0.5}
              renderItem={({ item: [key, items] }) => (
                <DailyTransactions date={key} transactions={items} />
              )}
              scrollEnabled={scrollEnabled}
              onMomentumScrollEnd={onMomentumScrollEnd}
              onMomentumScrollBegin={onMomentumScrollBegin}
              style={styles.scrollView}
            />
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
