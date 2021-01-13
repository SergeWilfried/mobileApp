import { StyleSheet } from 'react-native';

import colors from 'themes/colors';
import fonts from 'themes/fonts';

export default StyleSheet.create({
  navContainer: {
    marginHorizontal: 17.92,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 27,
  },
  text: {
    color: colors.textFont,
    fontSize: fonts.size.extraLarge,
    lineHeight: fonts.lineHeight.extraLarge,
    letterSpacing: fonts.letterSpacing.regular,
    fontWeight: fonts.weight.bold,
    width: '100%',
    textAlign: 'center',
    paddingRight: 75,
  },
  profileContainer: {
    height: 36,
    width: 36,
    borderWidth: 2,
    borderColor: colors.profileBorder,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
