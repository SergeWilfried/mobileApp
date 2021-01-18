import { StyleSheet } from 'react-native';

import colors from 'themes/colors';
import fonts from 'themes/fonts';

export default StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 100,
    backgroundColor: colors.theme,
    height: 58,
  },
  disabled: {
    opacity: 0.5,
  },
  social: {
    backgroundColor: colors.white,
    width: 40,
    height: 40,
    borderColor: colors.socialBorder,
    borderWidth: 1,
    borderRadius: 12,
  },
  title: {
    fontSize: fonts.size.large,
    fontWeight: fonts.weight.bold,
    color: colors.authScreenBackground,
  },
});
