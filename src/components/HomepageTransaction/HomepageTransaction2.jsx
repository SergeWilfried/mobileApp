import React, { useState, useEffect } from "react";
import { Text, View, Dimensions, Animated, ScrollView } from "react-native";
import HomepageHeader from 'components/HomepageHeader';

import SlidingUpPanel from "rn-sliding-up-panel";

import PropTypes from 'prop-types';

import Transaction from 'components/Transaction';

import Home from 'assets/icons/home.svg';

import styles from './HomepageTransaction.styles';

const { height } = Dimensions.get("window");

function BottomSheet (props) {
    const AVATARURL = '';
    const USERNAME = 'Tatyana';
    const { onPositionChange, onTopReached } = props;
    const [draggedValue, setDraggedValue] = useState(new Animated.Value(0));
    const [scrollEnabled, setScrollEnabled] = useState(false);
    const draggableRange = { top: height - 160, bottom: height - 350 };
    const { top, bottom } = draggableRange;

    const textTranslateY = draggedValue.interpolate({
        inputRange: [bottom, top],
        outputRange: [0, -75],
        extrapolate: "clamp"
      });

    const textScale = draggedValue.interpolate({
        inputRange: [bottom, top],
        outputRange: [1, 0.7],
        extrapolate: "clamp"
    });  

    const textSubtitleScale = draggedValue.interpolate({
        inputRange: [bottom, top],
        outputRange: [1, 0],
        extrapolate: "clamp"
    });  

  
    useEffect(() => {
        draggedValue.addListener(({ value }) => {
            if (value === top) { 
                setScrollEnabled(true); 
            } else if (scrollEnabled)  {
                setScrollEnabled(false); 
            }
        });
      }, [setScrollEnabled]); 



    return (
    <>
        <HomepageHeader 
        title="Your balance" 
        subtitle="₣ 3,588" 
        avatarUrl={AVATARURL} 
        username={USERNAME} 
        textSubtitleScale={textSubtitleScale}
        textScale={textScale}
        textTranslateY={textTranslateY}
      />       
    <SlidingUpPanel
        draggableRange={draggableRange}
        animatedValue={draggedValue}
        backdropOpacity={0}
        snappingPoints={[360]}
        height={height}
        friction={0.5}
    >
     <View style={styles.screen}>
      <View style={styles.iconContainer}><Home /></View>
      <Text style={styles.title}>
        Latest transactions
      </Text>
      <ScrollView scrollEnabled={scrollEnabled}>
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

  BottomSheet.defaultProps = {
    draggableRange: { top: 0, height: 0 },
    onPositionChange: ({ value }) => { console.log(value) },
    onTopReached: ({ value }) => { console.log(value) },
  }
  BottomSheet.propTypes = {
    onPositionChange: PropTypes.func,
    onTopReached: PropTypes.func,
  }
export default BottomSheet;