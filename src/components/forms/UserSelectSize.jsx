import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const UserSelectSize = ({size, setSize}) => {

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };
  console.log("size", size)
  return (
    <FormControl
      size="small"
      sx={{
        minWidth: "100px",
        marginRight: "16px"
      }}>
      <InputLabel id="size">Size</InputLabel>
      <Select
        labelId="size"
        id="size"
        value={size}
        label="Size"
        onChange={handleChangeSize}
      >
        <MenuItem value={"XS"}>XS</MenuItem>
        <MenuItem value={"S"}>S</MenuItem>
        <MenuItem value={"M"}>M</MenuItem>
        <MenuItem value={"L"}>L</MenuItem>
        <MenuItem value={"XL"}>XL</MenuItem>
        <MenuItem value={"XXL"}>XXl</MenuItem>
      </Select>
    </FormControl>
  );
};

export default UserSelectSize;
