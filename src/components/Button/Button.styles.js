import { StyleSheet } from 'react-native';

import colors from 'themes/colors';
import fonts from 'themes/fonts';

export default StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: colors.theme,
  },
  disabled: {
    opacity: 0.5,
  },
  link: {
    backgroundColor: 'transparent',
    fontSize: fonts.size.regular,
    fontWeight: fonts.weight.regular,
    lineHeight: fonts.lineHeight.regular,
  },
  title: {
    fontSize: fonts.size.medium,
    fontWeight: fonts.weight.bold,
    color: colors.screenBackground,
  },
  defaultTitle: {
    paddingVertical: 18,
  },
});
