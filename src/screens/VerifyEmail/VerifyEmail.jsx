import React, { useCallback } from 'react';

import AuthSuccess from 'components/AuthSuccess';

function VerifyEmail() {
  const onContinuePress = useCallback(() => {}, []);

  return (
    <AuthSuccess
      title="Verify email"
      subTitle="Please verify your email to protect your account."
      buttonName="Open email"
      onContinuePress={onContinuePress}
    />
  );
}

export default VerifyEmail;
