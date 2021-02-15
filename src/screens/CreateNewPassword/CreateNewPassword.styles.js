import { StyleSheet, Dimensions } from 'react-native';

import fonts from 'themes/fonts';
import colors from 'themes/colors';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.mainScreenBackground,
  },
  passwordRulesWrapper: {
    marginTop: 10,
    marginBottom: 20,
  },
  container: {
    flexGrow: 1,
  },
  passwordRule: {
    fontSize: fonts.size.extraSmall,
    lineHeight: fonts.lineHeight.small,
  },
  wrapperInput: {
    flex: 1,
    marginHorizontal: 23,
    marginTop: height < 600 ? 0 : 40,
  },
  wrapperButton: {
    marginTop: 33,
    marginBottom: 33,
    marginHorizontal: 23,
  },
});
