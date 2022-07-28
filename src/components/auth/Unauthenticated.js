import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Typography, Container, Box } from '@mui/material';
// components
import Page from '../Page';
import { useAuth } from '../../hooks/useAuth';

const UnauthenticatedStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

export default function Unauthenticated() {
  const user = useAuth();
  const navigate = useNavigate();

  if (user) {
    navigate('/dashboard/app', { replace: true });
    return;
  }

  return (
    <Page title="Unauthenticated">
      <Container>
        <UnauthenticatedStyle sx={{ textAlign: 'center', alignItems: 'center' }}>
          <Typography variant="subtitle6" > Sorry, you are not authenticated yet!
          </Typography>

          <Typography sx={{ color: 'text.secondary' }}>
             Please proceed to Login
          </Typography>

          <Box
            component="img"
            src="/static/illustrations/illustration_403.png"
            sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
          />

          <Button to="/login" size="large" variant="contained" component={RouterLink}>
            Go to Login
          </Button>
        </UnauthenticatedStyle>
      </Container>
    </Page>
  );
}
