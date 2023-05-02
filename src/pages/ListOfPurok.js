import { Link as RouterLink } from 'react-router-dom';
// material
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
// components
import NotTreasurer from '../components/auth/NotTreasurer';
import Iconify from '../components/Iconify';
import Page from '../components/Page';
import { useAuth } from '../hooks/useAuth';
import { useProfile } from '../hooks/useProfile';
import { ListOfPurokWidget } from '../sections/@dashboard/listOfPurok';
// ----------------------------------------------------------------------

export default function PurokList() {
  const user = useAuth();
  const profile = useProfile(user?.uid);
  return (
    <NotTreasurer>
      <Page title="List Of Purok">
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h4" sx={{ mb: 2 }}>
              List of Purok
            </Typography>
            {user && profile?.accountRole && profile?.accountRole !== 'Captain' && (
              <Button
                variant="contained"
                component={RouterLink}
                to="/dashboard/residentsProfile"
                startIcon={<Iconify icon="eva:plus-fill" />}
              >
                New Residents
              </Button>
            )}
          </Stack>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <ListOfPurokWidget
                title="All Purok"
                description="All Residents"
                total={0}
                url="/dashboard/user"
                icon={'icon-park-solid:building-two'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ListOfPurokWidget
                title="PUROK 1"
                description="Brgy. Proper"
                total={0}
                url="/dashboard/user?purok=1"
                icon={'icon-park-solid:building-two'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ListOfPurokWidget
                title="PUROK 2"
                description="Brgy. Proper"
                total={0}
                url="/dashboard/user?purok=2"
                icon={'icon-park-solid:building-two'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ListOfPurokWidget
                title="PUROK 3A"
                description="Brgy. Proper"
                total={0}
                url="/dashboard/user?purok=3a"
                icon={'icon-park-solid:building-two'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ListOfPurokWidget
                title="PUROK 3B"
                description="Brgy. Proper"
                total={0}
                url="/dashboard/user?purok=3b"
                icon={'icon-park-solid:building-two'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ListOfPurokWidget
                title="PUROK 4"
                description="Brgy. Proper"
                total={0}
                url="/dashboard/user?purok=4"
                icon={'icon-park-solid:building-two'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ListOfPurokWidget
                title="PUROK 5"
                description="Sitio Malapinggan"
                total={0}
                url="/dashboard/user?purok=5"
                icon={'icon-park-solid:building-two'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ListOfPurokWidget
                title="PUROK 6"
                description="Sitio Balangcao 2"
                total={0}
                url="/dashboard/user?purok=6"
                icon={'icon-park-solid:building-two'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ListOfPurokWidget
                title="PUROK 7"
                description="Sitio Balangcao 2"
                total={0}
                url="/dashboard/user?purok=7"
                icon={'icon-park-solid:building-two'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ListOfPurokWidget
                title="PUROK 8"
                description="Sitio Balangcao 1"
                total={0}
                url="/dashboard/user?purok=8"
                icon={'icon-park-solid:building-two'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ListOfPurokWidget
                title="PUROK 9"
                description="Sitio Balangcao 1"
                total={0}
                url="/dashboard/user?purok=9"
                icon={'icon-park-solid:building-two'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ListOfPurokWidget
                title="PUROK 10A"
                description="Sitio Palo"
                total={0}
                url="/dashboard/user?purok=10A"
                icon={'icon-park-solid:building-two'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ListOfPurokWidget
                title="PUROK 11B"
                description="Sitio Palo"
                total={0}
                url="/dashboard/user?purok=11B"
                icon={'icon-park-solid:building-two'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ListOfPurokWidget
                title="PUROK 12"
                description="Sitio Siniloan"
                total={0}
                url="/dashboard/user?purok=12"
                icon={'icon-park-solid:building-two'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ListOfPurokWidget
                title="PUROK 13"
                description="Sitio Kiramong"
                total={0}
                url="/dashboard/user?purok=13"
                icon={'icon-park-solid:building-two'}
              />
            </Grid>
          </Grid>
        </Container>
      </Page>
    </NotTreasurer>
  );
}
