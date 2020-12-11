import { StyleSheet, Dimensions } from 'react-native';

import fonts from 'themes/fonts';
import colors from 'themes/colors';
import styles from 'themes/commonStyles';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: colors.screenBackground,
  },
  screen: {
    ...styles.authScreenStyle,
  },
  passwordRules: {
    fontSize: fonts.size.extraSmall,
    marginTop: 10,
    marginBottom: 20,
    lineHeight: fonts.lineHeight.small,
  },
  wrapperInput: {
    flex: 1,
    marginTop: height < 600 ? 0 : 40,
  },
  wrapperButton: {
    marginTop: 'auto',
    marginBottom: 35,
  },
});
