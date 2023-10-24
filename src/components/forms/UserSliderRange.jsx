import React from 'react';
import {Box, Slider, Typography} from "@mui/material";

const UserSliderRange = ({price,setPrice}) => {
  const minDistance = 15
  if(price[0] > price[1]){
    setPrice([price[1], price[0]])
  }
  const handleChangePrice = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setPrice([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setPrice([clamped - minDistance, clamped]);
      }
    } else {
      setPrice(newValue);
    }
  };
  return (
    <Box pt={3} mr={3}>
      <Slider
        mr={2}
        sx={{
          width: "250px",
          marginRight: "16px"
        }}
        label="price"
        valueLabelDisplay="auto"
        value={price}
        onChange={handleChangePrice}
        min={0}
        max={100}
        disableSwap
      />
      <Typography
        sx={{
          width: "120px",
          marginRight: "16px",
          color: "grey"
        }}
        variant="body2"
      >Price: {price[0]} - {price[1]}</Typography>
    </Box>
  );
};

export default UserSliderRange;
