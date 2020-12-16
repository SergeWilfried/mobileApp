import { StyleSheet } from 'react-native';

import colors from 'themes/colors';
import fonts from 'themes/fonts';
import styles from 'themes/commonStyles';
import { normalize } from 'helpers/utils';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.screenBackground,
  },
  screenContent: {
    ...styles.authScreenStyle,
    alignItems: 'center',
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
  mainContent: {
    flex: 1,
    width: '100%',
  },
  footer: {
    marginTop: 'auto',
    width: '100%',
    marginBottom: normalize(33),

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
