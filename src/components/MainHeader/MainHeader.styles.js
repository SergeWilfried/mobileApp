import { StyleSheet } from 'react-native';

import colors from 'themes/colors';
import styles from 'themes/fonts';

export default StyleSheet.create({
  header: {
    paddingTop: 36,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerTitle: {
    fontWeight: styles.weight.bold,
    color: colors.black,
    fontSize: styles.size.large,
  },
  headerSubTitle: {
    fontSize: styles.size.small,
    marginTop: 37,
    color: colors.gray,
    textAlign: 'center',
    marginHorizontal: 35,
  },
  arrowBack: {
    position: 'absolute',
    left: 16,
    bottom: 0,
  },
});
