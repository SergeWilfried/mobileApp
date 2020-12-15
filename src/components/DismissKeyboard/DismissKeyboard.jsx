import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import styles from './DismissKeyboard.styles';

function DismissKeyboard({ children }) {
  const [size, setSize] = useState('');
  const contentStyle = useMemo(() => (size
    ? { height: size }
    : styles.flexLayout), [size]);

  const withKeyboardDismiss = (
    <ScrollView
      contentContainerStyle={contentStyle}
      bounces={false}
      overScrollMode="never"
      keyboardShouldPersistTaps="handled"
      onContentSizeChange={(contentWidth, contentHeight) => setSize(contentHeight)}
    >
      {children}
    </ScrollView>
  );

  return Platform.OS === 'ios' ? (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.flexLayout}
      contentContainerStyle={styles.flexLayout}
    >
      {withKeyboardDismiss}
    </KeyboardAvoidingView>
  ) : (
    withKeyboardDismiss
  );
}

DismissKeyboard.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DismissKeyboard;
