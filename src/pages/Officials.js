import { Link as RouterLink } from 'react-router-dom';
// material
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';

import Iconify from '../components/Iconify';
import { OfficialsWidget } from '../sections/@dashboard/officials';

import { useAuth } from '../hooks/useAuth';
import { useProfile } from '../hooks/useProfile';
// ----------------------------------------------------------------------

export default function Officials() {
  const user = useAuth();
  const profile = useProfile(user?.uid);
  return (
    <Page title="Officials">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Officials
          </Typography>
          {user && profile?.accountRole && profile?.accountRole !== 'Captain' && (
            <Button
              variant="contained"
              component={RouterLink}
              to="/dashboard/officialsProfile"
              startIcon={<Iconify icon="eva:plus-fill" />}
            >
              Add Official
            </Button>
          )}
        </Stack>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8} md={3}>
            <OfficialsWidget
              title="Barangay Officials"
              total={0}
              url="/dashboard/bo"
              icon={'fluent:people-team-28-filled'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <OfficialsWidget
              title="Barangay Nutrition Scholar"
              total={0}
              url="/dashboard/bns"
              icon={'fluent:people-team-28-filled'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <OfficialsWidget
              title="Barangay Service Point Officer"
              total={0}
              url="/dashboard/bspo"
              icon={'fluent:people-team-28-filled'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <OfficialsWidget
              title="Civilian Volunteer Organization"
              total={0}
              url="/dashboard/cvo"
              icon={'fluent:people-team-28-filled'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <OfficialsWidget
              title="Barangay Health Worker"
              total={0}
              url="/dashboard/bhw"
              icon={'fluent:people-team-28-filled'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <OfficialsWidget
              title="Purok Leaders"
              total={0}
              url="/dashboard/pl"
              icon={'fluent:people-team-28-filled'}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
