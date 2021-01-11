import { StyleSheet } from 'react-native';
import colors from 'themes/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.authScreenBackground,
  },
  authHeaderContainer: {
    marginTop: 47,
  },
  pinCodeContainer: {
    marginTop: 36,
  },
});
