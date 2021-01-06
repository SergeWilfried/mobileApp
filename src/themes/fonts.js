import { normalize } from 'helpers/utils';

const type = {
  base: 'Roboto',
  title: 'Poppins-Regular',
};

const letterSpacing = {
  small: 0,
  regular: 0.5,
  large: 3,
};

const size = {
  extraExtraSmall: 10,
  extraSmall: 12,
  small: 14,
  regular: 16,
  medium: 18,
  large: normalize(20),
  extraLarge: normalize(24),
  extraExtraLarge: normalize(62),
  kingSize: normalize(36),
};

const lineHeight = {
  extraSmall: normalize(14),
  small: normalize(16),
  regular: normalize(21),
  medium: normalize(24),
  large: 30,
  extraLarge: 42,
};

const weight = {
  light: '300',
  regular: '400',
  medium: '500',
  bold: '700',
};

const style = {};

export default {
  type,
  size,
  weight,
  style,
  lineHeight,
  letterSpacing,
};
