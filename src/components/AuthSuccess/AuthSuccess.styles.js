import { StyleSheet } from 'react-native';

import fonts from 'themes/fonts';

export default StyleSheet.create({
  screen: {
    flex: 1,
    marginBottom: 33,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
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
  },
});
