import React from 'react';
import {Checkbox, FormControl, FormControlLabel, Radio, RadioGroup, Switch} from "@mui/material";
import {withStyles} from "@mui/styles";


const SizeRadioGroup = ({size, setSize, result}) => {

  return (
    <FormControl component="fieldset">
      <RadioGroup
        row
        aria-label="radio-group"
        name="radio-group"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
          {result && result.map(size => {
            if (size.count === 0) return
            return (
              <FormControlLabel
                key={size.size}
                value={size.size}
                control={<Radio size="small"/>}
                label={size.size}
                disabled={!size.count}
                labelPlacement="end"
                size="small"
              />
            )
          })}
      </RadioGroup>
    </FormControl>
  );
};

export default SizeRadioGroup;
