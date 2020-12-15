import { StyleSheet } from 'react-native';

import commonStyles from 'themes/commonStyles';
import styles from 'themes/fonts';
import colors from 'themes/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 23,
  },
  title: {
    ...commonStyles.heroTitle,
    color: colors.secondaryFont,
    textAlign: 'center',
    marginTop: '5%',
  },
  subtitle: {
    marginTop: '2%',
    textAlign: 'center',
    lineHeight: styles.lineHeight.regular,
    letterSpacing: styles.letterSpacing.regular,
  },
});
