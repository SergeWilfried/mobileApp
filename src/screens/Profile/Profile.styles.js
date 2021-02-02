import { StyleSheet } from 'react-native';

import fonts from 'themes/fonts';
import colors from 'themes/colors';

export default StyleSheet.create({
  screen: {
    backgroundColor: colors.mainScreenBackground,
  },
  profileContainer: {
    position: 'relative',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 5,
  },
  editProfileContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: colors.mainScreenBackground,
    borderRadius: 13,
  },
  editProfile: {
    padding: 3,
    borderRadius: 13,
  },
  avatarContainer: {
    width: 90,
    height: 90,
    borderColor: colors.profileBorder,
    borderRadius: 45,
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 82,
    height: 82,
    borderRadius: 41,
  },
  initials: {
    color: colors.black,
    fontSize: fonts.size.extraLarge,
    fontWeight: fonts.weight.medium,
  },
  fullName: {
    color: colors.black,
    fontSize: fonts.size.medium,
    fontWeight: fonts.weight.medium,
  },
  username: {
    fontSize: fonts.size.extraSmall,
    marginTop: 6,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingHorizontal: 16,
    borderBottomColor: colors.inputStandardBorder,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  listItemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemTitle: {
    color: colors.black,
    fontSize: fonts.size.small,
    marginLeft: 13,
  },
});
