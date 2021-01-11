import React from 'react';
import { View, LogBox } from 'react-native';
import PropTypes from 'prop-types';

import Text from 'components/Text';
import Card from 'components/Card';

import SmartphoneIcon from 'assets/icons/smartphone.svg';
import CreditCardIcon from 'assets/icons/creditCard.svg';
import TransferIcon from 'assets/icons/transfer.svg';
import RightArrow from 'assets/icons/rightArrow.svg';
import PhoneOperator from 'assets/icons/MtnPhoneOperator.svg';
import CardPayment from 'assets/icons/mastercard.svg';

import styles from './DepositMoney.styles';

// disable react-navigation warnings passing in route params Components.
// https://reactnavigation.org/docs/troubleshooting/#i-get-the-warning-non-serializable-values-were-found-in-the-navigation-state
// no one case came up as we write in react-native
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const cards = [
  {
    icon: SmartphoneIcon,
    title: 'Mobile money',
    subTitle: 'Send money to your wallet from your phone number',
    handleRightClick: (navigation) => {
      navigation.navigate('ConfirmMobileDeposit', {
        phoneNumber: '+375336376495',
        PhoneOperator,
      });
    },
  },
  {
    icon: CreditCardIcon,
    title: 'Debit card',
    subTitle: 'Send money to your wallet with a debit card',
    handleRightClick: (navigation) => {
      navigation.navigate('ConfirmCardDeposit', {
        cardName: 'Shojol Islam',
        cardExpirationDate: 'Exp. 12/22',
        cardNumber: '•••• 1234',
        CardPayment,
      });
    },
  },
  {
    icon: TransferIcon,
    title: 'Bank transfer',
    subTitle: 'Send money to your wallet from a bank account',
    handleRightClick: () => {},
  },
];

function DepositMoney({ navigation }) {
  return (
    <View style={styles.cardsContainer}>
      {cards.map(({ title, icon, subTitle, handleRightClick }) => (
        <Card
          key={title}
          leftIcon={icon}
          rightIcon={RightArrow}
          rightIconStyle={styles.arrowBack}
          cardStyle={styles.card}
          onCardClick={() => handleRightClick(navigation)}
        >
          <View style={styles.cardContent}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
        </Card>
      ))}
    </View>
  );
}

DepositMoney.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default DepositMoney;
