import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, View } from 'react-native';
import { useFormik } from 'formik';

import AuthHeader from 'components/AuthHeader';
import AuthHeaderLayout from 'components/AuthHeaderLayout';
import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';
import DismissKeyboard from 'components/DismissKeyboard';
import Input from 'components/Input';
import Text from 'components/Text';
import { SignInSchema } from 'helpers/schemas';

import GoogleIcon from 'assets/icons/google.svg';
import FacebookIcon from 'assets/icons/facebook.svg';

import styles from './SignIn.styles';

const initialValues = {
  email: '',
  password: '',
};

function SignIn({ navigation }) {
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
  } = useFormik({
    onSubmit: () => {},
    initialValues,
    validateOnMount: true,
    validationSchema: SignInSchema,
  });

  const handleEmailChange = useCallback(
    (value) => {
      setFieldTouched('email', false);
      setFieldValue('email', value);
    },
    [setFieldValue, setFieldTouched],
  );

  const navigateToResetPassword = useCallback(() => {
    navigation.navigate('ForgotPassword');
  }, [navigation]);

  const handleGoogleSignIn = useCallback(() => {}, []);
  const handleFacebookSignIn = useCallback(() => {}, []);

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.screenWrapper}>
        <View style={styles.screen}>
          <AuthHeaderLayout>
            <AuthHeader
              withLogo
              title="Welcome Back!"
              subtitle="Enter your email address and password to sign in"
            />
          </AuthHeaderLayout>
          <View style={styles.wrapperInput}>
            <Input
              label="Email address"
              value={values.email}
              onChangeText={handleEmailChange}
              onBlur={handleBlur('email')}
              errorMessage={touched.email ? errors.email : ''}
            />
            <Input
              labelStyle={styles.passwordInput}
              label="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              textContentType="password"
              onBlur={handleBlur('password')}
              errorMessage={touched.password ? errors.password : ''}
            />
          </View>
          <View style={styles.forgotWrapper}>
            <Text style={styles.forgotText}>Forgot password? </Text>
            <ButtonLink
              textStyle={styles.forgotLink}
              title="Reset it"
              onPress={navigateToResetPassword}
            />
          </View>
          <View style={styles.wrapperButton}>
            <View style={styles.socialWrapper}>
              <Text style={styles.socialText}>
                or sign in with your social account
              </Text>
              <View style={styles.socialButtonsWrapper}>
                <Button
                  style={styles.socialButton}
                  icon={GoogleIcon}
                  type="social"
                  onPress={handleGoogleSignIn}
                />
                <Button
                  icon={FacebookIcon}
                  type="social"
                  onPress={handleFacebookSignIn}
                />
              </View>
            </View>
            <Button
              disabled={!isValid}
              title="Sign in"
              onPress={handleSubmit}
            />
          </View>
        </View>
      </SafeAreaView>
    </DismissKeyboard>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignIn;
