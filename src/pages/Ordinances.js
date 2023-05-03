import { Link as RouterLink } from 'react-router-dom';
// material
import { Button, Container, Grid, List, Stack, Typography } from '@mui/material';
// components
import { useEffect } from 'react';
import Page from '../components/Page';

import Iconify from '../components/Iconify';

import { useAuth } from '../hooks/useAuth';
import { useLegislatives } from '../hooks/useLegislatives';
import LegislativeList from '../sections/@dashboard/legislative/LegislativeList';
// ----------------------------------------------------------------------

export default function Ordinances() {
  const user = useAuth();

  const legislatives = useLegislatives();
  // const [tileViewMode, setTileViewMode] = useState(false);

  useEffect(() => {
    console.log({ legislatives });
  }, [legislatives]);

  return (
    <Page title="Ordinances">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" sx={{ mb: -3 }}>
            Ordinances
          </Typography>
            {user && (
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
        <Grid container spacing={-3}>
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
