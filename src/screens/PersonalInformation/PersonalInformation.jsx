import React, { useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import {
  View,
  ScrollView,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

import { PersonalInfoSchema } from 'helpers/schemas';
import { ApiError } from 'helpers/api';

import Text from 'components/Text';
import Input from 'components/Input';
import MainHeader from 'components/MainHeader';
import PhoneNumberInput from 'components/PhoneNumberInput';
import Button from 'components/Button';
import FullScreenLoader from 'components/FullScreenLoader';
import SelectCountries from 'components/SelectCountries';
import DatePickerInput from 'components/DatePickerInput';

import styles from './PersonalInformation.styles';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  birthDay: '',
  phoneNumber: '',
  country: '',
};

function PersonalInformation() {
  const [isLoading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();
  const phoneNumberInputRef = useRef();

  const onSafeSubmit = useCallback(async (data, { setErrors }) => {
    try {
      setLoading(true);
      // await userApi.updateUserInfo(data);
    } catch (e) {
      if (e instanceof ApiError) {
        setErrors(e.data);
      } else {
        throw e;
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const {
    values,
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    handleSubmit,
    isValid,
    handleChange,
    handleBlur,
  } = useFormik({
    onSubmit: onSafeSubmit,
    validationSchema: PersonalInfoSchema,
    initialValues,
    validateOnMount: true,
  });

  const onChangeFormattedPhone = useCallback(
    async (text) => {
      setPhoneError('');
      await setFieldValue('phoneNumber', text);
    },
    [setFieldTouched, setFieldValue],
  );

  const onBlurPhone = useCallback(() => {
    const isValidPhone = phoneNumberInputRef.current?.isValidNumber(
      phoneNumber,
    );
    if (!isValidPhone && phoneNumber) {
      setPhoneError('Phone number is invalid');
    }
  }, [values.phoneNumber, phoneNumber]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={30}
        style={styles.wrapper}
      >
        {isLoading && <FullScreenLoader />}
        <ScrollView
          style={styles.wrapper}
          contentContainerStyle={styles.container}
        >
          <View style={styles.wrapper}>
            <MainHeader title="Personal Information" />
            <View style={styles.content}>
              <View style={styles.inputWrapper}>
                <Input
                  label="First Name"
                  name="firstName"
                  value={values.firstName}
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  errorMessage={touched.firstName ? errors.firstName : ''}
                  inputLabelWrapper={styles.input}
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  value={values.lastName}
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  errorMessage={touched.lastName ? errors.lastName : ''}
                  inputLabelWrapper={styles.input}
                />
                <Input
                  name="email"
                  label="Email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  errorMessage={touched.email ? errors.email : ''}
                  inputLabelWrapper={styles.input}
                />
                <SelectCountries
                  name="country"
                  selectedCountry={values.country}
                  style={styles.input}
                  onChange={handleChange('country')}
                />
                <Text style={styles.label}>Phone Number</Text>
                <PhoneNumberInput
                  name="phoneNumber"
                  inputRef={phoneNumberInputRef}
                  onChangePhone={setPhoneNumber}
                  onChangeFormattedPhone={onChangeFormattedPhone}
                  onBlur={onBlurPhone}
                  error={phoneError}
                />
                <DatePickerInput
                  label="Birth Date"
                  value={values.birthDay}
                  onChange={handleChange('birthDay')}
                  minDate={new Date(1930, 1)}
                  placeholder="Select a date"
                />
              </View>
              <Button
                title="Save Changes"
                onPress={handleSubmit}
                style={styles.button}
                disabled={!isValid || Boolean(phoneError)}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

PersonalInformation.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default PersonalInformation;
