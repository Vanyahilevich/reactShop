import React from 'react';
import {Box, IconButton, Tooltip, Typography} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const Counter = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: "center"
      }}>
      <Tooltip title="remove product">
        <Box>
          <IconButton
            aria-label="delete"
            disabled={props.count === 1}
            onClick={props.minusCount}
          >
            <RemoveIcon/>
          </IconButton>
        </Box>
      </Tooltip>
      <Typography
        sx={{
          width: "50px",
          padding: "0px 8px",
          textAlign: "center"

        }}
      >{props.count}</Typography>
      <Tooltip title="add product">
        <IconButton
          aria-label="plus"
          onClick={props.plusCount}
        >
          <AddIcon/>
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default Counter;
