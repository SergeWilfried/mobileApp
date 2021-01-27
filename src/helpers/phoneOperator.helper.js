import Mtn from 'assets/icons/mtnProvider.svg';
import Airtel from 'assets/icons/airtelProvider.svg';
import Etisalat from 'assets/icons/etisalatProvider.svg';
import Orange from 'assets/icons/orangeProvider.svg';
import Safaricom from 'assets/icons/safaricomProvider.svg';
import Vodacom from 'assets/icons/vodacomProvider.svg';

import { PHONE_OPERATORS } from 'helpers/constants';

export const getPhoneOperatorIcon = (name) => {
  switch (name) {
    case PHONE_OPERATORS.MTN:
      return Mtn;
    case PHONE_OPERATORS.AIRTEL:
      return Airtel;
    case PHONE_OPERATORS.ETISALAT:
      return Etisalat;
    case PHONE_OPERATORS.ORANGE:
      return Orange;
    case PHONE_OPERATORS.SAFARICOM:
      return Safaricom;
    case PHONE_OPERATORS.VODACOM:
      return Vodacom;
    default:
      return Mtn;
  }
};
