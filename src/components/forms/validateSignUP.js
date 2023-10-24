import * as yup from "yup";

export default yup.object({
  username: yup
    .string('Enter your name')
    .min(2,"Имя должно содержать более 2 букв")
    .max(50,"Имя должно содержать менее 50 букв")
    .required('Name is required'),
  surname: yup
    .string('Enter your surname')
    .min(2,"Имя должно содержать более 2 букв")
    .max(50,"Имя должно содержать менее 50 букв")
    .required('Surname is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(2, 'Пароль должен содержать минимум 8 символов')
    .max(50, 'Пароль должен содержать максимум 50 символов')
    .matches(/[a-zA-Z]/, 'Пароль должен содержать хотя бы одну букву')
    .matches(/[0-9]/, 'Пароль должен содержать хотя бы одну цифру')
    .required('Пароль обязателен для заполнения'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Пароли должны совпадать")
    .required('Подтверждение пароля обязательно'),
  agreement: yup
    .boolean()
    .oneOf([true], 'You must agree to the terms')
    .required('You must agree to the terms')
});
