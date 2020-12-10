import { StyleSheet } from 'react-native';

import commonStyles from 'themes/commonStyles';
import styles from 'themes/fonts';
import colors from 'themes/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 70,
    paddingHorizontal: 45,
  },
  title: {
    ...commonStyles.heroTitle,
    color: colors.secondaryFont,
    textAlign: 'center',
    paddingTop: 30,
  },
  subtitle: {
    paddingTop: 20,
    textAlign: 'center',
    lineHeight: styles.lineHeight.regular,
    letterSpacing: styles.letterSpacing.regular,
  },
});
