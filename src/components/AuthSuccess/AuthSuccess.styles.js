import { StyleSheet } from 'react-native';

import fonts from 'themes/fonts';
import colors from 'themes/colors';

export default StyleSheet.create({
  screen: {
    flexGrow: 1,
    backgroundColor: colors.authScreenBackground,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: fonts.size.large,
    fontWeight: fonts.weight.bold,
    lineHeight: fonts.lineHeight.large,
    letterSpacing: fonts.letterSpacing.regular,
    marginTop: 17,
    marginBottom: 12,
  },
  subTitle: {
    fontSize: fonts.size.small,
    lineHeight: fonts.lineHeight.regular,
    paddingHorizontal: 23,
    textAlign: 'center',
  },
  buttonWrapper: {
    width: '100%',
    paddingHorizontal: 23,
    marginTop: 'auto',
    paddingBottom: 33,
  },
});
