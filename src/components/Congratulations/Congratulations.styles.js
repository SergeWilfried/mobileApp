import { StyleSheet } from 'react-native';

import fonts from 'themes/fonts';
import colors from 'themes/colors';

export default StyleSheet.create({
  screen: {
    flexGrow: 1,
    backgroundColor: colors.authScreenBackground,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: fonts.size.large,
    fontWeight: fonts.weight.bold,
    lineHeight: fonts.lineHeight.medium,
    letterSpacing: fonts.letterSpacing.regular,
    marginTop: 50,
    color: colors.black,
  },
  subTitle: {
    fontSize: fonts.size.small,
    lineHeight: fonts.lineHeight.regular,
    marginTop: 30,
    color: colors.gray,
    letterSpacing: fonts.letterSpacing.regular,
    textAlign: 'center',
  },
  buttonWrapper: {
    width: '100%',
    paddingHorizontal: 23,
    marginTop: 'auto',
    marginBottom: 30,
  },
});
