import * as Yup from 'yup';
import { PASSWORD } from './constants';

export const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .trim()
    .required('Password is required!')
    .min(PASSWORD.length, 'Enter correct password due to rules')
    .matches(PASSWORD.regExp, 'Enter correct password due to rules'),
  repeatPassword: Yup.string()
    .trim()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Please, enter a correct email!')
    .required('Email is required!'),
  password: Yup.string().trim().required('Password is required!'),
});

export const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email('Please, enter a correct email!')
    .required('Email is required!'),
  username: Yup.string()
    .trim()
    .required('Username is required!')
    .max(255, 'Username too long'),
  password: Yup.string()
    .trim()
    .required('Password is required!')
    .min(PASSWORD.length, 'Enter correct password due to rules')
    .matches(PASSWORD.regExp, 'Enter correct password due to rules'),
});

export const PersonalInfoSchema = Yup.object().shape({
  firstName: Yup.string().trim(),
  lastName: Yup.string().trim(),
  email: Yup.string().email('Please, enter a correct email!'),
  birthDate: Yup.date().default(() => new Date()),
  phoneNumber: Yup.string(),
  country: Yup.string(),
});
