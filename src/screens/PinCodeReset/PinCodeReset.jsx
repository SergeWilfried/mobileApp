import React from 'react';
import PropTypes from 'prop-types';

import PinCode from 'components/PinCodeChoose';

function PinCodeReset({ navigation, route }) {
  return <PinCode navigation={navigation} route={route} />;
}

PinCodeReset.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      pinFlow: PropTypes.string,
      withLogo: PropTypes.bool,
      showProgressBar: PropTypes.bool,
    }).isRequired,
  }).isRequired,
};

export default PinCodeReset;
