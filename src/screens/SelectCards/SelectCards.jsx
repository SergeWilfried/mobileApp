import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Text from 'components/Text';
import Card from 'components/Card';

import RightArrow from 'assets/icons/rightArrow.svg';
import Visa from 'assets/icons/visa.svg';
import Mastercard from 'assets/icons/mastercard.svg';

import styles from './SelectCards.styles';

const cards = [
  {
    CardPayment: Mastercard,
    cardName: 'Shojol Islam',
    cardExpirationDate: 'Exp. 12/22',
    cardNumber: '••••  1234',
  },
  {
    CardPayment: Visa,
    cardName: 'Shojol Islam',
    cardExpirationDate: 'Exp. 12/22',
    cardNumber: '••••  5678',
  },
];

function SelectCard({ navigation }) {
  return (
    <View style={styles.cardsContainer}>
      {cards.map(
        ({ CardPayment, cardName, cardExpirationDate, cardNumber }) => (
          <Card
            key={cardNumber}
            leftIcon={CardPayment}
            rightIcon={<RightArrow />}
            rightIconStyle={styles.arrowBack}
            cardStyle={styles.card}
            onCardClick={() =>
              navigation.navigate('ConfirmCardDeposit', {
                CardPayment,
                cardName,
                cardExpirationDate,
                cardNumber,
              })
            }
          >
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{cardNumber}</Text>
              <View style={styles.cardInfo}>
                <Text style={styles.cardSubTitle}>{cardName}</Text>
                <Text
                  style={[styles.cardSubTitle, styles.cardSubTitleRightPart]}
                >
                  {cardExpirationDate}
                </Text>
              </View>
            </View>
          </Card>
        ),
      )}
    </View>
  );
}

SelectCard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SelectCard;
