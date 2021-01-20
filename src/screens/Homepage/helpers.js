import { Dimensions, Animated, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const fullHeaderHeight = 248;
const smallHeaderHeight = Platform.OS === 'android' ? 50 : 76;

const { height } = Dimensions.get('window');

const PANEL_VELOCITY = 2.3;
const statusBarHeight = getStatusBarHeight(true);

export const getSliderProps = (tabBarHeight) => {
  const draggableRange = {
    top: height - smallHeaderHeight - tabBarHeight - statusBarHeight,
    bottom: height - fullHeaderHeight - tabBarHeight - statusBarHeight,
  };
  const snappingPoints = [draggableRange.top, draggableRange.bottom];
  const draggedValue = new Animated.Value(draggableRange.bottom);

  const textTitleTranslateY = draggedValue.interpolate({
    inputRange: [draggableRange.bottom, draggableRange.top],
    outputRange: [0, -70],
    extrapolate: 'clamp',
  });

  const textTitleScale = draggedValue.interpolate({
    inputRange: [draggableRange.bottom, draggableRange.top],
    outputRange: [1, 0.7],
    extrapolate: 'clamp',
  });

  const textSubtitleScale = draggedValue.interpolate({
    inputRange: [draggableRange.bottom, draggableRange.top],
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
    },
  };

  const hideFullScreenPanelOptions = {
    velocity: PANEL_VELOCITY,
    toValue: draggableRange.bottom,
  };

  return {
    draggableRange,
    hideFullScreenPanelOptions,
    headerStyles,
    snappingPoints,
    draggedValue,
  };
};
