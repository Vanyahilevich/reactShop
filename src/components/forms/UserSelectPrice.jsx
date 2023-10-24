import React from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const UserSelectPrice = ({sort, setSort}) => {
  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };
  return (
    <FormControl size="small" sx={{width: "250px", marginRight: "16px"}}>
      <InputLabel id="sort">Цена</InputLabel>
      <Select
        labelId="sort"
        id="sort"
        value={sort}
        fullWidth
        label="sort"
        onChange={handleChangeSort}
      >
        <MenuItem value={1}>Сначала самые дешевые</MenuItem>
        <MenuItem value={-1}>Сначала самые дорогие</MenuItem>
      </Select>
    </FormControl>
  );
};

export default UserSelectPrice;
