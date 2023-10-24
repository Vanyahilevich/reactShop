import React from 'react';
import {CircularProgress} from "@mui/material";

const LoadingFullWindow = () => {
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <CircularProgress
        sx={{
          color: "black",
        }}
        size="70px"
      />
    </div>
  );
};

export default LoadingFullWindow;
