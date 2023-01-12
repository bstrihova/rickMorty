import React from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function SignIn({ setLoggedIn }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData = {
            email: data.get('email'),
            password: data.get('password'),
        };
        localStorage.setItem('token-info', JSON.stringify(userData));
        setLoggedIn(true);
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
                gap: 2,
                maxWidth: '350px',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: '16px',
                paddingRight: '16px',
            }}
            flexDirection="column"
        >
            <LockOutlinedIcon />
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    type="email"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2 }}
                >
                    Sign in
                </Button>
            </Box>
        </Box>
    );
}

export default SignIn;
