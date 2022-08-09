import { Link as RouterLink } from 'react-router-dom';
// material
import { Container, Typography, Stack, Grid, Button } from '@mui/material';
// components
import Page from '../components/Page';

import Iconify from '../components/Iconify';
import { LegislativeCard } from '../sections/@dashboard/legislative';

import { useAuth } from '../hooks/useAuth';
// ----------------------------------------------------------------------

export default function Legislative() {
  const user = useAuth();
  return (
    <Page title="Legislative">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Legislative
          </Typography>
          {user && (
            <Button
              variant="contained"
              component={RouterLink}
              to="/dashboard/legislativeForm"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              Add Legislative
            </Button>
          )}
        </Stack>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8} md={3}>
            <LegislativeCard title="Ordinance No. 123" url="/dashboard/bo" icon={'clarity:document-solid'} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
