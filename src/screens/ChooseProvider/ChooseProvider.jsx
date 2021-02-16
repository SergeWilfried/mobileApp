import React, { useState, useCallback, useMemo } from 'react';
import { View, SafeAreaView, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import PhoneNumberInput from 'components/PhoneNumberInput';
import PhoneCard from 'components/PhoneCard';
import Button from 'components/Button';
import Text from 'components/Text';
import MainHeader from 'components/MainHeader';
import DismissKeyboard from 'components/DismissKeyboard';

import {
  MOBILE_MONEY_FLOW,
  SEND_FLOW,
  PHONE_OPERATORS,
} from 'helpers/constants';
import { getPhoneOperatorIcon } from 'helpers/phoneOperator.helper';
import { addPhoneNumber } from 'resources/wallet/wallet.actions';
import usePhoneNumber from 'hooks/usePhoneNumber';

import styles from './ChooseProvider.styles';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 30 : 0;

function ChooseProvider({ navigation, route }) {
  const [phoneOperator, setPhoneOperator] = useState({
    icon: 'Orange',
    title: 'Orange',
  });
  const { phoneflow } = route.params;
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    async (phoneNumber) => {
      await dispatch(
        addPhoneNumber({
          phoneNumber,
          phoneOperator: phoneOperator.icon,
        }),
      );

      return phoneflow === MOBILE_MONEY_FLOW.DEPOSIT
        ? navigation.navigate('ConfirmMobileDeposit')
        : navigation.navigate('ChooseContact', { sendFlow: SEND_FLOW.MOBILE });
    },
    [navigation, phoneOperator, MOBILE_MONEY_FLOW],
  );

  const {
    onChangePhone,
    onChangeFormattedPhone,
    phoneNumberInputRef,
    onContinue,
    phoneError,
    phoneNumber,
  } = usePhoneNumber(handleSubmit);

  const isButtonDisabled = useMemo(
    () => !!phoneError || !phoneOperator.title || !phoneNumber,
    [phoneError, phoneOperator.title, phoneNumber],
  );

  return (
    <DismissKeyboard keyboardAvoidingViewProps={{ keyboardVerticalOffset }}>
      <MainHeader
        title="Add New Number"
        subTitle="Choose your provider"
      />
      <SafeAreaView style={styles.screen}>
        <View>
          <View style={styles.cardsContainer}>
            {Object.keys(PHONE_OPERATORS).map((key) => (
              <PhoneCard
                providerName={PHONE_OPERATORS[key]}
                providerLogo={getPhoneOperatorIcon(PHONE_OPERATORS[key])}
                key={PHONE_OPERATORS[key]}
                isChoosed={phoneOperator.title === PHONE_OPERATORS[key]}
                setPhoneOperator={setPhoneOperator}
                chooseMobileOperator={() => {
                  setPhoneOperator({
                    icon: PHONE_OPERATORS[key],
                    title: PHONE_OPERATORS[key],
                  });
                }}
              />
            ))}
          </View>
          <Text style={styles.text}>
            Choose the number you will deposit from
          </Text>
          <View style={styles.input}>
            <PhoneNumberInput
              inputRef={phoneNumberInputRef}
              onChangePhone={onChangePhone}
              onChangeFormattedPhone={onChangeFormattedPhone}
              error={phoneError}
            />
          </View>
        </View>
        <View style={styles.button}>
          <Button
            style={styles.buttonConfirm}
            title="Continue"
            disabled={isButtonDisabled}
            onPress={onContinue}
          />
        </View>
      </SafeAreaView>
    </DismissKeyboard>
  );
}

ChooseProvider.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      phoneflow: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ChooseProvider;
