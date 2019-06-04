import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
export {Button}; 

export const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
}) => (
        <TextField
            label={label}
            errorText={touched && error}
            margin="normal"
            variant="outlined"
            {...input}
            {...custom}
        />
    );