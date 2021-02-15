import { StyleSheet, Dimensions } from 'react-native';

import { normalizeSpace } from 'helpers/utils.helper';

import fonts from 'themes/fonts';
import colors from 'themes/colors';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cardsContainer: {
    marginTop: normalizeSpace(30),
    height: normalizeSpace(211),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'space-between',
  },
  text: {
    fontSize: fonts.size.small,
    marginTop: height > 600 ? 50 : 20,
    marginBottom: normalizeSpace(30),
    color: colors.gray,
    textAlign: 'center',
  },
  input: {
    marginHorizontal: normalizeSpace(16),
  },
  button: {
    marginTop: 'auto',
    marginBottom: normalizeSpace(30),
    marginHorizontal: 23,
  },
});
