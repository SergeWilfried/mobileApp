import React, { useCallback, useEffect, useState } from 'react';
import { View, Alert } from 'react-native';
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

function SavedPhoneNumbers({ navigation, handleConfirm, phoneflow }) {
  const dispatch = useDispatch();
  const phoneNumbers = useSelector(getPhoneNumbers);
  const [serverError, setServerError] = useState(false);

  useEffect(() => {
    const init = async () => {
      await dispatch(setPhoneNumbers());
    };
    init();
  }, [dispatch]);

  const handleAddNewNumber = useCallback(() => {
    navigation.navigate('ChooseProvider', { phoneflow });
  }, [navigation]);

  const handleChoosePhone = useCallback(
    (_id) => {
      dispatch(selectPhoneNumber(_id));
      handleConfirm();
    },

    [dispatch, navigation],
  );

  const handleRemovePhone = useCallback(async (_id) => {
    try {
      await dispatch(removePhoneNumber(_id));
      setServerError(false);
    } catch (e) {
      setServerError(true);
    }
  }, []);

  const removePhone = useCallback(
    async (_id, phoneNumber) => {
      Alert.alert(
        'Remove phone number?',
        `Please confirm if you want to remove a phone number ${phoneNumber}?`,
        [
          {
            text: 'Cancel',
          },
          {
            text: 'Remove',
            onPress: () => handleRemovePhone(_id),
          },
        ],
      );
    },
    [dispatch],
  );

  return (
    <View style={styles.cardsContainer}>
      {!phoneNumbers.length ? (
        <View style={styles.emptyPhoneNumbers}>
          <Text>You have no mobile numbers yet</Text>
        </View>
      ) : (
        phoneNumbers.map(({ _id, phoneNumber, phoneOperator }) => {
          const MobileOperatorIcon = getPhoneOperatorIcon(phoneOperator);
          return (
            <Card
              key={phoneNumber}
              leftIcon={<MobileOperatorIcon />}
              rightIcon={<CardRightIcon title="Remove" />}
              rightIconClick={() => removePhone(_id, phoneNumber)}
              onCardClick={() => handleChoosePhone(_id)}
              cardStyle={styles.card}
            >
              <View style={styles.cardContent}>
                <Text style={styles.title}>Phone Number</Text>
                <Text style={styles.subTitle}>{phoneNumber}</Text>
              </View>
            </Card>
          );
        })
      )}
      <Button
        onPress={handleAddNewNumber}
        style={styles.buttonAddNumber}
        title="Add New Number"
        disabled={phoneNumbers.length >= 3 || serverError}
      />
    </View>
  );
}

SavedPhoneNumbers.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  handleConfirm: PropTypes.func.isRequired,
  phoneflow: PropTypes.string.isRequired,
};

export default SavedPhoneNumbers;
