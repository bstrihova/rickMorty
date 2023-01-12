import React, { Fragment } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';

function Layout({ loggedIn, children, setLoggedIn }) {
    return (
        <Fragment>
            <AppBar position="static">
                <Container maxWidth="false">
                    <Toolbar disableGutters>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            width="100%"
                        >
                            <Typography
                                variant="h5"
                                noWrap
                                component={Link}
                                to="/"
                                sx={{
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                R&M
                            </Typography>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                flexGrow={1}
                sx={{ p: 3 }}
                width="100%"
            >
                {children}
            </Box>
        </Fragment>
    );
}
export default Layout;
