import { Link as RouterLink } from 'react-router-dom';
// material
import { Button, Container, Grid, List, Stack, Typography } from '@mui/material';
// components
import { useEffect } from 'react';
import Page from '../components/Page';

import Iconify from '../components/Iconify';

import { useAuth } from '../hooks/useAuth';
import { useLegislatives } from '../hooks/useLegislatives';
import { useProfile } from '../hooks/useProfile';
import LegislativeList from '../sections/@dashboard/legislative/LegislativeList';
// ----------------------------------------------------------------------

export default function Legislative() {
  const user = useAuth();
  const profile = useProfile(user?.uid);

  const legislatives = useLegislatives();
  // const [tileViewMode, setTileViewMode] = useState(false);

  useEffect(() => {
    console.log({ legislatives });
  }, [legislatives]);

  return (
    <Page title="Legislative">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={0}>
          <Typography variant="h4">Ordinances</Typography>

          <Stack direction="row" spacing={1}>
            {/* <IconButton
              onClick={() => {
                setTileViewMode(!tileViewMode);
              }}
            >
              {tileViewMode && <GridViewIcon />}

              {!tileViewMode && <ListIcon />}
            </IconButton> */}
            {user &&
              profile?.accountRole &&
              profile?.accountRole !== 'Captain' &&
              profile?.accountRole !== 'Treasurer' && (
                <Button
                  variant="contained"
                  component={RouterLink}
                  to="/dashboard/legislativeForm"
                  startIcon={<Iconify icon="eva:plus-fill" />}
                >
                  Add Ordinance
                </Button>
              )}
          </Stack>
        </Stack>
        <Grid container spacing={3}>
          {/* {tileViewMode &&
            legislatives?.map((legislative) => (
              <Grid item xs={12} sm={8} md={3} key={legislative.id}>
                <LegislativeCard
                  title={legislative.title}
                  url={`/dashboard/viewlegislative/?uid=${legislative.id}`}
                  icon={'clarity:document-solid'}
                  ordinanceNumber={legislative?.ordinanceNumber}
                  authors={legislative?.authors}
                  series={legislative?.series}
                />
              </Grid>
            ))} */}
          {/* {!tileViewMode && ( */}
          <Grid item xs={12}>
            <List dense>
              {legislatives?.map((legislative) => (
                <LegislativeList
                  title={legislative.title}
                  ordinanceNumber={legislative?.ordinanceNumber}
                  series={legislative?.series}
                  authors={legislative?.authors}
                  url={`/dashboard/viewlegislative/?uid=${legislative.id}`}
                  key={legislative.id}
                />
              ))}
            </List>
          </Grid>
          {/* )} */}
        </Grid>
      </Container>
    </Page>
  );
}
