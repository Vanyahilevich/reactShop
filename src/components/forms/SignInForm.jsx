import React from 'react';
import {useFormik} from 'formik';
import {Button, CircularProgress} from "@mui/material";
import UserField from "./UserField";
import validateSignIn from "./validateSignIn";
import st from "../signInForm.module.css"
import GoogleButtonSignIn from "../GoogleButton/GoogleButtonSignIn";

const SignInForm = ({onSubmit, state}) => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: validateSignIn,
    onSubmit: onSubmit,
  });
  const setValuesFormik = (email) => {
    formik.initialValues.email = email
    formik.validateField()

  }

  return (
    <form className={st.formContainer} onSubmit={formik.handleSubmit}>
      <UserField
        name="email"
        label="Email"
        formik={formik}
        fullWidth
      />
      <UserField
        name="password"
        label="Password"
        formik={formik}
        type="password"
        fullWidth
      />
      <Button
        color="primary"
        variant="contained"
        fullWidth
        style={{margin: '20px 0 10px'}}
        type="submit"
        disabled={state.loading}
        endIcon={
          state.loading
            ? <CircularProgress
              color="inherit" size='18px' style={{padding: "0px 10px"}}/>
            : null}

      >
        Submit
      </Button>

      <GoogleButtonSignIn setValuesFormik={setValuesFormik} title={"Sign in with Google"}/>

    </form>
  );
};

export default SignInForm
