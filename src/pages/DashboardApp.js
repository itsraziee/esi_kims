// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
// sections
import {
  // AppTasks,
  // AppNewsUpdate,
  // AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
 AppTrafficBySite,
  AppWidgetSummary,
  NewsUpdateCard,
  // AppCurrentSubject,
  // AppConversionRates,
} from '../sections/@dashboard/app';
import NEWSUPDATES from '../_mock/newsUpdate';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Document Services"  icon={'ion:documents'} />
          </Grid>
          {/* total={714000} --in between title and icon */}

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Blotter"  color="info" icon={'icon-park-solid:image-files'} />
          </Grid>
          {/* total={1352831} --in between title and icon */}

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Summon" color="warning" icon={'fa6-solid:file-pen'} />
          </Grid>
          {/* total={1723315} --in between title and icon */}

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Legislative" total={234} color="error" icon={'fa6-solid:building-columns'} />
          </Grid>
          {/* total={234} --in between title and icon */}

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Population"
              subheader="(+43%) than last year"
              chartLabels={[
                '2012',
                '2013',
                '2014',
                '2015',
                '2016',
                '2017',
                '2018',
                '2019',
                '2020',
                '2021',
                '2022',
              ]}
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
                { label: 'Purok 6', value: 34},
                { label: 'Purok 7', value: 29 },
                { label: 'Purok 8', value: 16 },
                { label: 'Purok 9', value: 19 },
                { label: 'Purok 10A', value: 33 },
                { label: 'Purok 11B', value: 10},
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

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Revenue"
              subheader="(+43%) than last year"
              chartData={[
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ]}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid> */}

          <Grid item xs={12} md={6} lg={8}>
            <NewsUpdateCard
              title="News Update"
             list={NEWSUPDATES}
            />
          </Grid>
          {/* <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/static/mock-images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid> */}

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid> */}

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Others"
              list={[
                {
                  name: 'About',
                  // value: 323234,
                  icon: <Iconify icon={'emojione-monotone:information'} color="#1877F2" width={32} height={32} />,
                },
                {
                  name: 'Legislative',
                  // value: 341212,
                  icon: <Iconify icon={'fa6-solid:building-columns'} color="#DF3E30" width={32} height={32} />,
                },
                {
                  name: 'Officials',
                  // value: 411213,
                  icon: <Iconify icon={'fluent:people-community-28-filled'} color="#006097" width={32} height={32} />,
                },
                {
                  name: 'Reference Number',
                  // value: 443232,
                  icon: <Iconify icon={'fluent:book-number-16-filled'} color="#1C9CEA" width={32} height={32} />,
                },
              ]}
            />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
