import { StyleSheet, Dimensions } from 'react-native';

import colors from 'themes/colors';
import styles from 'themes/commonStyles';
import { normalize } from 'helpers/utils';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.screenBackground,
  },
  screen: {
    ...styles.authScreenStyle,
  },
  wrapperInput: {
    marginTop: height < 600 ? 0 : normalize(40),
  },
  inputOutOfFocused: {
    borderColor: colors.inputStandardBorder,
  },
  wrapperButton: {
    marginTop: 'auto',
    marginBottom: normalize(33),
  },
  forgotWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: normalize(11),
  },
  forgotText: {
    color: colors.inputPlaceholder,
  },
  forgotLink: {
    color: colors.theme,
  },
  passwordInput: {
    marginTop: 11,
  },
  textError: {
    paddingTop: 12,
    color: colors.inputErrorText,
  },
});
