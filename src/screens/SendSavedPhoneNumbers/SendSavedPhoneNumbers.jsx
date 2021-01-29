import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import SavedPhoneNumbers from 'components/SavedPhoneNumbers';

import { MOBILE_MONEY_FLOW } from 'helpers/constants';

function SendSavedPhoneNumbers({ navigation }) {
  const handleConfirm = useCallback(() => {
    navigation.navigate('SendMobileMoney');
  }, [navigation]);

  return (
    <SavedPhoneNumbers
      handleConfirm={handleConfirm}
      navigation={navigation}
      phoneflow={MOBILE_MONEY_FLOW.SEND}
    />
  );
}

SendSavedPhoneNumbers.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SendSavedPhoneNumbers;
