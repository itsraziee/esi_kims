import { Link as RouterLink } from 'react-router-dom';
// material
import { Container, Typography, Stack, Grid, Button } from '@mui/material';
// components
import Page from '../components/Page';

import Iconify from '../components/Iconify';
import { SummonCard } from '../sections/@dashboard/summon';

import { useAuth } from '../hooks/useAuth';
// ----------------------------------------------------------------------

export default function Summon() {
  const user = useAuth();
  return (
    <Page title="Summon">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Summon
          </Typography>
          {user && (
            <Button
              variant="contained"
              component={RouterLink}
              to="/dashboard/summonForm"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              Add Summon
            </Button>
          )}
        </Stack>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8} md={3}>
            <SummonCard title="Solved" url="/dashboard/bo" icon={'clarity:document-solid'} />
          </Grid>
          <Grid item xs={12} sm={8} md={3}>
            <SummonCard title="Unsolved" url="/dashboard/bo" icon={'clarity:document-solid'} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
