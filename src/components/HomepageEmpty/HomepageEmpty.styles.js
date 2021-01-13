import { StyleSheet } from 'react-native';

import colors from 'themes/colors';
import fonts from 'themes/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 16,
  },
  textContainer: {
    paddingTop: 26,
  },
  text: {
    textAlign: 'center',
    color: colors.textFontWithOpacity,
  },
  linkText: {
    color: colors.theme,
    fontWeight: fonts.weight.bold,
    lineHeight: fonts.lineHeight.medium,
  },
});
