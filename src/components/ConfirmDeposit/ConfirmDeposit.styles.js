import { StyleSheet, Dimensions } from 'react-native';

import colors from 'themes/colors';
import fonts from 'themes/fonts';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    marginTop: height > 700 ? 35 : -10,
    marginHorizontal: 16,
    alignItems: 'center',
    flex: 1,
  },
  wrapperInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    color: colors.theme,
    fontWeight: fonts.weight.bold,
    fontSize: fonts.size.extraExtraLarge,
  },
  currency: {
    marginRight: 25,
  },
  subTitle: {
    color: colors.gray,
    marginTop: height > 700 ? 30 : 0,
    fontSize: fonts.size.small,
    lineHeight: fonts.lineHeight.regular,
  },
  buttonConfirm: {
    width: '100%',
    marginTop: 'auto',
    marginBottom: 30,
    height: 58,
  },
  card: {
    height: 78,
    marginTop: height > 700 ? 65 : 30,
  },
});
