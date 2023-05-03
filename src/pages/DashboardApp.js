// @mui
import { Container, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import PopulationLineGraph from '../components/demographics/PopulationLineGraph';
import PopulationPieChart from '../components/demographics/PopulationPieChart';
import { useProfile } from '../hooks/useProfile';
// components
import Page from '../components/Page';
// sections
import { useAuth } from '../hooks/useAuth';
import { useNews } from '../hooks/useNews';
import { AppWidgetSummary, DocumentRequestStatus, Feedback, NewsUpdateCard } from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const user = useAuth();
  const profile = useProfile(user?.uid);
  const news = useNews(5);

  useEffect(() => {
    console.log({ news });
  }, [news]);

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: -1 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          {user && profile?.accountRole && profile?.accountRole !== 'Treasurer' && (
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
            <PopulationLineGraph />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <PopulationPieChart />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <NewsUpdateCard title="News Update" list={news} />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <DocumentRequestStatus title="Reference Number" />
            <Feedback title="Send us your feedback" subheader="What could we do better?" />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
