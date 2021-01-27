import { Platform } from 'react-native';

import Benin from 'assets/icons/countries/Benin.svg';
import BurkinaFaso from 'assets/icons/countries/BurkinaFaso.svg';
import CaboVerde from 'assets/icons/countries/CaboVerde.svg';
import CôteDIvoire from 'assets/icons/countries/CôteDIvoire.svg';
import Gambia from 'assets/icons/countries/Gambia.svg';
import Ghana from 'assets/icons/countries/Ghana.svg';
import GuineaBissau from 'assets/icons/countries/Guinea-Bissau.svg';
import Guinea from 'assets/icons/countries/Guinea.svg';
import Liberia from 'assets/icons/countries/Liberia.svg';
import Mali from 'assets/icons/countries/Mali.svg';
import Niger from 'assets/icons/countries/Niger.svg';
import Nigeria from 'assets/icons/countries/Nigeria.svg';
import Senegal from 'assets/icons/countries/Senegal.svg';
import SierraLeone from 'assets/icons/countries/SierraLeone.svg';
import Togo from 'assets/icons/countries/Togo.svg';

export const PASSWORD = {
  length: 8,
  regExp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[&%$@])[a-zA-Z\d&%$@]{8,}$/,
};

export const EMAIL = {
  regExp: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export const AUTH = {
  SIGN_UP: 'signup',
  SIGN_IN: 'signin',
};

export const STORAGE = {
  HIDE_ON_BOARDING: 'HIDE_ON_BOARDING',
};

export const NAVBAR_ICONS = {
  WALLET: 'Wallet',
  SAVINGS: 'Savings',
  SEND: 'Send',
  CONTACTS: 'Contacts',
  MORE: 'More',
};

export const SEND_FLOW = {
  DUNIAPAY: 'Duniapay',
  MOBILE: 'Mobile',
  QR_CODE: 'QRCode',
};

export const HOMEPAGE_HEADER = {
  FULL_HEIGHT: 248,
  SMALL_HEIGHT: Platform.OS === 'android' ? 50 : 76,
};

export const PHONE_OPERATORS = {
  MTN: 'Mtn',
  AIRTEL: 'Airtel',
  ETISALAT: 'Etisalat',
  ORANGE: 'Orange',
  SAFARICOM: 'Safaricom',
  VODACOM: 'Vodacom',
};

export const MOBILE_MONEY_FLOW = {
  DEPOSIT: 'deposit',
  SEND: 'send',
};

export const COUNTRIES = [
  { name: 'Benin', icon: Benin },
  { name: 'Burkina Faso', icon: BurkinaFaso },
  { name: 'Cabo Verde', icon: CaboVerde },
  { name: 'Cote d’Ivoire', icon: CôteDIvoire },
  { name: 'Gambia', icon: Gambia },
  { name: 'Ghana', icon: Ghana },
  { name: 'Guinea', icon: Guinea },
  { name: 'Guinea-Bissau', icon: GuineaBissau },
  { name: 'Liberia', icon: Liberia },
  { name: 'Mali', icon: Mali },
  { name: 'Niger', icon: Niger },
  { name: 'Nigeria', icon: Nigeria },
  { name: 'Senegal', icon: Senegal },
  { name: 'Sierra Leone', icon: SierraLeone },
  { name: 'Togo', icon: Togo },
];
