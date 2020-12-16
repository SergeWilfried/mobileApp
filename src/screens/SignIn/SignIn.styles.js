import { StyleSheet, Dimensions } from 'react-native';

import fonts from 'themes/fonts';
import colors from 'themes/colors';
import styles from 'themes/commonStyles';
import { normalize } from 'helpers/utils';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: colors.screenBackground,
  },
  screen: {
    ...styles.authScreenStyle,
  },
  wrapperInput: {
    marginTop: height < 600 ? 0 : normalize(40),
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
  socialWrapper: {
    alignItems: 'center',
    marginBottom: normalize(16),
  },
  socialText: {
    fontSize: fonts.size.extraSmall,
    color: colors.inputPlaceholder,
  },
  socialButtonsWrapper: {
    flexDirection: 'row',
    marginTop: normalize(11),
  },
  socialButton: {
    marginRight: 15,
  },
  passwordInput: {
    marginTop: 11,
  },
});
