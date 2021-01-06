const PANEL_VELOCITY = 2.3;

export const getSliderProps = (draggableRange, draggedValue) => {
  const snappingPoints = [draggableRange.top, draggableRange.bottom];

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
    hideFullScreenPanelOptions,
    headerStyles,
    snappingPoints,
  };
};
