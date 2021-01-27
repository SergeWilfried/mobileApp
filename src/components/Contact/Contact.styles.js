import { StyleSheet } from 'react-native';

import colors from 'themes/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  divideLine: {
    borderColor: colors.contactsBorder,
    width: '100%',
    borderWidth: 1,
  },
});
