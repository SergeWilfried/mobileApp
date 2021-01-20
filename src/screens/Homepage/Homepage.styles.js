import { StyleSheet, Dimensions, Platform } from 'react-native';
import colors from 'themes/colors';
import fonts from 'themes/fonts';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

export default StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  contentContainer: {
    flexGrow: 1,
    backgroundColor: 'pink',
  },
  //   navContainer: {
  //     height: HEADER_HEIGHT,
  //     marginHorizontal: 23,
  //   },
  //   //   statusBar: {
  //   //     height: STATUS_BAR_HEIGHT,
  //   //   },
  navBar: {
    height: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  //   text: {
  //     color: colors.white,
  //     fontSize: fonts.size.extraLarge,
  //     lineHeight: fonts.lineHeight.extraLarge,
  //     letterSpacing: fonts.letterSpacing.regular,
  //     fontWeight: fonts.weight.bold,
  //     width: '100%',
  //     textAlign: 'center',
  //     paddingRight: 75,
  //   },
  //   profileContainer: {
  //     padding: 7,
  //     borderWidth: 2,
  //     borderColor: colors.iconBackground,
  //     borderRadius: 23,
  //   },
});
