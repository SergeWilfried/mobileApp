import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import * as userActions from 'resources/user/user.actions';
import Button from 'components/Button';
import Text from 'components/Text';

import * as constants from 'helpers/constants';
import GoogleIcon from 'assets/icons/google.svg';

import FacebookButton from './components';

import styles from './SocialButtons.styles';

function SocialButtons({ title, verificationToken, type }) {
  const dispatch = useDispatch();
  const handleGoogleSignIn = useCallback(() => {}, []);
  const handleFacebookSubmit = useCallback(
    async (facebookAccessToken) => {
      if (type === constants.AUTH.SIGN_UP) {
        await dispatch(
          userActions.signUpFacebook({
            facebookAccessToken,
            verificationToken,
          }),
        );
      }
      if (type === constants.AUTH.SIGN_IN) {
        await dispatch(userActions.signInFacebook({ facebookAccessToken }));
      }
    },
    [type],
  );

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
        <FacebookButton handleFacebookSubmit={handleFacebookSubmit} />
      </View>
    </View>
  );
}

SocialButtons.propTypes = {
  title: PropTypes.string.isRequired,
  verificationToken: PropTypes.string,
  type: PropTypes.string.isRequired,
};

SocialButtons.defaultProps = {
  verificationToken: '',
};

export default SocialButtons;
