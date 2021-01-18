import React, { useState, useEffect, useCallback, useRef } from "react";
import { Text, View, Dimensions, Animated, ScrollView, TouchableWithoutFeedback } from "react-native";
import HomepageHeader from 'components/HomepageHeader';

import SlidingUpPanel from "rn-sliding-up-panel";

import PropTypes from 'prop-types';

import Transaction from 'components/Transaction';

import Home from 'assets/icons/home.svg';

import styles from './HomepageTransaction.styles';

const { height } = Dimensions.get("window");

function HomepageTransaction (props) {
  const AVATARURL = '';
  const PANEL_VELOCITY = 2.3;
  const USERNAME = 'Tatyana';
  const draggableRange = { top: height - 160, bottom: height - 350 };
  const { top, bottom } = draggableRange;
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [isHeaderPressedIn, setHeaderPressedIn] = useState(false);
  const [startOffset, setStartOffset] = useState(0);
  const [allowDragging, setAllowDragging] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const snappingPoints = [top, bottom];
  const panelRef = useRef(null);

  const [draggedValue, setDraggedValue] = useState(new Animated.Value(bottom));

  const textTitleTranslateY = draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [0, -70],
      extrapolate: "clamp"
    });

  const textTitleScale = draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [1, 0.7],
      extrapolate: "clamp"
  });  

  const textSubtitleScale = draggedValue.interpolate({
      inputRange: [bottom, top],
      outputRange: [1, 0],
      extrapolate: "clamp"
  });  

  const textSubtitleOpacity = draggedValue.interpolate({
    inputRange: [bottom, top],
    outputRange: [1, 0],
    extrapolate: "clamp"
});  

  const handleScrollEndDrag = useCallback((event) => {
    const endOffset = event.nativeEvent.contentOffset.y;
    if (startOffset <= 0 && endOffset <= 0 && refPanel) {
      refPanel.current.hide();
    }
  }, [startOffset]);



  const headerStyles = {
    subtitle: {
      transform: [
        { scale: textTitleScale },
        { translateY: textTitleTranslateY}
      ]
    },
    title: {
      transform: [
        { scale: textSubtitleScale },
        { translateY: textTitleTranslateY}
      ],
      opacity: textSubtitleOpacity,
    },
  };    
    

  const hideFullScreenPanelOptions = {
    velocity: PANEL_VELOCITY,
    toValue: draggableRange.bottom
  };

  const onMomentumDragEnd = useCallback((value) => {
    if (value === draggableRange.top && !scrollEnabled) {
      setScrollEnabled(true);
      setAtTop(true);
    }
  }, [draggableRange, scrollEnabled]);
  
  const onMomentumScrollEnd = useCallback((event) => {
    const { nativeEvent } = event;
    if (nativeEvent.contentOffset.y === 0) {
      setAtTop(true);
      setAllowDragging(true);
    }
  }, []);

  const onDragStart = useCallback((_, gestureState) => {
    if (atTop && scrollEnabled) {
      if (gestureState.vy > 0) {
        setScrollEnabled(false);
        setAllowDragging(true);
        if (panelRef && panelRef.current) {
          panelRef.current.show(hideFullScreenPanelOptions);
        }
      } else {
        setAtTop(false);
        setAllowDragging(false);
      }
    }
  }, [atTop, scrollEnabled, panelRef]);


    return (
    <>
      <HomepageHeader 
        title="Your balance" 
        subtitle="₣ 3,588" 
        avatarUrl={AVATARURL} 
        username={USERNAME} 
        styles={headerStyles}
      />       
    <SlidingUpPanel
        ref={panelRef}
        draggableRange={draggableRange}
        animatedValue={draggedValue}
        onMomentumDragEnd={onMomentumDragEnd}
        onDragStart={onDragStart}
        backdropOpacity={0}
        snappingPoints={snappingPoints}
        showBackdrop={false}
        height={top}
        allowDragging={allowDragging}
    >
     <View style={styles.screen}>
       <View>
          <View style={styles.iconContainer}><Home /></View>
          <Text style={styles.title}>
            Latest transactions
          </Text>
       </View> 
      <ScrollView 
        scrollEnabled={scrollEnabled}
        onMomentumScrollEnd={onMomentumScrollEnd}
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