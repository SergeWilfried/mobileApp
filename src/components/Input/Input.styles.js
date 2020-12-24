import { StyleSheet } from 'react-native';

import colors from 'themes/colors';

export default StyleSheet.create({
  inputWrapper: {
  },
  inputContainer: {
    height: 45,
    borderWidth: 1,
    borderColor: colors.inputStandardBorder,
    borderRadius: 10,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    paddingHorizontal: 10,
  },
  inputWithIcon: {
    paddingRight: 40,
  },
  label: {
    marginBottom: 7,
    color: colors.inputLabel,
  },
  inputCorrect: {
    borderColor: colors.inputCorrect,
  },
  inputFocused: {
    borderColor: colors.inputFocused,
  },
  inputError: {
    borderColor: colors.inputErrorBorder,
  },
  containerError: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  textError: {
    color: colors.inputErrorText,
  },
  warning: {
    marginRight: 8,
    alignSelf: 'flex-start',
  },
});
