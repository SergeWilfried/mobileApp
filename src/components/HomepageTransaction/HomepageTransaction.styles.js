import { StyleSheet } from 'react-native';

import colors from 'themes/colors';
import fonts from 'themes/fonts';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  iconContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.black,
    fontWeight: fonts.weight.bold,
    fontSize: fonts.size.medium,
    lineHeight: fonts.lineHeight.medium,
    paddingBottom: 26
  },
  subtitle: {
    color: colors.black,
    fontSize: fonts.size.extraSmall,
    lineHeight: fonts.lineHeight.extraSmall,
    opacity: 0.5,
  },
  divideLine: {
    marginTop: 19,
    borderColor: colors.darkBlack,
    width: '100%',
    borderWidth: 1,
    opacity: 0.1,
    borderStyle: 'solid',
  },
});
