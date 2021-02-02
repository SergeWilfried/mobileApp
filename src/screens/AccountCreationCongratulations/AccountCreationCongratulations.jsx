import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import * as userActions from 'resources/user/user.actions';

import Congratulations from 'components/Congratulations';

function AccountCreationCongratulations({ navigation }) {
  const dispatch = useDispatch();

  const onContinuePress = useCallback(() => {
    dispatch(userActions.setUserAuthenticated());

    navigation.navigate('Homepage');
  }, [dispatch]);

  return (
    <Congratulations
      title="Congratulations"
      subTitle="You created your DuniaPay account. Now you’re ready to access your wallet."
      buttonName="Go to wallet"
      onContinuePress={onContinuePress}
    />
  );
}

AccountCreationCongratulations.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default AccountCreationCongratulations;
