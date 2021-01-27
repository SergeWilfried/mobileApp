import { StyleSheet } from 'react-native';

import fonts from 'themes/fonts';
import colors from 'themes/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  initials: {
    color: colors.contactInitials,
    fontWeight: fonts.weight.medium,
  },
  profileContainer: {
    height: 32,
    width: 32,
    borderRadius: 50,
    backgroundColor: colors.contactProfileBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divideLine: {
    borderColor: colors.contactsBorder,
    width: '100%',
    borderWidth: 1,
  },
});
