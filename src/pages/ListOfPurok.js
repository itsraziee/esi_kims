import { Link as RouterLink } from 'react-router-dom';
// material
import { Container, Typography, Grid, Stack, Button } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { ListOfPurokWidget } from '../sections/@dashboard/listOfPurok';
import { useAuth } from '../hooks/useAuth';
// ----------------------------------------------------------------------

export default function PurokList() {
  const user = useAuth();
  return (
    <Page title="List Of Purok">
      <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4" sx={{ mb: 5 }}>
          List of Purok
          </Typography>
          {user && (
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
              title="PUROK 1"
              description="Brgy. Proper"
              total={0}
              url="/dashboard/user"
              icon={'icon-park-solid:building-two'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ListOfPurokWidget
              title="PUROK 2"
              description="Brgy. Proper"
              total={0}
              url="/dashboard/user"
              icon={'icon-park-solid:building-two'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ListOfPurokWidget
              title="PUROK 3A"
              description="Brgy. Proper"
              total={0}
              url="/dashboard/user"
              icon={'icon-park-solid:building-two'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ListOfPurokWidget
              title="PUROK 3B"
              description="Brgy. Proper"
              total={0}
              url="/dashboard/user"
              icon={'icon-park-solid:building-two'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ListOfPurokWidget
              title="PUROK 4"
              description="Brgy. Proper"
              total={0}
              url="/dashboard/user"
              icon={'icon-park-solid:building-two'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ListOfPurokWidget
              title="PUROK 5"
              description="Sitio Malapinggan"
              total={0}
              url="/dashboard/user"
              icon={'icon-park-solid:building-two'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ListOfPurokWidget
              title="PUROK 6"
              description="Sitio Balangcao 2"
              total={0}
              url="/dashboard/user"
              icon={'icon-park-solid:building-two'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ListOfPurokWidget
              title="PUROK 7"
              description="Sitio Balangcao 2"
              total={0}
              url="/dashboard/user"
              icon={'icon-park-solid:building-two'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ListOfPurokWidget
              title="PUROK 8"
              description="Sitio Balangcao 1"
              total={0}
              url="/dashboard/user"
              icon={'icon-park-solid:building-two'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ListOfPurokWidget
              title="PUROK 9"
              description="Sitio Balangcao 1"
              total={0}
              url="/dashboard/user"
              icon={'icon-park-solid:building-two'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ListOfPurokWidget
              title="PUROK 10A"
              description="Sitio Palo"
              total={0}
              url="/dashboard/user"
              icon={'icon-park-solid:building-two'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ListOfPurokWidget
              title="PUROK 11B"
              description="Sitio Palo"
              total={0}
              url="/dashboard/user"
              icon={'icon-park-solid:building-two'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ListOfPurokWidget
              title="PUROK 12"
              description="Sitio Siniloan"
              total={0}
              url="/dashboard/user"
              icon={'icon-park-solid:building-two'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ListOfPurokWidget
              title="PUROK 13"
              description="Sitio Kiramong"
              total={0}
              url="/dashboard/user"
              icon={'icon-park-solid:building-two'}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
