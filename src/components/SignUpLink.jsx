import React from 'react';
import UserLink from "./UserLink";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

const SignUpLink = () => {
  return (
    <UserLink
      title="Sign up"
      link="/signup">
      <ModeEditOutlineIcon/>
    </UserLink>
  );
};

export default SignUpLink;
