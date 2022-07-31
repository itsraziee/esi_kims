// material
import { Container, Typography, Grid } from '@mui/material';
// components
import Page from '../components/Page';
import { OfficialsWidget } from '../sections/@dashboard/officials';

// ----------------------------------------------------------------------

export default function Officials() {
  return (
    <Page title="Officials">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Officials
        </Typography>
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
