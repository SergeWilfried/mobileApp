import { StyleSheet } from 'react-native';

import colors from 'themes/colors';
import fonts from 'themes/fonts';

export default StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  textContainer: {
    width: '100%',
    marginLeft: 12,
    marginRight: 'auto',
  },
  receiveMoney: {
    color: colors.inputCorrect,
    fontSize: fonts.size.medium,
    lineHeight: fonts.lineHeight.medium,
  },
  iconWrapper: {
    padding: 11,
    borderRadius: 5,
    borderColor: colors.transactionBorder,
    borderWidth: 1,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 17,
  },
  title: {
    color: colors.black,
    fontWeight: fonts.weight.bold,
    fontSize: fonts.size.medium,
    lineHeight: fonts.lineHeight.medium,
  },
  subtitle: {
    color: colors.black,
    fontSize: fonts.size.extraSmall,
    lineHeight: fonts.lineHeight.extraSmall,
    opacity: 0.5,
  },
});
