import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Text from 'components/Text';
import Card from 'components/Card';

import SmartphoneIcon from 'assets/icons/smartphone.svg';
import CreditCardIcon from 'assets/icons/creditCard.svg';
import TransferIcon from 'assets/icons/transfer.svg';
import RightArrow from 'assets/icons/rightArrow.svg';

import styles from './DepositMoney.styles';

const cards = [
  {
    icon: SmartphoneIcon,
    title: 'Mobile money',
    subTitle: 'Send money to your wallet from your phone number',
    handleRightClick: (navigation) => {
      navigation.navigate('ConfirmMobileDeposit');
    },
  },
  {
    icon: CreditCardIcon,
    title: 'Debit card',
    subTitle: 'Send money to your wallet with a debit card',
    handleRightClick: (navigation) => {
      navigation.navigate('ConfirmCardDeposit');
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
          onRightIconClick={() => handleRightClick(navigation)}
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
