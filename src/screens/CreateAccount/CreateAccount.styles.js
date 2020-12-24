import { StyleSheet, Dimensions } from 'react-native';

import colors from 'themes/colors';
import styles from 'themes/commonStyles';
import { normalize } from 'helpers/utils';
import fonts from 'themes/fonts';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: colors.screenBackground,
  },
  screen: {
    ...styles.authScreenStyle,
  },
  container: {
    flexGrow: 1,
  },
  authHeaderLayout: {
    paddingTop: 30,
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
  passwordInput: {
    marginTop: 11,
  },
  passwordRulesWrapper: {
    marginTop: 10,
    marginBottom: 20,
  },
  passwordRule: {
    fontSize: fonts.size.extraSmall,
    lineHeight: fonts.lineHeight.small,
  },
});
