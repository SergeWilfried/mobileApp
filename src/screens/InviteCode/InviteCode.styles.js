import { StyleSheet } from 'react-native';

import { normalize } from 'helpers/utils.helper';

import styles from 'themes/commonStyles';

export default StyleSheet.create({
  screenContent: {
    ...styles.authScreenStyle,
  },
  authHeaderLayout: {
    paddingTop: '15%',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
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
    marginBottom: normalize(33),
  },
});
