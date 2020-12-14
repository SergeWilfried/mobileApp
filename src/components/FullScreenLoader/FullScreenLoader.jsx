import React from 'react';
import { Modal } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

import colors from 'themes/colors';
import styles from './FullScreenLoader.styles';

const loader = require('assets/animations/loader.json');

function FullScreenLoader() {
  return (
    <Modal
      animationType="none"
      transparent
      visible
    >
      <AnimatedLoader
        visible
        source={loader}
        overlayColor={colors.loaderOverlay}
        animationStyle={styles.loader}
      />
    </Modal>
  );
}

export default FullScreenLoader;
