import { StyleSheet } from 'react-native';

import styles from 'themes/commonStyles';
import { normalize } from 'helpers/utils';

export default StyleSheet.create({
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
