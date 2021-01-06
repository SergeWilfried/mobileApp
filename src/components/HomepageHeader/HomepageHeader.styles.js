import { StyleSheet } from 'react-native';

import colors from 'themes/colors';
import fonts from 'themes/fonts';

export default StyleSheet.create({
  header: {
    width: '100%',
    height: 285,
    backgroundColor: colors.theme,
  },
  profileContainer: {
    padding: 7,
    borderWidth: 2,
    borderColor: colors.iconBackground,
    borderRadius: 23,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 42,
    marginBottom: 8,
    marginHorizontal: 23,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 54,
    marginLeft: 56,
  },
  iconBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 45,
    height: 45,
    backgroundColor: colors.iconBackground,
    marginBottom: 4,
    shadowColor: colors.shadow,
    shadowOffset: { width: 1, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  text: {
    color: colors.white,
    fontSize: fonts.size.small,
    lineHeight: fonts.lineHeight.small,
    textAlign: 'center',
    width: '100%',
  },
  textContainer: {
    paddingRight: 73,
  },
  headerSubtitle: {
    color: colors.white,
    fontSize: fonts.size.kingSize,
    lineHeight: fonts.lineHeight.extraLarge,
    letterSpacing: fonts.letterSpacing.regular,
    fontWeight: fonts.weight.bold,
    textAlign: 'center',
    marginBottom: 59,
  },
});
