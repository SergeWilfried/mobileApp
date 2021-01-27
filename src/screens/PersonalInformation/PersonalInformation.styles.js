import { StyleSheet } from 'react-native';

import colors from 'themes/colors';
import fonts from 'themes/fonts';
import styles from 'themes/commonStyles';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: colors.mainScreenBackground,
    flex: 1,
  },
  container: {
    flexGrow: 1,
  },

  content: {
    ...styles.mainScreenStyle,
  },
  input: {
    marginBottom: 17,
  },
  inputWrapper: {
    marginTop: 31,
  },
  label: {
    marginBottom: 7,
    color: colors.inputLabel,
    lineHeight: fonts.lineHeight.medium,
    fontSize: fonts.size.small,
  },
  button: {
    marginTop: 'auto',
    marginBottom: 30,
  },
});
