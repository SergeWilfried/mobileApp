import { StyleSheet } from 'react-native';

import colors from 'themes/colors';
import fonts from 'themes/fonts';

import { HOMEPAGE_HEADER } from 'helpers/constants';

export default StyleSheet.create({
  header: {
    marginHorizontal: 16,
    paddingTop: 28,
    height: HOMEPAGE_HEADER.FULL_HEIGHT,
  },
  headerTitle: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  title: {
    color: colors.gray,
  },
  profileContainer: {
    position: 'absolute',
    left: 0,
    height: 36,
    width: 36,
    borderColor: colors.profileBorder,
    borderRadius: 18,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  text: {
    color: colors.black,
    fontSize: fonts.size.small,
    lineHeight: fonts.lineHeight.small,
    textAlign: 'center',
  },
  initials: {
    textAlign: 'center',
  },
  hiddenBalance: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  hiddenBalanceText: {
    color: colors.black,
    fontSize: fonts.size.medium,
    fontWeight: fonts.weight.bold,
    marginLeft: 12,
  },
  headerSubtitle: {
    color: colors.black,
    fontSize: fonts.size.extraExtraLarge,
    lineHeight: fonts.lineHeight.extraLarge,
    letterSpacing: fonts.letterSpacing.regular,
    fontWeight: fonts.weight.bold,
    textAlign: 'center',
    marginBottom: 40,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
  },
  iconBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    width: 50,
    height: 50,
    backgroundColor: colors.theme,
    marginBottom: 4,
  },
});
