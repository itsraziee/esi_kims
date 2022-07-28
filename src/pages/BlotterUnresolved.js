import { Link as RouterLink } from 'react-router-dom';
import React from 'react'
import { Container, Typography, Button, Stack } from '@mui/material';
import Page from '../components/Page';
import Iconify from '../components/Iconify';




export default function BlotterUnresolved() {
  return (
    <Page title="Blotter">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Unresolved Case
          </Typography>
          
            <Button
              variant="contained"
              component={RouterLink}
              to="/dashboard/blotterUnresolvedForm"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              Add Unresolved 
            </Button>
          
        </Stack>

        
      </Container>
    </Page>

  )
  }
  

