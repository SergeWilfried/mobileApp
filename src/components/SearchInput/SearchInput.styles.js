import { StyleSheet, StatusBar } from 'react-native';

import colors from 'themes/colors';
import fonts from 'themes/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.searchBorder,
    borderRadius: 10,
    paddingHorizontal: 16,
  },
  input: {
    width: '100%',
    paddingHorizontal: 6,
    height: 46,
    fontSize: fonts.size.regular,
  },
  itemStyle: {
    padding: 10,
  },
  divideLine: {
    borderColor: colors.contactsBorder,
    borderWidth: 1,
  },
});
