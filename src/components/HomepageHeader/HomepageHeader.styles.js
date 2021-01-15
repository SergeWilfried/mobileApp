import { StyleSheet } from 'react-native';

import colors from 'themes/colors';
import fonts from 'themes/fonts';

export default StyleSheet.create({
  header: {
    width: '100%',
    height: 258,
    paddingTop: 27,
    paddingBottom: 27,
    backgroundColor: colors.headerBackground,
    // backgroundColor: 'green',
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3.74,
    marginHorizontal: 17.92,
  },
  title: {
    opacity: 0.5,
  },
  profileContainer: {
    height: 36,
    width: 36,
    borderWidth: 2,
    borderColor: colors.profileBorder,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.black,
    fontSize: fonts.size.small,
    lineHeight: fonts.lineHeight.small,
    textAlign: 'center',
    width: '100%',
    marginLeft: 'auto',
  },
  headerSubtitle: {
    color: colors.black,
    fontSize: fonts.size.kingSize,
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
