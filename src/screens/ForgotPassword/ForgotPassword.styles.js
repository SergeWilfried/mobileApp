import { StyleSheet } from 'react-native';

import styles from 'themes/commonStyles';
import colors from 'themes/colors';
import { normalize } from 'helpers/utils';

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
    marginBottom: normalize(33),
    marginTop: 'auto',
  },
});
