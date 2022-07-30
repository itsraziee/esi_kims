import { Link as RouterLink } from 'react-router-dom';
import React from 'react'
import { Container, Typography, Button, Stack } from '@mui/material';
import Page from '../components/Page';
import Iconify from '../components/Iconify';




export default function BlotterResolved() {
  return (
    <Page title="Blotter">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Solved Case
          </Typography>
          
            <Button
              variant="contained"
              component={RouterLink}
              to="/dashboard/blotterResolvedForm"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              Add solved 
            </Button>
          
        </Stack>

        
      </Container>
    </Page>

  )
  }
  

