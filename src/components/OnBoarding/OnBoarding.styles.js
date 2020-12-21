import { StyleSheet } from 'react-native';

import { normalize } from 'helpers/utils';

import colors from 'themes/colors';
import fonts from 'themes/fonts';

export default StyleSheet.create({
  screen: {
    flex: 1,
  },
  linkWrapper: {
    marginTop: normalize(41),
    marginBottom: normalize(31),
  },
  linkText: {
    color: colors.baseFont,
    fontFamily: fonts.type.title,
    letterSpacing: fonts.letterSpacing.regular,
    opacity: 0.7,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  link: {
    position: 'absolute',
    right: 20,
  },
  button: {
    height: normalize(58),
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
  },
  title: {
    fontFamily: fonts.type.title,
    fontSize: fonts.size.large,
    fontWeight: fonts.weight.bold,
    lineHeight: fonts.lineHeight.large,
    alignSelf: 'center',
    letterSpacing: fonts.letterSpacing.regular,
  },
  subTitle: {
    fontSize: fonts.size.small,
    lineHeight: fonts.lineHeight.regular,
    paddingHorizontal: 13,
    textAlign: 'center',
    fontFamily: fonts.type.title,
    marginBottom: 2,
  },
  buttonWrapper: {
    width: '100%',
    paddingHorizontal: 23,
    marginTop: 5,
    marginBottom: normalize(31),
  },
});
