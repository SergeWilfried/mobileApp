import { StyleSheet } from 'react-native';

import colors from 'themes/colors';
import fonts from 'themes/fonts';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  iconContainer: {
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.black,
    fontWeight: fonts.weight.medium,
    fontSize: fonts.size.medium,
    lineHeight: fonts.lineHeight.regular,
    marginBottom: 26,
  },
  subtitle: {
    color: colors.gray,
    fontSize: fonts.size.extraSmall,
    lineHeight: fonts.lineHeight.extraSmall,
  },
  divideLine: {
    marginVertical: 24,
    borderColor: colors.black,
    width: '100%',
    borderWidth: 1,
    opacity: 0.1,
    borderStyle: 'solid',
  },
});
