import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import CardRightIcon from 'components/CardRightIcon';
import Card from 'components/Card';
import Text from 'components/Text';
import Button from 'components/Button';

import { getPhoneOperatorIcon } from 'helpers/phoneOperator.helper';
import {
  setPhoneNumbers,
  selectPhoneNumber,
  removePhoneNumber,
} from 'resources/wallet/wallet.actions';
import { getPhoneNumbers } from 'resources/wallet/wallet.selectors';

import styles from './SavedPhoneNumbers.styles';

const cards = [
  {
    id: '1',
    icon: 'Airtel',
    phoneNumber: '+31 (20) 666-13-13',
  },
  {
    id: '2',
    icon: 'Mtn',
    phoneNumber: '+31 (20) 555-10-10',
  },
  {
    id: '3',
    icon: 'Orange',
    phoneNumber: '+31 (20) 444-07-07',
  },
];

function SavedPhoneNumbers({ navigation }) {
  const dispatch = useDispatch();
  const phoneNumbers = useSelector(getPhoneNumbers);

  useEffect(() => {
    const init = async () => {
      await dispatch(setPhoneNumbers(cards));
    };
    init();
  }, [dispatch]);

  const handleAddNewNumber = useCallback(() => {
    navigation.navigate('ChooseProvider');
  }, [navigation]);

  const handleChoosePhone = useCallback(
    (id) => {
      dispatch(selectPhoneNumber(id));
      navigation.navigate('ConfirmMobileDeposit');
    },

    [dispatch, navigation],
  );

  const removePhone = useCallback(
    (id) => {
      dispatch(removePhoneNumber(id));
    },
    [dispatch],
  );

  return (
    <View style={styles.cardsContainer}>
      {phoneNumbers.map(({ id, phoneNumber, icon }) => (
        <Card
          key={phoneNumber}
          leftIcon={getPhoneOperatorIcon(icon)}
          rightIcon={<CardRightIcon title="Remove" />}
          rightIconClick={() => removePhone(id)}
          onCardClick={() => handleChoosePhone(id)}
          cardStyle={styles.card}
        >
          <View style={styles.cardContent}>
            <Text style={styles.title}>Phone Number</Text>
            <Text style={styles.subTitle}>{phoneNumber}</Text>
          </View>
        </Card>
      ))}
      <Button
        onPress={handleAddNewNumber}
        style={styles.buttonAddNumber}
        title="Add New Number"
        disabled={phoneNumbers.length >= 3}
      />
    </View>
  );
}

SavedPhoneNumbers.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SavedPhoneNumbers;
