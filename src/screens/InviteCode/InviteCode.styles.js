import { StyleSheet } from 'react-native';

import colors from 'themes/colors';
import styles from 'themes/commonStyles';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.screenBackground,
  },
  screenContent: {
    alignItems: 'center',
    ...styles.authScreenStyle,
  },
  authHeaderLayout: {
    paddingTop: '15%',
  },
  header: {
    paddingLeft: 30,
  },
  imagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25,
  },
  swapIcon: {
    marginHorizontal: 16,
  },
  continueButtonWrapper: {
    marginTop: 'auto',
    width: '100%',
    marginBottom: 33,
  },
});
