import { StyleSheet } from 'react-native';

import styles from 'themes/commonStyles';
import colors from 'themes/colors';

export default StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: colors.screenBackground,
  },
  screen: {
    ...styles.authScreenStyle,
  },
  inputWrapper: {
    marginTop: 31,
  },
  buttonContinueWrapper: {
    marginBottom: 33,
    marginTop: 'auto',
  },
});
