import { StyleSheet } from 'react-native';

import colors from 'themes/colors';

export default StyleSheet.create({
  authScreen: {
    flex: 1,
    backgroundColor: colors.authScreenBackground,
  },
  statusBar: {
    flex: 0,
    backgroundColor: colors.mainScreenBackground,
  },
});
