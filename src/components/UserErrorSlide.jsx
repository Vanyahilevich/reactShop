import React from 'react';
import {Alert, AlertTitle, Slide} from "@mui/material";

const UserErrorSlide = ({classname, state, onClose, title, subTitle}) => {
  return (
    <Slide className={classname} direction="down" in={state.error} mountOnEnter unmountOnExit>
      <Alert
        severity="error"
        onClose={onClose}>
        <AlertTitle>
          {title}
        </AlertTitle>
        {subTitle}
      </Alert>
    </Slide>
  );
};

export default UserErrorSlide;
