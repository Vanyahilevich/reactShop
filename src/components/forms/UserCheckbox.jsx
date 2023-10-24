import React from 'react';
import {Checkbox, FormControl, FormControlLabel, FormHelperText} from "@mui/material";

const UserCheckbox = React.memo((props) => {
  const {label, name, formik} = props
  console.log("checkbox")
  return (
    <FormControl error={!!formik.errors[name]} {...props}>
      <FormControlLabel
        label={label}
        control={
          <Checkbox
            name={name}
            value={formik.values[name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        }
      />
      <FormHelperText>
        {!!formik.touched[name] && formik.errors[name] ? "You must agree to the terms" : ""}
      </FormHelperText>
    </FormControl>
  )
});

export default UserCheckbox;
