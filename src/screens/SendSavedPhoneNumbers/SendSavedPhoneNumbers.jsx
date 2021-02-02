import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import SavedPhoneNumbers from 'components/SavedPhoneNumbers';

import { MOBILE_MONEY_FLOW, SEND_FLOW } from 'helpers/constants';

function SendSavedPhoneNumbers({ navigation }) {
  const handleConfirm = useCallback(() => {
    navigation.navigate('ChooseContact', { sendFlow: SEND_FLOW.MOBILE });
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
