import React, {useState} from 'react';
import SignInForm from "../../components/forms/SignInForm";
import st from "./signIn.module.css"
import {Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import UserErrorSlide from "../../components/UserErrorSlide";
import {useDispatch, useSelector} from "react-redux";
import {update} from "../../features/profile/profileSlice";

const SignInPage = () => {
  const dispatch = useDispatch()
  const [status, setStatus] = useState({
    error: false,
    loading: false,
    gone: false
  })
  const onClose = () => {
    setStatus({...status, error: false})
  }
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    try {
      console.log(values)
      setStatus({...status, loading: true})
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(values)
      })
      const data = await response.json()
      console.log(data)
      setStatus({...status, loading: false})
      if (data.error) {
        setStatus({...status, error: data.error})
        return
      }
      dispatch(update(data))
      navigate("/")
    } catch (error) {
      console.error(error.message)
    }
  }
  return (
    <div className={st.pages}>
      <UserErrorSlide
        state={status}
        classname={st.alert}
        title="Error"
        subTitle="Wrote email or password"
        onClose={onClose}
      />
      <Typography
        className={st.title}
        color='primary'
        variant='h2'>SIGN UP</Typography>
      <SignInForm onSubmit={onSubmit} state={status}/>
    </div>
  );
};

export default SignInPage;
