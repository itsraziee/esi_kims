// @mui
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Container, Typography, useTheme } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
// sections
import {
  AppNewsUpdate,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  NewsUpdateCard,
} from '../sections/@dashboard/app';
import { useAuth } from '../hooks/useAuth';
import NEWSUPDATES from '../_mock/newsUpdate';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();
  const user = useAuth();

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          {user && (
            <>
              <Grid item xs={12} sm={6} md={3}>
                <AppWidgetSummary
                  title="Billing Transaction"
                  total={0}
                  url="/dashboard/billingTransaction"
                  icon={'ic:round-payments'}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <AppWidgetSummary
                  title="Blotter"
                  total={0}
                  color="info"
                  url="/dashboard/blotter"
                  icon={'icon-park-solid:image-files'}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <AppWidgetSummary
                  title="Summon"
                  total={0}
                  color="warning"
                  url="/dashboard/summon"
                  icon={'fa6-solid:file-pen'}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <AppWidgetSummary title="List Of Purok" url="/dashboard/listOfPurok" total={0} icon={'ion:documents'} />
              </Grid>
            </>
          )}

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
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
            <AppCurrentVisits
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
                theme.palette.chart.blue[0],
                theme.palette.chart.violet[0],
                theme.palette.chart.yellow[0],
                theme.palette.chart.green[0],
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <NewsUpdateCard title="News Update" list={NEWSUPDATES} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite title="Reference Number" />

            <AppWidgetSummary
              title="Document Request Forms"
              total={0}
              color="info"
              url="/dashboard/RequestDocumentForm"
              icon={'icon-park-solid:image-files'}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
