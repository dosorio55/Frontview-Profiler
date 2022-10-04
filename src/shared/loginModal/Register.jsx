import { Button, TextField } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const StyledTextField = styled(TextField)(({
    backgroundColor: '#fafafa'
}));

const Register = ({handleLoginForm, loginForm }) => {
    return (
        <>
            <StyledTextField
                id="outlined-required"
                name='email'
                label="email"
                multiline
                onChange={handleLoginForm}
                value={loginForm.email}
            />
            <StyledTextField
                id="outlined-password-input"
                label="Password"
                name='password'
                type="password"
                onChange={handleLoginForm}
                value={loginForm.password}
            />
            <StyledTextField
                id="confirm-password"
                label="confirm-password"
                name='confirm-password'
                type="password"
                onChange={handleLoginForm}
                value={loginForm.confirmPassword}
            />

            <Button size="large" variant="contained" >Next</Button>
            <Button size="large" variant="contained" type='submit'>Register</Button>
        </>
    )
}

export default Register