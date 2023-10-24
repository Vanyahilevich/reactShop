import React, {useState} from 'react';
import {Typography} from "@mui/material";
import SignUpForm from "../../components/forms/SignUpForm";
import st from "./signUp.module.css"
import {useNavigate} from "react-router-dom";
import UserSuccessSlide from "../../components/UserSuccessSlide";
import UserErrorSlide from "../../components/UserErrorSlide";

const SignUpPage = () => {
  const [status, setStatus] = useState({
    error: false,
    loading: false,
    gone: false
  })
  const navigate = useNavigate()
  const onClose = () => {
    setStatus({...status, error: false,})
  }
  const onSubmit = async (values) => {
    try {
      setStatus({...status, loading: true})
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(values)
      })
      const data = await response.json()
      setStatus({...status, loading: false})
      if (data.error) {
        setStatus({...status, error: data.error})
        return
      }
      setStatus({...status, gone: true, error: false})
      setTimeout(() => {
        navigate("/signin")
      }, 2000)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className={st.pages}>
      <UserErrorSlide
        state={status}
        classname={st.alert}
        title="Error"
        subTitle="User with this email already exists."
        onClose={onClose}
      />
      <UserSuccessSlide
        state={status}
        classname={st.alert}
        title="Success"
        subTitle="User created successfully."
      />
      <Typography
        className={st.title}
        color='primary'
        variant='h2'>SIGN UP</Typography>
      <SignUpForm onSubmit={onSubmit} state={status}/>
    </div>

  );
};

export default SignUpPage;
