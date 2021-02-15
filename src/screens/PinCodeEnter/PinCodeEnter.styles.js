import { StyleSheet } from 'react-native';

import { normalizeSpace } from 'helpers/utils.helper';

import colors from 'themes/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.authScreenBackground,
  },
  pinCodeWrapper: {
    marginTop: normalizeSpace(60),
  },
  link: {
    color: colors.theme,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: normalizeSpace(60),
  },
  forgotText: {
    marginRight: 5,
  },
});
