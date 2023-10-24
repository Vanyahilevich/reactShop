import React from 'react';
import {useFormik} from 'formik';
import {Button, CircularProgress,} from "@mui/material";
import UserField from "./UserField";
import validateSignUP from "./validateSignUP";
import UserCheckbox from "./UserCheckbox";

import st from '../signUpForm.module.css'
import GoogleButtonSignUp from "../GoogleButton/GoogleButtonSignUp";

const SignUpForm = ({onSubmit, state}) => {

  let formik = useFormik({
    initialValues: {
      username: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: '',
      imageURL: "",
      agreement: false,
    },
    validateOnBlur:false,
    validateOnChange:false,
    validationSchema: validateSignUP,
    onSubmit: onSubmit,
  });
  const setValuesFormik = (email, username, surname, imageURL) => {
    formik.initialValues.email = email
    formik.initialValues.username = username
    formik.initialValues.surname = surname
    formik.initialValues.imageURL = imageURL
    formik.validateField()

  }
  return (
    <form className={st.formContainer} onSubmit={formik.handleSubmit}>
      <UserField
        label="Username"
        name="username"
        formik={formik}
        fullWidth
      />
      <UserField
        label="Surname"
        name="surname"
        formik={formik}
        fullWidth
      />
      <UserField
        label="Email"
        name="email"
        formik={formik}
        fullWidth
      />
      <UserField
        label="Password"
        name="password"
        formik={formik}
        fullWidth
        type="password"
      />
      <UserField
        label="Confirm password"
        name="confirmPassword"
        formik={formik}
        fullWidth
        type="password"
      />
      <UserCheckbox
        label="I agree to the terms"
        name="agreement"
        formik={formik}
        className = {st.checkbox}
      />
      <Button
        color="primary"
        variant="contained"
        fullWidth
        sx={{margin: '20px 0 20px'}}
        type="submit"
        disabled={state.loading}
        endIcon={state.loading
          ? <CircularProgress color='inherit' size='18px' style={{margin: "0px 10px"}}/>
          : null}

      >
        Submit
      </Button >

      <GoogleButtonSignUp  setValuesFormik = {setValuesFormik} title = {"Sign up with Google"}/>
    </form>
  )
    ;
};

export default SignUpForm
