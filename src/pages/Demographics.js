// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
// sections
import { DemographicsChart, DemographicsTable } from '../sections/@dashboard/demographics';

// ----------------------------------------------------------------------

export default function Demographics() {
  const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Demographics
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <DemographicsTable
              title="Population"
              subheader="(+43%) than last year"
              chartLabels={['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022']}
              chartData={[
                {
                  name: 'Residents',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Male',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Female',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <DemographicsChart
              title="Current Population"
              chartData={[
                { label: 'Purok 1', value: 200 },
                { label: 'Purok 2', value: 100 },
                { label: 'Purok 3A', value: 120 },
                { label: 'Purok 3B', value: 89 },
                { label: 'Purok 4', value: 50 },
                { label: 'Purok 5', value: 107 },
                { label: 'Purok 6', value: 34 },
                { label: 'Purok 7', value: 29 },
                { label: 'Purok 8', value: 16 },
                { label: 'Purok 9', value: 19 },
                { label: 'Purok 10A', value: 33 },
                { label: 'Purok 11B', value: 10 },
                { label: 'Purok 12', value: 21 },
                { label: 'Purok 13', value: 17 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.chart.camouflage,
                theme.palette.chart.oceanBlue,
                theme.palette.chart.crayola,
                theme.palette.chart.architectureblue,
                theme.palette.chart.indianorange,
                theme.palette.chart.americanred,
                theme.palette.chart.vividpurple,
                theme.palette.chart.matte,
                theme.palette.chart.americanred,
                theme.palette.chart.navy,
                theme.palette.chart.teal,
                theme.palette.chart.pink,
                theme.palette.chart.frenchlime,
                theme.palette.chart.emerald
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
