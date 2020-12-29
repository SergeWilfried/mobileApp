import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import * as userActions from 'resources/user/user.actions';

import AuthSuccess from 'components/AuthSuccess';

function Congratulations() {
  const dispatch = useDispatch();

  const onContinuePress = useCallback(() => {
    dispatch(userActions.setUserAuthenticated());
  }, [dispatch]);

  return (
    <AuthSuccess
      title="Congratulations"
      subTitle="You created your DuniaPay account. Now you’re ready to access your wallet."
      buttonName="Go to wallet"
      onContinuePress={onContinuePress}
    />
  );
}

Congratulations.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Congratulations;
