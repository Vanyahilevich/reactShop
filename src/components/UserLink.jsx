import React from 'react';
import {Link, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

const UserLink = (props) => {
  return (
    <Link
      sx={{
        color: "white",
        transition: "all 0.3s ease-in-out",
        textDecoration: 'none',
        display: "flex",
        alignItems: "center",
        '&:visited': {
          color: "white"
        },
        '&:hover': {
          color: '#FAAD3A',
        },
      }}
      {...props}
      component={RouterLink}
      to={props.link}
    >
      {props.children}
      <Typography
        ml={1}
      >{props.title}</Typography>
    </Link>
  );
};

export default UserLink;
