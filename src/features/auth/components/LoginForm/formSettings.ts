import * as Yup from 'yup';
import { Login } from 'models/auth';

export const initValues: Login = { email: '', password: '' };

export const loginFormSchema: Yup.Schema<Login> = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is a required field'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .required('Password is a required field'),
});
