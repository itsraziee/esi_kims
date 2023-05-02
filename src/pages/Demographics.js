// @mui
import { Container, Grid, Stack, Typography } from '@mui/material';
import PopulationLineGraph from '../components/demographics/PopulationLineGraph';
import PopulationPieChart from '../components/demographics/PopulationPieChart';
// components
import Page from '../components/Page';
import PopulationTable from '../components/population/PopulationTable';
// sections

// ----------------------------------------------------------------------

export default function Demographics() {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Demographics
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <PopulationLineGraph />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <PopulationPieChart />
          </Grid>
          <Grid item xs={12}>
            <PopulationTable />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
