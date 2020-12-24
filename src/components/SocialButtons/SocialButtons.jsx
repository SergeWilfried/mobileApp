import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Button from 'components/Button';
import Text from 'components/Text';

import GoogleIcon from 'assets/icons/google.svg';
import FacebookIcon from 'assets/icons/facebook.svg';

import styles from './SocialButtons.styles';

function SocialButtons({ title }) {
  const handleGoogleSignIn = useCallback(() => {}, []);
  const handleFacebookSignIn = useCallback(() => {}, []);

  return (
    <View style={styles.socialWrapper}>
      <Text style={styles.socialText}>{title}</Text>
      <View style={styles.socialButtonsWrapper}>
        <Button
          style={styles.socialButton}
          icon={GoogleIcon}
          type="social"
          onPress={handleGoogleSignIn}
        />
        <Button
          icon={FacebookIcon}
          type="social"
          onPress={handleFacebookSignIn}
        />
      </View>
    </View>
  );
}

SocialButtons.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SocialButtons;
