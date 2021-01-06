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
  },
  {
    icon: CreditCardIcon,
    title: 'Debit card',
    subTitle: 'Send money to your wallet with a debit card',
  },
  {
    icon: TransferIcon,
    title: 'Bank transfer',
    subTitle: 'Send money to your wallet from a bank account',
  },
];

function DepositMoney() {
  return (
    <View style={styles.screen}>
      <View style={styles.cardsContainer}>
        {cards.map(({ title, icon, subTitle }) => (
          <Card
            key={title}
            leftIcon={icon}
            rightIcon={RightArrow}
            rightIconStyle={styles.arrowBack}
            cardStyle={styles.card}
          >
            <View style={styles.cardContent}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
          </Card>
        ))}
      </View>
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
