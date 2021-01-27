import { StyleSheet, Platform } from 'react-native';

import colors from 'themes/colors';
import fonts from 'themes/fonts';

const zIndexContainer = Platform.OS === 'ios' && { zIndex: 10 };
const zIndexDropDown = Platform.OS === 'ios' ? 0 : 10;

export default StyleSheet.create({
  container: {
    ...zIndexContainer,
  },
  inputWrapper: {
    height: 45,
    marginBottom: 17,
    zIndex: zIndexDropDown,
  },
  input: {
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    borderColor: colors.inputStandardBorder,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
  },
  arrow: {
    marginLeft: 20,
  },
  label: {
    marginBottom: 7,
    color: colors.inputLabel,
    lineHeight: fonts.lineHeight.medium,
    fontSize: fonts.size.small,
  },
  dropdown: {
    backgroundColor: colors.white,
    overflow: 'scroll',
  },
  selectedLabel: {
    color: colors.black,
  },
  activeLabel: {
    backgroundColor: colors.gray,
  },
  item: {
    justifyContent: 'flex-start',
  },
});
