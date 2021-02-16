import Orange from 'assets/icons/orangeProvider.svg';
import Moov from 'assets/icons/moovProvider.svg';
import Telecel from 'assets/icons/telecelProvider.svg';

import { PHONE_OPERATORS } from 'helpers/constants';

export const getPhoneOperatorIcon = (name) => {
  switch (name) {
    case PHONE_OPERATORS.ORANGE:
      return Orange;
    case PHONE_OPERATORS.MOOV:
      return Moov;
    case PHONE_OPERATORS.TELECEL:
      return Telecel;
    default:
      return Orange;
  }
};
