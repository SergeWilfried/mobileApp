import React, { useState, useCallback, useRef, useEffect } from 'react';
import { View, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import PropTypes from 'prop-types';

import Text from 'components/Text';
import Button from 'components/Button';
import MainHeader from 'components/MainHeader';
import Card from 'components/Card';
import FullScreenLoader from 'components/FullScreenLoader';
import { processMoney } from 'helpers/utils.helper';

import RightIcon from './components/RightIcon';

import styles from './ConfirmDeposit.styles';

function ConfirmDeposit({
  children,
  title,
  subTitle,
  navigation,
  leftIcon,
  handleConfirm,
}) {
  const [isDisabled, setDisabled] = useState(true);
  const [isSubmitting, setSubmitting] = useState(false);
  const [amountMoney, onChangeAmountMoney] = useState('');
  const inputRef = useRef();
  const currency = '₣';

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const handleBack = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }, [navigation]);

  const onConfirm = useCallback(async () => {
    setSubmitting(true);
    const validAmount = parseInt(amountMoney.replace(/\D+/g, ''), 10);
    await handleConfirm(validAmount, amountMoney);
    setSubmitting(false);
  }, [amountMoney]);

  const handleChangeText = useCallback(
    (text) => {
      const processedMoney = processMoney(text);
      onChangeAmountMoney(processedMoney);
      setDisabled(!processedMoney);
    },
    [onChangeAmountMoney, setDisabled],
  );

  return (
    <>
      {isSubmitting && <FullScreenLoader />}
      <View style={styles.screen}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}
          style={styles.container}
          keyboardVerticalOffset={Platform.OS === 'android' ? 0 : 30}
        >
          <MainHeader
            title={title}
            subTitle={subTitle}
            navigation={navigation}
          />
          <View style={styles.contentWrapper}>
            <View style={styles.wrapperInput}>
              <Text style={[styles.inputText, styles.currency]}>
                {currency}
              </Text>
              <TextInput
                multiline={false}
                underlineColorAndroid="transparent"
                ref={inputRef}
                onChangeText={handleChangeText}
                value={amountMoney}
                blurOnSubmit={false}
                style={styles.inputText}
                keyboardType="numeric"
              />
            </View>
            <Text style={styles.subTitle}>
              Available balance: {currency} {amountMoney}
            </Text>
            <Card
              leftIcon={leftIcon}
              rightIcon={RightIcon}
              onCardClick={handleBack}
              cardStyle={styles.card}
            >
              {children}
            </Card>
            <Button
              onPress={onConfirm}
              style={styles.buttonConfirm}
              disabled={isDisabled}
              title="Confirm Top up"
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
}

ConfirmDeposit.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    canGoBack: PropTypes.func.isRequired,
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  leftIcon: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func,
};

ConfirmDeposit.defaultProps = {
  handleConfirm: () => {},
};

export default ConfirmDeposit;
