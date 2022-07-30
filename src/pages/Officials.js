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
          <Grid item xs={12} sm={6} md={4}>
            <OfficialsWidget
              title="Barangay Officials"
              total={0}
              color="warning"
              url="/dashboard/bo"
              icon={'icon-park-solid:building-two'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OfficialsWidget
              title="Barangay Nutrition Scholar"
              total={0}
              color="warning"
              url="/dashboard/bns"
              icon={'icon-park-solid:building-two'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OfficialsWidget
              title="Barangay Service Point Officer"
              total={0}
              color="warning"
              url="/dashboard/bspo"
              icon={'icon-park-solid:building-two'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OfficialsWidget
              title="Civilian Volunteer Organization"
              total={0}
              color="warning"
              url="/dashboard/cvo"
              icon={'icon-park-solid:building-two'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OfficialsWidget
              title="Barangay Health Worker"
              total={0}
              color="warning"
              url="/dashboard/bhw"
              icon={'icon-park-solid:building-two'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <OfficialsWidget
              title="Purok Leaders"
              total={0}
              color="warning"
              url="/dashboard/pl"
              icon={'icon-park-solid:building-two'}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
