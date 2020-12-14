import { StyleSheet } from 'react-native';
import colors from 'themes/colors';

export default StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: colors.screenBackground,
  },
  container: {
    flex: 1,
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
