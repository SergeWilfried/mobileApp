import { StyleSheet, Dimensions } from 'react-native';

import colors from 'themes/colors';
import fonts from 'themes/fonts';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: height > 700 ? 35 : 0,
  },
  wrapperInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    color: colors.theme,
    fontWeight: fonts.weight.bold,
    fontSize: fonts.size.extraExtraExtraLarge,
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
    height: height > 700 ? 58 : 50,
  },
  card: {
    height: 78,
    marginTop: height > 700 ? 65 : 30,
  },
});
