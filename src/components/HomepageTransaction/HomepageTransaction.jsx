import React, { useState, useCallback, useRef, useEffect } from 'react';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { normalize } from 'helpers/utils';
import { Text, View, Dimensions, Animated, ScrollView, useWindowDimensions, Platform, PixelRatio, Pressable } from 'react-native';
import HomepageHeader from 'components/HomepageHeader';

import SlidingUpPanel from 'rn-sliding-up-panel';

import Transaction from 'components/Transaction';

import Home from 'assets/icons/home.svg';

import styles from './HomepageTransaction.styles';

const { height } = Dimensions.get('window');

function HomepageTransaction() {
  const AVATARURL = '';
  const PANEL_VELOCITY = 2.3;
  const USERNAME = 'Tatyana';

  const statusBarHeight = getStatusBarHeight(true);
  const additionalPadding = 27;

  const pixelRatioValue = PixelRatio.getPixelSizeForLayoutSize(additionalPadding);
  const fullHeaderHeight = 258;
  const smallHeaderHeight = 80;
  const draggableRange = { top: height - smallHeaderHeight - pixelRatioValue - statusBarHeight, bottom: height - fullHeaderHeight - pixelRatioValue - statusBarHeight 
  };
  const { top, bottom } = draggableRange;
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [allowDragging, setAllowDragging] = useState(true);
  const [lastDragValue, setLastDragValue] = useState(bottom);
  const [beginScrollPosition, setBeginScrollPosition] = useState(1);
  const [atTop, setAtTop] = useState(true);
  const snappingPoints = [top, bottom];
  const panelRef = useRef(null);

  const [draggedValue, setDraggedValue] = useState(new Animated.Value(bottom));

  const textTitleTranslateY = draggedValue.interpolate({
    inputRange: [bottom, top],
    outputRange: [0, -70],
    extrapolate: 'clamp',
  });

  const textTitleScale = draggedValue.interpolate({
    inputRange: [bottom, top],
    outputRange: [1, 0.7],
    extrapolate: 'clamp',
  });

  const textSubtitleScale = draggedValue.interpolate({
    inputRange: [bottom, top],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const textSubtitleOpacity = draggedValue.interpolate({
    inputRange: [bottom, top],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const headerStyles = {
    subtitle: {
      transform: [
        { scale: textTitleScale },
        { translateY: textTitleTranslateY },
      ],
    },
    title: {
      transform: [
        { scale: textSubtitleScale },
        { translateY: textTitleTranslateY },
      ],
      opacity: textSubtitleOpacity,
    },
  };

  const hideFullScreenPanelOptions = {
    velocity: PANEL_VELOCITY,
    toValue: draggableRange.bottom,
  };

  const enableDragging = useCallback(() => {
    setAllowDragging(true);
    setScrollEnabled(false);
  }, []);

  const enableScroll = useCallback(() => {
    setAllowDragging(false);
    setScrollEnabled(true);
  }, []);

  const slidePanelDown = useCallback(() => {
    if (panelRef && panelRef.current) {
      panelRef.current.show(hideFullScreenPanelOptions);
    }
  }, [panelRef]);

  const onMomentumDragEnd = useCallback(
    (value) => {      
      setLastDragValue(value);
      const isPanelOnTop = value === draggableRange.top;
      return isPanelOnTop ?  enableScroll() : enableDragging();
    },
    [draggableRange, scrollEnabled],
  );

  const onMomentumScrollEnd = useCallback((event) => {
    const { nativeEvent } = event;
    const isScrollOnTop = nativeEvent.contentOffset.y === 0;
    const isScrolledToTop = beginScrollPosition <= 0 && isScrollOnTop;

    if (isScrolledToTop) {
      enableDragging();
      slidePanelDown();
    }
  }, [beginScrollPosition, panelRef]);

  const onMomentumScrollBegin = useCallback((event) => {
    const { nativeEvent } = event;
    setBeginScrollPosition(nativeEvent.contentOffset.y);
  }, []);

  const onPressIn = useCallback(() => {
    const isPanelOnTop = lastDragValue === draggableRange.top;
    if (isPanelOnTop) {
      enableDragging();
    }
  }, [lastDragValue]);

  const onPressOut = useCallback(() => {    
    const isPanelOnTop = lastDragValue === draggableRange.top;
    if (isPanelOnTop) {
      enableScroll();
    }
  }, [lastDragValue]);
  
  return (
    <>
      <HomepageHeader
        title="Your balance"
        subtitle="₣ 3,588"
        avatarUrl={AVATARURL}
        username={USERNAME}
        propsStyles={headerStyles}
      />
      <SlidingUpPanel
        ref={panelRef}
        draggableRange={draggableRange}
        animatedValue={draggedValue}
        onMomentumDragEnd={onMomentumDragEnd}
        backdropOpacity={0}
        snappingPoints={snappingPoints}
        showBackdrop={false}
        height={top}
        allowDragging={allowDragging}
      >
        <View style={styles.screen}>
          <Pressable onPressIn={onPressIn} onPressOut={onPressOut} >
            <View>
              <View style={styles.iconContainer}>
                <Home />
              </View>
              <Text style={styles.title}>Latest transactions</Text>
            </View>
          </Pressable>
          <ScrollView
            scrollEnabled={scrollEnabled}
            onMomentumScrollEnd={onMomentumScrollEnd}
            onMomentumScrollBegin={onMomentumScrollBegin}
          >
            <View style={styles.container}>
              <View style={styles.titleContainer}>
                <Text style={styles.subtitle}>Today, 19 June</Text>
                <Text style={styles.subtitle}>+ ₣ 3,588</Text>
              </View>
              <Transaction />
              <Transaction />
              <Transaction />
              <Transaction />
              <Transaction />
              <Transaction />
              <Transaction />
              <Transaction />
              <Transaction />
              <Transaction />
              <Transaction />
              <Transaction />
              <Transaction />
              <Transaction />
              <Transaction />
              <Transaction />
              <Transaction />
              <Transaction />
            </View>
            <View style={styles.divideLine} />
          </ScrollView>
        </View>
      </SlidingUpPanel>
    </>
  );
}

export default HomepageTransaction;
