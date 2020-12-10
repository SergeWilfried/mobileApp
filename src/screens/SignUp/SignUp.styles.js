import { StyleSheet } from 'react-native';
import colors from 'themes/colors';
import fonts from 'themes/fonts';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.screenBackground,
  },
  screenContent: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 33,
    paddingHorizontal: 23,
  },
  title: {
    color: colors.titleFont,
    fontSize: fonts.size.title,
    fontWeight: fonts.weight.bold,
    marginTop: 21,
    marginBottom: 11,
  },
  link: {
    color: colors.linkFont,
  },
  phoneContainer: {
    marginTop: 50,
  },
  topSection: {
    alignItems: 'center',
  },
  footerText: {
    letterSpacing: fonts.letterSpacing.regular,
    marginBottom: 15,
    textAlign: 'center',
  },
});
