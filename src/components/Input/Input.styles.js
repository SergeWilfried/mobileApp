import { StyleSheet } from 'react-native';

import colors from 'themes/colors';

export default StyleSheet.create({
  inputWrapper: {
    width: '100%',
  },
  inputContainer: {
    height: 45,
    borderWidth: 1,
    borderColor: colors.inputStandartBorder,
    borderRadius: 10,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    paddingLeft: 10,
  },
  label: {
    marginBottom: 10,
    color: colors.labelInput,
  },
  inputFocused: {
    borderColor: colors.focusedInput,
  },
  errorInput: {
    borderColor: colors.errorBorder,
  },
  errorContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  errorText: {
    color: colors.errorText,
  },
  warning: {
    marginRight: 8,
    alignSelf: 'flex-start',
  },
});
