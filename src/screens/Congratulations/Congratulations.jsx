import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import AuthSuccess from 'components/AuthSuccess';
import * as userActions from 'resources/user/user.actions';

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

export default Congratulations;
