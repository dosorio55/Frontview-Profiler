import { Button, TextField } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';

const StyledTextField = styled(TextField)(({
    backgroundColor: '#fafafa'
}));

const Login = ({ handleLoginForm, loginForm, loading }) => {
    return (
        <>
            <StyledTextField
                id="outlined-required"
                name='email'
                label="email"
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
            <Button size="large" variant="contained" type='submit' disabled={loading}>Login</Button>
        </>
    )
}

export default Login