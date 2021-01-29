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

import { MOBILE_MONEY_FLOW } from 'helpers/constants';
import { addPhoneNumber } from 'resources/wallet/wallet.actions';
import usePhoneNumber from 'hooks/usePhoneNumber';
import { getPhoneOperatorIcon } from 'helpers/phoneOperator.helper';

import styles from './ChooseProvider.styles';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 30 : 0;

const operators = [
  {
    icon: 'Mtn',
    title: 'Mtn',
  },
  {
    icon: 'Airtel',
    title: 'Airtel',
  },
  {
    icon: 'Etisalat',
    title: 'Etisalat',
  },
  {
    icon: 'Orange',
    title: 'Orange',
  },
  {
    icon: 'Safaricom',
    title: 'Safaricom',
  },
  {
    icon: 'Vodacom',
    title: 'Vodacom',
  },
];

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
        : navigation.navigate('SendMobileMoney');
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
        title="Mobile Money Top up"
        subTitle="Choose your provider"
        navigation={navigation}
      />
      <SafeAreaView style={styles.screen}>
        <View>
          <View style={styles.cardsContainer}>
            {operators.map(({ title, icon }) => (
              <PhoneCard
                providerName={title}
                providerLogo={getPhoneOperatorIcon(icon)}
                key={title}
                isChoosed={phoneOperator.title === title}
                setPhoneOperator={setPhoneOperator}
                chooseMobileOperator={() => {
                  setPhoneOperator({ icon, title });
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
