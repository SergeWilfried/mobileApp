import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import { useFormik } from 'formik';

import AuthHeader from 'components/AuthHeader';
import AuthHeaderLayout from 'components/AuthHeaderLayout';
import Button from 'components/Button';
import Input from 'components/Input';
import Text from 'components/Text';
import SocialButtons from 'components/SocialButtons';
import ProgressBar from 'components/ProgressBar';
import { PASSWORD } from 'helpers/constants';
import { SignUpSchema } from 'helpers/schemas';
import { checkEmail } from 'resources/user/user.api';
import { ApiError } from 'helpers/api';

import styles from './CreateAccount.styles';

const initialValues = {
  email: '',
  username: '',
  password: '',
};

function CreateAccount({ navigation, route }) {
  const { verificationToken } = route.params;

  const onSubmit = useCallback((userData) => {
    navigation.navigate(
      'PinCodeChoose',
      {
        user: { ...userData, verificationToken },
      },
    );
  }, [navigation, verificationToken]);

  const {
    values,
    handleBlur,
    handleChange,
    errors,
    touched,
    isValid,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
    setFieldError,
  } = useFormik({
    onSubmit,
    initialValues,
    validateOnMount: true,
    validationSchema: SignUpSchema,
  });

  const handleEmailChange = useCallback((value) => {
    setFieldTouched('email', false);
    setFieldValue('email', value);
  }, [setFieldValue, setFieldTouched]);

  const handleEmailBlur = useCallback(async () => {
    try {
      await checkEmail(values.email);
      setFieldTouched('email', true);
    } catch (error) {
      if (error instanceof ApiError) {
        setFieldError('email', error.data.email);
        setFieldTouched('email', true, false);
      }
    }
  }, [values, setFieldTouched, setFieldError]);

  const handlePasswordChange = useCallback((value) => {
    setFieldTouched('password', false);
    setFieldValue('password', value);
  }, [setFieldValue, setFieldTouched]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.screen}>
        <AuthHeaderLayout style={styles.authHeaderLayout}>
          <ProgressBar currentStep={2} totalSteps={3} />
          <AuthHeader
            title="Create an Account"
            subtitle="Enter your email, choose a DuniaPay username and create a password"
          />
        </AuthHeaderLayout>
        <View style={styles.wrapperInput}>
          <Input
            label="Email address"
            value={values.email}
            onChangeText={handleEmailChange}
            onBlur={handleEmailBlur}
            errorMessage={touched.email ? errors.email : ''}
          />
          <Input
            label="Username"
            labelStyle={styles.passwordInput}
            value={values.username}
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            errorMessage={touched.username ? errors.username : ''}
          />
          <Input
            labelStyle={styles.passwordInput}
            label="Password"
            value={values.password}
            onChangeText={handlePasswordChange}
            textContentType="password"
            onBlur={handleBlur('password')}
            errorMessage={touched.password ? errors.password : ''}
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
        </View>
        <View style={styles.wrapperButton}>
          <SocialButtons title="or sign up with your social account" />
          <Button
            disabled={!isValid}
            title="Sign up"
            onPress={handleSubmit}
          />
        </View>
      </View>
    </ScrollView>
  );
}

CreateAccount.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      verificationToken: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CreateAccount;
