import { StyleSheet } from 'react-native';

import styles from 'themes/fonts';
import colors from 'themes/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.theme,
    paddingVertical: 22,
    paddingHorizontal: 16,
  },
  safeAreaView: {
    flex: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    fontWeight: styles.weight.bold,
    color: colors.white,
    fontSize: styles.size.large,
    textAlign: 'center',
  },
});
