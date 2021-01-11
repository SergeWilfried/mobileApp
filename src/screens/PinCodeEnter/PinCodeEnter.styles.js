import { StyleSheet } from 'react-native';
import colors from 'themes/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.authScreenBackground,
  },
  pinCodeWrapper: {
    marginTop: 60,
  },
  link: {
    color: colors.theme,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 60,
  },
  forgotText: {
    marginRight: 5,
  },
});
