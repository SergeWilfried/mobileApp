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
  extraSmall: 12,
  small: normalize(14),
  regular: normalize(16),
  medium: normalize(18),
  large: normalize(20),
  extraLarge: normalize(24),
};

const lineHeight = {
  small: normalize(16),
  regular: normalize(24),
  large: 30,
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
