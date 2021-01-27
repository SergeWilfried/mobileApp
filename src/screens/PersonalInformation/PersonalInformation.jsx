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
  birthDay: new Date(2000, 1),
  phoneNumber: '',
  country: 'Nigeria',
};

function PersonalInformation({ navigation }) {
  const [isLoading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState('');

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
  } = useFormik({
    onSubmit: onSafeSubmit,
    validationSchema: PersonalInfoSchema,
    initialValues,
    validateOnMount: true,
  });

  const [phoneNumber, setPhoneNumber] = useState();
  const phoneNumberInputRef = useRef();

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

  const handleChange = useCallback(
    async (fieldName, value) => {
      await setFieldTouched(fieldName, false);
      await setFieldValue(fieldName, value.trim());
    },
    [setFieldValue, setFieldTouched],
  );

  const handleBlur = useCallback(
    (fieldName) => setFieldTouched(fieldName, true),
    [setFieldTouched],
  );

  return (
    <SafeAreaView style={styles.wrapper}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
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
                  onChangeText={(val) => handleChange('firstName', val)}
                  onBlur={() => handleBlur('firstName')}
                  errorMessage={touched.firstName ? errors.firstName : ''}
                  inputLabelWrapper={styles.input}
                />
                <Input
                  label="Last Name"
                  name="lastName"
                  value={values.lastName}
                  onChangeText={(val) => handleChange('lastName', val)}
                  onBlur={() => handleBlur('lastName')}
                  errorMessage={touched.lastName ? errors.lastName : ''}
                  inputLabelWrapper={styles.input}
                />
                <Input
                  name="email"
                  label="Email"
                  value={values.email}
                  onChangeText={(val) => handleChange('email', val)}
                  onBlur={() => handleBlur('email')}
                  errorMessage={touched.email ? errors.email : ''}
                  inputLabelWrapper={styles.input}
                />
                <SelectCountries
                  name="country"
                  selectedCountry={values.country}
                  style={styles.input}
                  onChange={(val) => handleChange('country', val)}
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
                <Text style={styles.label}>Birth Date</Text>
                <DatePickerInput
                  initialValue={initialValues.birthDay}
                  onChange={(val) => {
                    handleChange('birthDay', val);
                  }}
                  maxDate={new Date()}
                  minDate={new Date(1930, 1)}
                  placeholder="Dec 24, 2000"
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
