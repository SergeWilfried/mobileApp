import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const scale = SCREEN_WIDTH / 420;

export const normalize = (size) => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

export const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const processMoney = (text) => {
  const onlyNumbers = text.replace(/[^\d]/g, '');
  const withoutLeadZeroes = onlyNumbers.replace(/^0+(?=\d)/, '');
  const max6numbers = withoutLeadZeroes.slice(0, 6);
  return max6numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getInitials = (username) => {
  if (!username) return '';
  const nameArray = username.split(' ');
  if (nameArray.length > 1) {
    return `${nameArray[0][0].toUpperCase()}${nameArray[1][0].toUpperCase()}`;
  }
  return username[0].toUpperCase();
};

export const groupTransactionsList = (transactions) => {
  const groupedTransactions = transactions.reduce((result, item) => {
    const date = new Date(item.created);

    const transactionDay = date.toLocaleDateString('en');

    const transactionsData = result[transactionDay] || [];

    return {
      ...result,
      [transactionDay]: [...transactionsData, item],
    };
  }, {});

  return Object.entries(groupedTransactions);
};

export const formatTransactionAmount = (amount) => {
  if (amount === 0) {
    return '₣ 0';
  }

  const sign = amount > 0 ? '+' : '-';

  const absValue = Math.abs(amount).toString();

  return `${sign} ₣ ${processMoney(absValue)}`;
};

export const getSizeQrCode = () => {
  return SCREEN_WIDTH - 68;
};
