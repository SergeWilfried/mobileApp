import { StyleSheet, Dimensions } from 'react-native';

import { normalize } from 'helpers/utils.helper';

import fonts from 'themes/fonts';
import colors from 'themes/colors';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cardsContainer: {
    marginTop: 30,
    height: 211,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'space-between',
  },
  text: {
    fontSize: fonts.size.small,
    marginTop: 50,
    marginBottom: 30,
    color: colors.gray,
    textAlign: 'center',
  },
  input: {
    marginHorizontal: 16,
  },
  button: {
    marginTop: 'auto',
    marginBottom: normalize(30),
    marginHorizontal: 23,
  },
  buttonConfirm: {
    height: height > 700 ? 58 : 50,
  },
});
