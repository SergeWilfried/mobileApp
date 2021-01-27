import { StyleSheet } from 'react-native';

import colors from 'themes/colors';

export default StyleSheet.create({
  datePickersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  datePicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    height: 45,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.inputStandardBorder,
    borderRadius: 10,
    backgroundColor: colors.white,
    marginBottom: 17,
  },
  datePickerIOS: {
    position: 'absolute',
    top: 0,
    height: 55,
    opacity: 0.1,
    width: '100%',
  },
});
