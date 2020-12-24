import { StyleSheet } from 'react-native';

import colors from 'themes/colors';
import fonts from 'themes/fonts';
import { normalize } from 'helpers/utils';

export default StyleSheet.create({
  socialWrapper: {
    alignItems: 'center',
    marginBottom: normalize(16),
  },
  socialText: {
    fontSize: fonts.size.extraSmall,
    color: colors.inputPlaceholder,
  },
  socialButtonsWrapper: {
    flexDirection: 'row',
    marginTop: normalize(11),
  },
  socialButton: {
    marginRight: 15,
  },
});
