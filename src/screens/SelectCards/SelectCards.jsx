import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { getDebitCards, removeDebitCard } from 'resources/user/user.api';

import Button from 'components/Button';

import DebitCard from './components/DebitCard';

import styles from './SelectCards.styles';

const CARDS_MAXIMUM = 3;

function SelectCard({ navigation }) {
  const [cards, setCards] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        const debitCards = await getDebitCards();
        setCards(debitCards);
      })();
    }, [setCards]),
  );

  const onAddNewCard = useCallback(() => {
    navigation.navigate('AddCard');
  }, []);

  const onCardRemove = useCallback(async (cardId) => {
    await removeDebitCard(cardId);
    const debitCards = await getDebitCards();
    setCards(debitCards);
  }, [setCards]);

  return (
    <View style={styles.screenContent}>
      <View style={styles.cardsContainer}>
        {cards.map((card) => (
          <DebitCard
            key={card._id}
            cardData={card}
            onCardRemove={onCardRemove}
          />
        ))}
      </View>

      <Button
        title="Add new card"
        onPress={onAddNewCard}
        disabled={cards.length >= CARDS_MAXIMUM}
      />
    </View>
  );
}

SelectCard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SelectCard;
