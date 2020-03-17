import React from 'react';
import TextField from '@material-ui/core/TextField';


let CustomInput = ({ label, rows, type, input, multiline, className }) => (
  <div>
    <TextField 
      label={label}
      type={type}
      multiline={multiline}
      rows={rows}
      className={className}
      {...input}
    />
  </div>
  
);

export default CustomInput;