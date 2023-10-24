import * as yup from "yup";

export default yup.object({

  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(2, 'Пароль должен содержать минимум 8 символов')
    .matches(/[a-zA-Z]/, 'Пароль должен содержать хотя бы одну букву')
    .matches(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру')
    .required('Пароль обязателен для заполнения'),
});
