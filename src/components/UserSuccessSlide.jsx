import React from 'react';
import {Alert, AlertTitle, Slide} from "@mui/material";

const UserSuccessSlide = ({state, classname,title,subTitle}) => {
  return (
    <Slide className={classname} direction="down" in={state.gone} mountOnEnter unmountOnExit>
      <Alert
        severity="success">
        <AlertTitle>
          {title}
        </AlertTitle>
        {subTitle}
      </Alert>
    </Slide>
  );
};

export default UserSuccessSlide;
