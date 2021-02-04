import { StyleSheet } from 'react-native';

import colors from 'themes/colors';
import { normalize } from 'helpers/utils.helper';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.mainScreenBackground,
    paddingHorizontal: 16,
    marginBottom: normalize(33),
  },
  listItemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: normalize(24),
  },
  listItemTitle: {
    marginLeft: 13,
  },
  itemContainer: {
    marginTop: normalize(55),
  },
  button: {
    marginTop: 'auto',
  },
});
