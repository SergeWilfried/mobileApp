import { StyleSheet } from 'react-native';

import { normalizeSpace } from 'helpers/utils.helper';

import colors from 'themes/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.authScreenBackground,
  },
  successScreen: {
    backgroundColor: colors.mainScreenBackground,
  },
  containerReset: {
    backgroundColor: colors.mainScreenBackground,
  },
  authHeaderContainer: {
    marginTop: normalizeSpace(47),
  },
  pinCodeContainer: {
    marginTop: normalizeSpace(36),
  },
  resetPinHeader: {
    marginBottom: 123,
  },
});
