// material
import { Container, Grid, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { useAuth } from '../hooks/useAuth';
import { LegislativeWidget } from '../sections/@dashboard/legislative';
// ----------------------------------------------------------------------

export default function Legislative() {
  const user = useAuth();
  return (
    <Page title="Legislative">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" sx={{ mb: 3 }}>
            Legislative
          </Typography>
        </Stack>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <LegislativeWidget
              title="Ordinances"
              total={0}
              url="/dashboard/ordinances"
              icon={'icon-park-solid:building-two'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <LegislativeWidget
              title="Committee Reports"
              total={0}
              url="/dashboard/committeeReport"
              icon={'icon-park-solid:building-two'}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
