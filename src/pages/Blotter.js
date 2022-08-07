import { Link as RouterLink } from 'react-router-dom';
// material
import { Container, Typography, Stack, Grid, Button } from '@mui/material';
// components
import Page from '../components/Page';

import Iconify from '../components/Iconify';
import { BlotterCard } from '../sections/@dashboard/blotter';

import { useAuth } from '../hooks/useAuth';
// ----------------------------------------------------------------------

export default function Blotter() {
  const user = useAuth();
  return (
    <Page title="Blotter">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Blotter
          </Typography>
          {user && (
            <Button
              variant="contained"
              component={RouterLink}
              to="/dashboard/blotterForm"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              Add Blotter
            </Button>
          )}
        </Stack>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8} md={3}>
            <BlotterCard title="Solved" url="/dashboard/bo" icon={'clarity:document-solid'} />
          </Grid>
          <Grid item xs={12} sm={8} md={3}>
            <BlotterCard title="Unsolved" url="/dashboard/bo" icon={'clarity:document-solid'} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
