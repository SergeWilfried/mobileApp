import React, { useCallback } from 'react';

import AuthSuccess from 'components/AuthSuccess';

function Congratulations() {
  const onContinuePress = useCallback(() => {}, []);

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
