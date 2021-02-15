import { StyleSheet, Dimensions } from 'react-native';

import { normalizeSpace } from 'helpers/utils.helper';

import fonts from 'themes/fonts';
import styles from 'themes/commonStyles';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  screen: {
    ...styles.authScreenStyle,
  },
  passwordRulesWrapper: {
    marginTop: normalizeSpace(10),
    marginBottom: normalizeSpace(20),
  },
  passwordRule: {
    fontSize: fonts.size.extraSmall,
    lineHeight: fonts.lineHeight.small,
  },
  wrapperInput: {
    flex: 1,
    marginTop: height > 600 ? 40 : 10,
  },
  wrapperButton: {
    marginTop: 'auto',
    marginBottom: normalizeSpace(33),
  },
});
