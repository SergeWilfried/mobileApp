import { Dimensions, PixelRatio } from 'react-native';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const scale = SCREEN_HEIGHT / 720;
export const normalize = (size) => {
  const newSize = size * (scale > 1 ? 1 : scale);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
