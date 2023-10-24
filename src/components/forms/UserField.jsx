import React from 'react';
import {TextField} from "@mui/material";

const UserField = React.memo((props) => {
  const {label, name, formik} = props
  return (
    <TextField
      {...props}
      label={label}
      name={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[name] && !!formik.errors[name]}
      helperText={formik.touched[name] && formik.errors[name]}
      margin="normal"
    />

  )
});

export default UserField;
