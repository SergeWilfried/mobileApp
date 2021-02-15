import React, { useCallback, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import MainHeader from 'components/MainHeader';
import Button from 'components/Button';
import Input from 'components/Input';
import Text from 'components/Text';
import FullScreenLoader from 'components/FullScreenLoader';
import { CreateNewPasswordSchema } from 'helpers/schemas';
import { PASSWORD, AUTH } from 'helpers/constants';
import { ApiError } from 'helpers/api';
import * as userActions from 'resources/user/user.actions';
import * as userApi from 'resources/user/user.api';

import styles from './CreateNewPassword.styles';

const initialValues = {
  password: '',
  repeatPassword: '',
  currentPassword: '',
};

function CreateNewPassword({ navigation }) {
  const [isLoading, setLoading] = useState(false);

  const {
    values,
    setFieldTouched,
    setFieldValue,
    isValid,
    errors,
    touched,
    handleBlur,
    handleSubmit,
  } = useFormik({
    onSubmit: async (data, { setErrors }) => {
      try {
        setLoading(true);
        await userApi.createNewPassword({
          currentPassword: data.currentPassword,
          newPassword: data.password,
        }),
          setLoading(false);
        navigation.navigate('PinCodeReset', {
          withLogo: false,
          showProgressBar: false,
          pinFlow: AUTH.RESET,
        });
      } catch (e) {
        setErrors(e.data);
        setLoading(false);
      }
    },
    validateOnMount: true,
    validationSchema: CreateNewPasswordSchema,
    initialValues,
  });

  const handleChangePassword = useCallback(
    (value) => {
      setFieldValue('password', value);
      setFieldTouched('password', false);
    },
    [setFieldValue, setFieldTouched],
  );

  const handleChangeRepeatPassword = useCallback(
    (value) => {
      setFieldValue('repeatPassword', value);
      setFieldTouched('repeatPassword', false);
    },
    [setFieldValue, setFieldTouched],
  );

  const handleChangeCurrentPassword = useCallback(
    (value) => {
      setFieldValue('currentPassword', value);
      setFieldTouched('currentPassword', false);
    },
    [setFieldValue, setFieldTouched],
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.screen}>
        {isLoading && <FullScreenLoader />}
        <MainHeader
          title="Reset Password"
          subTitle="Enter you current password, then create a new one and repeat it"
        />
        <View style={styles.wrapperInput}>
          <Input
            label="Current Password"
            value={values.currentPassword}
            onChangeText={handleChangeCurrentPassword}
            textContentType="password"
            errorMessage={touched.currentPassword ? errors.currentPassword : ''}
            onBlur={handleBlur('currentPassword')}
          />
          <Input
            label="New password"
            value={values.password}
            onChangeText={handleChangePassword}
            textContentType="password"
            errorMessage={touched.password ? errors.password : ''}
            onBlur={handleBlur('password')}
          />
          <View style={styles.passwordRulesWrapper}>
            <Text style={styles.passwordRule}>
              1. At least {PASSWORD.length} characters long
            </Text>
            <Text style={styles.passwordRule}>
              2. Include at least one special characters (@ $ & %)
            </Text>
            <Text style={styles.passwordRule}>
              3. Include at least one uppercase letter
            </Text>
          </View>
          <Input
            label="Repeat new password"
            value={values.repeatPassword}
            onChangeText={handleChangeRepeatPassword}
            textContentType="password"
            onBlur={handleBlur('repeatPassword')}
            errorMessage={touched.repeatPassword ? errors.repeatPassword : ''}
          />
        </View>
        <View style={styles.wrapperButton}>
          <Button disabled={!isValid} title="Next" onPress={handleSubmit} />
        </View>
      </View>
    </ScrollView>
  );
}

CreateNewPassword.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default CreateNewPassword;
