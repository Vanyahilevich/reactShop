import React, {useEffect} from 'react';
import {GoogleLogin} from "react-google-login";
import {gapi} from "gapi-script"
import st from "./googleButton.module.css"
const GoogleButtonSignUp = (props) => {
  const clientId = "759255864066-k5undthpvb18m3fb8g6qmr80l65bvl95.apps.googleusercontent.com"
  const responseGoogle = (response) => {
    console.log(response.profileObj);
    const {email,  givenName, familyName, imageUrl} =response.profileObj
    props.setValuesFormik(email, givenName, familyName,imageUrl)
  };

  useEffect(()=> {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      })
    })
  })
  // const accessToken = gapi.auth.getToken().access_token
  return (
    <GoogleLogin
      className={st.btn}
      clientId={clientId}
      buttonText={props.title}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleButtonSignUp;
