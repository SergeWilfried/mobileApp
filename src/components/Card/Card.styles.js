import { StyleSheet } from 'react-native';

import colors from 'themes/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingLeft: 15,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    alignItems: 'center',
  },
  rightIcon: {
    marginLeft: 'auto',
  },
});
