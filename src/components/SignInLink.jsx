import React from 'react';
import LoginIcon from "@mui/icons-material/Login";
import UserLink from "./UserLink";

const SignInLink = () => {
  return (
    <UserLink
      title="Log in"
      link="/signin">
      <LoginIcon/>
    </UserLink>
  );
};

export default SignInLink;
