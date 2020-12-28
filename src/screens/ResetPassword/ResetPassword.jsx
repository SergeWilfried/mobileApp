import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import AuthHeader from 'components/AuthHeader';
import AuthHeaderLayout from 'components/AuthHeaderLayout';
import HeaderWithBackArrow from 'components/HeaderWithBackArrow';
import Button from 'components/Button';
import Input from 'components/Input';
import Text from 'components/Text';
import FullScreenLoader from 'components/FullScreenLoader';
import { ResetPasswordSchema } from 'helpers/schemas';
import { PASSWORD } from 'helpers/constants';
import * as userApi from 'resources/user/user.api';
import * as userActions from 'resources/user/user.actions';

import styles from './ResetPassword.styles';

const initialValues = {
  password: '',
  repeatPassword: '',
};

function ResetPassword({ navigation, route }) {
  const [isLoading, setLoading] = useState(false);
  const { verificationToken } = route.params;

  const dispatch = useDispatch();

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
    onSubmit: async (data) => {
      setLoading(true);
      await userApi.resetPassword({
        password: data.password,
        verificationToken,
      });
      setLoading(false);

      dispatch(userActions.setUserAuthenticated());
    },
    validateOnMount: true,
    validationSchema: ResetPasswordSchema,
    initialValues,
  });
  const onBackNavigation = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

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

  return (
    <View style={styles.screen}>
      {isLoading && <FullScreenLoader />}
      <AuthHeaderLayout>
        <HeaderWithBackArrow onBackNavigation={onBackNavigation}>
          <AuthHeader
            withLogo
            title="Reset Password"
            subtitle="Enter your new secure password to proceed with the rest"
          />
        </HeaderWithBackArrow>
      </AuthHeaderLayout>
      <View style={styles.wrapperInput}>
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
            1. At least
            {' '}
            {PASSWORD.length}
            {' '}
            characters long
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
          errorMessage={
                touched.repeatPassword ? errors.repeatPassword : ''
              }
        />
      </View>
      <View style={styles.wrapperButton}>
        <Button
          disabled={!isValid}
          title="Reset Password"
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
}

ResetPassword.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      verificationToken: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ResetPassword;
