import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';

import Text from 'components/Text';
import Button from 'components/Button';
import MainHeader from 'components/MainHeader';
import Card from 'components/Card';
import RightIcon from './components/RightIcon';

import styles from './ConfirmDeposit.styles';

const processMoney = (text) => {
  const onlyNumbers = text.replace(/[^\d]/g, '');
  const withoutLeadZeroes = onlyNumbers.replace(/^0+/, '');
  const max6numbers = withoutLeadZeroes.slice(0, 6);
  return max6numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

function ConfirmDeposit({
  children,
  amountMoney,
  onChangeAmountMoney,
  title,
  subTitle,
  navigation,
  leftIcon,
  handleConfirm,
}) {
  const [isDisabled, setDisabled] = useState(true);
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

  const handleChangeText = useCallback(
    (text) => {
      const processedMoney = processMoney(text);
      onChangeAmountMoney(processedMoney);
      setDisabled(!processedMoney);
    },
    [onChangeAmountMoney, setDisabled],
  );

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === 'android' ? 0 : 30}
      >
        <MainHeader title={title} subTitle={subTitle} navigation={navigation} />
        <View style={styles.wrapperInput}>
          <Text style={[styles.inputText, styles.currency]}>{currency}</Text>
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
          onPress={handleConfirm}
          style={styles.buttonConfirm}
          disabled={isDisabled}
          title="Confirm Top up"
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
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
  onChangeAmountMoney: PropTypes.func,
  amountMoney: PropTypes.string,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  leftIcon: PropTypes.func.isRequired,
  handleConfirm: PropTypes.func,
};

ConfirmDeposit.defaultProps = {
  amountMoney: '',
  onChangeAmountMoney: () => {},
  handleConfirm: () => {},
};

export default ConfirmDeposit;
